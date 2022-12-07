import React from "react";
import Contact from "./Contact";
import loaderHOC from './HOC'
export class Contacts extends React.Component{
    
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

export default loaderHOC(Contacts)

