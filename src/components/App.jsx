import { Form } from "./Form";
import { ContactList } from "./ContactList";
import { useDispatch, useSelector} from "react-redux";
import { Filter } from "./Filter";
import { useEffect } from "react";
import { fetchContacts } from "../api/contacts";
import {handleFilter} from "../redux/contactSlice"
import { selectIsLoading, selectError, selectFilter } from "../redux/selectors";



export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter)
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

 const ContactFilter = evt => {
   const value = evt.currentTarget.value
   dispatch(handleFilter(value))
   
  };
console.log(filter)

  useEffect(() => {
    dispatch(fetchContacts())
  
  }, [dispatch])



  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1 style={{margin:0}}>Phonebook</h1>
      <Form />
      <Filter value={filter} onChange={ContactFilter}/>
      <h2>Contacts</h2>
    {isLoading && !error && <b>Request in progress...</b>}
      <ContactList/>
    </div>
  );

}