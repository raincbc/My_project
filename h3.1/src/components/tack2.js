import React from 'react';
import KISH from '../video/KISH.mp4'
import { useState } from 'react';

export const VideoContent = () => {

    const [playerState, setVideoState] = useState({
    progress: 0,
    });
    

    const playRef = React.createRef();

    onplay = () => {
        playRef.current.play()
    }

    onpause = () => {
        playRef.current.pause()
    }

    const handleTime = () => {
    const progress = (playRef.current.currentTime / playRef.current.duration)*100;
        setVideoState({
            ...playerState,            
            progress,      
        });        
        console.log(progress)
    };
    
    const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
        playRef.current.currentTime = (playRef.current.duration / 100) * manualChange;
        setVideoState({  
            ...playerState,
            progress: manualChange           
        });            
    };
    
    

    return <div className='videoWrapper'>
        <div>
            <video ref={playRef} onTimeUpdate={handleTime} >
                <source src={KISH}></source>
            </video>
        </div>
        <div>
            <input
                type="range"                
                min="0"                
                max="100"
                value={playerState.progress}
                onChange={(e) => handleVideoProgress(e)}                
            />            
        </div>        
        <div>
            <button className='videoBtn' onClick={onplay}>Play</button>
            <button className='videoBtn' onClick={onpause}>Pause</button>
        </div>
    </div>
}