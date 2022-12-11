import React from "react";
import Contact from "./Contact";
import loaderHOC from '../../HOCs/HOC'
export class Contacts extends React.Component{
    
    render() {
        const { data } = this.props
        return (
            <div  className="contacts-wrapper">
                {data.map((elem) => {
                    return <Contact key={elem.id} contact={elem} />

                })}
            </div>
        )
    }
}

export default loaderHOC(Contacts)

