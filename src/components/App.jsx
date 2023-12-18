import { Form } from "./Form";
import { ContactList } from "./ContactList";
import { useDispatch} from "react-redux";
import { Filter } from "./Filter";

import { useEffect } from "react";
import { fetchContacts } from "../api/contacts";


export const App = () => {

  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

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
      <Filter/>
      <h2>Contacts</h2>
      <ContactList/>
    </div>
  );

}