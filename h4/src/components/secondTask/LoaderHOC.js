import React from "react";
import ContactList from "./ContactList";

const BASE_URL = 'https://api.randomuser.me/?nat=us,gb&results=10';

const withDelay = (delay) => (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

export default class LoaderHOC extends React.Component{
    state = {
        contacts: [],
        loaded: false
    }

    componentDidMount() {
        
        this.setState({ loaded: true })
        
        fetch(BASE_URL)
            .then(response => {
                if (response.ok) {
                    const result = response.json();
                    
                    return result
                } else {
                    throw new Error('err');
                }   
            })
            .then(result => withDelay(2000)(result))
            .then(result => {
                const data = this.filterContacts(result)
                this.setResult(data)
                this.setState({loaded:false})
            })
            .catch(e => console.log(e));
    }

    filterContacts(data) {
        const contactData = data.results;


        const filteredContacts = contactData.map((elem) => {
            const element = {
                name: `${elem.name.first} ${elem.name.last}`,
                thumbnail: `${elem.picture.medium}`,
                id: `${elem.id.value}`
            }
            return element
        })
        return filteredContacts
    }

    setResult(data) {
        this.setState({ contacts: data })
    }

    render() {  
        const {contacts, loaded}= this.state


        return (
            <div>
                <ContactList data={contacts} load={loaded} />
            </div>
        )
    }
}

