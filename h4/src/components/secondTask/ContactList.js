import React from "react";
import Contact from "./Contact";
export default class Contacts extends React.Component{
    
    render() {
        const { data } = this.props
        return (
            <div  className="contacts-wrapper">
                {data.map((elem) => {
                    return (
                        <div key={elem.id}>
                            <Contact contact={elem} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

