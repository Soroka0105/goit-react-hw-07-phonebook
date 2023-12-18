import css from "./contactElement.module.css"
import { useDispatch } from 'react-redux'
import { deleteContact } from "api/contacts"

export const ContactElement = ({ elm }) => {
    
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteContact(elm.id))
    }

    return (
        <li className={css.item}>
            
<p className={css.elm}>{elm.name}</p>
<p className={css.elm}>{elm.phone}</p>
<button type="button" onClick={handleDelete}>Delete</button>
        
        </li>
    )
}