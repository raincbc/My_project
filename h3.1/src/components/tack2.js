import React from 'react';

export const VideoContent = () => {

    const playRef = React.createRef();
    const pauseRef = React.createRef();

    onclick = (event) => {
        playRef.current.play()
    }

    return <div>
        <div>
            <video>
                <source src="../UshaikaRiverEmb_640x360.webm"></source>
            </video>
        </div>
        <div>
            <button onClick={onclick}>Play</button>
            <button>Pause</button>
        </div>
    </div>
}