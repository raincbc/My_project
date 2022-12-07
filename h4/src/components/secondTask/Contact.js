import React from "react";

const Contact = ({contact}) => {
    return (
        <div>            
            <img src={contact.thumbnail} ></img><br/>
            {contact.name}<br />
            {contact.id}
        </div>          
    )
}

export default Contact;