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

// export const Square = () => {
//     const squareRef = React.createRef();

//     useEffect(() => {
//         setTimeout(() => {
//             squareRef.current.className = 'square1'
//         }, 2000);
//     })

//     return <div ref={squareRef} className="square"></div>
// }