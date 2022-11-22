import React from "react";
export default class Album extends React.Component{
    state = {
        data:[]
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => {
                if (response.ok) {
                    const res = response.json();
                    return res
                } else {
                    throw new Error('err');
                }   
            })            
            .then(res => this.setState({ data: res }))
            .catch(e => console.log(e));
    }

    render() {
        const albums = this.state.data
        return (
            <div>
                {albums.map((album, index) => (
                    <div key={album.id} >
                        {album.id} - {index} - {album.title}
                    </div>
                ))
                }
            </div>
        )
    }
}