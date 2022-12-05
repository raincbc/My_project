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
        console.log(contactData)
        
        contactData.map((elem) => {
            const map = new Map;
            map.set( 'name', `${elem.name.first} ${elem.name.last}`);
            map.set('thumbnail', `${elem.picture.medium}`);
            map.set('id', `${elem.id.value}`);
            console.log(map)
            return map;
        })
        this.setState({contacts:this.map})
    }

    render() {
        console.log(this.state.contacts)
        return (
            <div></div>
        )
    }
}