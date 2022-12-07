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
        loaded: true
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
            .then(result => withDelay(2000)(result))
            .then(result => this.setResult(result))
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
        return newContacts;
    }

    setResult(data) {
        this.setState({ contacts: data })
    }

    render() {  
        const arr = this.state.contacts;
        const load = this.state.loaded;

        return (
            <div>
                <ContactList data={arr} load={load} />
            </div>
        )
    }
}

const loaderHOC = (WrappedComponent) => {
    return class extends React.Component{
        render() {
            console.log(this.props.load)
            return <WrappedComponent {...this.props} />
        }
    }
}

loaderHOC(ContactList)