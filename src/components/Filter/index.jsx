

export const Filter = ({ value, onChange }) => {
    // const dispatch = useDispatch()
    // const filteredvalue = (value) => {
    //     dispatch(filerAction(value))
    // }

    return(
        <>
            <p>Find contacts by name</p>
            <input type="text" value={value} onChange={onChange} />
        </>
            
    )
}
