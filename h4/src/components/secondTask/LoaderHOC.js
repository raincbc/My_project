import React from "react";

const BASE_URL = 'https://api.randomuser.me/?nat=us,gb&results=10';

export default class LoaderHOC extends React.Component{
    state = {
        contacts: [],
    }

    componentDidMount() {
        fetch(BASE_URL)
            .then(response => {
                if (response.ok) {
                    const result = response.json();
                    return result
                } else {
                    throw new Error('err');
                }   
            })            
            .then(result => this.filterContacts(result))
            .catch(e => console.log(e));
    }

    filterContacts(data) {
        const contactData = data.results;
        const newContacts = []

        contactData.filter((elem) => {
            const element = {
                name: `${elem.name.first} ${elem.name.last}`,
                thumbnail: `${elem.picture.medium}`,
                id:`${elem.id.value}`
            }      
            newContacts.push(element)
        })       
        this.setState({ contacts: newContacts })
    }

    render() {
        const arr = this.state.contacts
        return (
            <div className="contacts-wrapper">
                {arr.map((elem) => {
                    return (
                        <div key={elem.id}>
                            <img src={elem.thumbnail} ></img><br/>
                            {elem.name}<br />
                            {elem.id}
                        </div>
                    )
                })}
            </div>
        )
    }
}