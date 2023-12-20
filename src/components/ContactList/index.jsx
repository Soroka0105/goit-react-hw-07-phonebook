import { ContactElement } from "components/ContactElement"
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
export const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts)
    
return (

    <ul>
        {contacts.map(el => (
           <ContactElement key = {el.id} elm ={el}/>
       ))}
       
    </ul>
    )
}