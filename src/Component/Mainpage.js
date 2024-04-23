import React from 'react'
import './intrn.css';
import Video from './Video.js'
import NavigationPanel from './NavigationPanel.js';

export default function Mainpage() {
    return (
        <>
        
            <div className='mpage'>
                <h1 className='b1'>WE GO</h1>
                <br />
                <h1 className='b3'>JIMM</h1>
            </div>
            <Video></Video>
            <NavigationPanel></NavigationPanel>
        </>
    )
}
