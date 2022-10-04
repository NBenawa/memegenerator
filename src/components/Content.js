import React from 'react';
import image_data from '../memesData.js';

export default function Content() {
    let [resultImage, setResultImage] = React.useState("")
    function getRandomUrl() {
        const data = image_data.data.memes;
        const rand_item = Math.floor(Math.random()*data.length);
        const url = data[rand_item]["url"];
        
        setResultImage(url)
    }
    return (
        <div className="content">
            <div className="form">
                <div className="first-row">
                    <input className="form-input" placeholder="Top Text"/>
                    <input className="form-input" placeholder="Bottom Text"/>
                </div>
                <button className="form-button" onClick={getRandomUrl}>Get a new meme image</button>
            </div>
            <img src={resultImage} className="result-image" alt="Result" />
        </div>
    )
}