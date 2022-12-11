export const FormInput = (data) => {
    const { title, placeholder, name, func } = data.data;
    return (
        <div>
            <label>{ title }</label>
            <input
                name={name}
                placeholder={placeholder}
                onChange={func}
            />
        </div>
    )
}
