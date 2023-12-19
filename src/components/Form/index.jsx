import { addContact } from 'api/contacts'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export const Form = (fu) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState("")
    const dispatch = useDispatch()
    const reset = () => {
        setName('')
        setPhone('')
      
    }

      const handleSubmit = (e) => {
		e.preventDefault()
          dispatch(addContact({ name, phone }))
          console.log(name)
          console.log(phone)
        reset()
	}
    const handleNameChange = evt => {
        setName(evt.currentTarget.value)
    }
    const handlePhoneChange = evt => {
        setPhone(evt.currentTarget.value)
    }

    
    return (
            <form onSubmit={handleSubmit}>
                <input value={name} type="text" name='name' onChange={handleNameChange} required />
                <input value={phone} type="tel" name='phone' onChange={handlePhoneChange} required/>
                <button type='submit'>Add Contact</button>
            </form>
        )
    

}