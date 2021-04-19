import './styles.css';

export const TextInput = ({type, value, placeholder, onChange}) => {
    return(
        <>
            <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
        </>
    )
}