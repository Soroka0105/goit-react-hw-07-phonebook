import { useState } from 'react'

export const Form = (fu) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState("")
    const reset = () => {
        setName('')
        setPhone('')
      
    }

      const handleSubmit = (e) => {
		e.preventDefault()
        fu.addContact(name, phone)
      
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