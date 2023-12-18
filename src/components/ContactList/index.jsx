import { ContactElement } from "components/ContactElement"
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/selectors";
export const ContactList = () => {
    const contacts = useSelector(selectContacts)
return (

    <ul>
        {contacts.map(el => (
           <li><ContactElement key = {el.id} elm ={el}/></li>
       ))}
       
    </ul>
)
}