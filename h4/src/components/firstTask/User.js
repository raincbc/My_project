const User = ({user}) => {
    return (
        <div>
            {user.name}--
            {user.username}--
            {user.email}--
            {user.phone}--
            {user.website}<br />  
            {user.address.city}--
            {user.address.geo.lat}--
            {user.address.geo.lng}--
            {user.address.street}--
            {user.address.suite}--
            {user.address.zipcode}<br />
            {user.company.bs}--
            {user.company.catchPhrase}--
            {user.company.name}--  
        </div>    
    )
}

export default User;