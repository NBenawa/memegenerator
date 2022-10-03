export default function Content() {
    return (
        <div className="content">
            <div className="form">
                <div className="first-row">
                    <input className="form-input" placeholder="Top Text"/>
                    <input className="form-input" placeholder="Bottom Text"/>
                </div>
                <button className="form-button">Get a new meme image</button>
            </div>
            <img className="result-image" alt="Result" />
        </div>
    )
}