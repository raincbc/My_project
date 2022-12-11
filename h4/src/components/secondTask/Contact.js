import React from "react";

const Contact = ({contact}) => {
    return (
        <div className="contact">            
            <img src={contact.thumbnail} />
            <span>
                {contact.name}
            </span>
            <span>
                {contact.id}
            </span>
        </div>          
    )
}

export default Contact;