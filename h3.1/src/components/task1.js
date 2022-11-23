import React, { useEffect } from 'react';
import '../index.css'

export default class Square extends React.Component{

    squareRef = React.createRef();

    componentDidMount() {
        this.squareRef.current.className = 'square';
    }

    MoveIt() {
        setTimeout(() => {
            this.squareRef.current.className = 'square1'
        }, 2000);
        
    }

    render() {
        return (
            <div>
                <div ref={this.squareRef}>{ this.MoveIt() }</div>
            </div>
        )
    }
}
