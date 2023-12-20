import { useDispatch } from "react-redux"
import { addFilter } from "../../redux/contactSlice"

export const Filter = ({ value, onChange }) => {
    const dispatch = useDispatch()
    
    const handleChange = evt => {
        const value = evt.currentTarget.value
        dispatch(addFilter(value))
    }

    return(
        <>
            <p>Find contacts by name</p>
            <input type="text" onChange={handleChange} />
        </>
            
    )
}
