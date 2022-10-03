import logo from "../images/meme.png"

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Meme"/>
            <h2>Meme Generator</h2>
            <h4>React Course - Project 3</h4>
        </header>
    )
}