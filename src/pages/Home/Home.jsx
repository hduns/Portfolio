import "./Home.css"
import { useState, useRef, useEffect } from 'react';
import { Vocabinet } from "../../Components/Vocabinet/Vocabinet";
import { MyGroceries } from "../../Components/MyGroceries/MyGroceries";

export const Home = () => {
    const [projectClicked, setProjectClicked] = useState("vocabinet");
    const [menuOpen, setMenuOpen] = useState(true);
    const containerRef = useRef(null);

    const handleClick = (project) => {
        setProjectClicked(project);
        if (window.innerWidth <= 615) setMenuOpen(false);
    }

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({ top: 0, behavior: "auto" });
        }
    }, [projectClicked]);


    return (
        <div id='home-container'>
            <div className={`menu ${menuOpen ? "" : "closed"}`}>
                <div className='project-list-container'>
                    <ul>
                        <li className={`vocabinet-title-menu ${projectClicked === "vocabinet" ? "title-clicked purple" : ""}`} onClick={() => handleClick('vocabinet')}>VOCABINET</li>
                        <li className={`my-groceries-title-menu ${projectClicked === "myGroceries" ? "title-clicked pink" : ""}`} onClick={() => handleClick('myGroceries')}>MY GROCERIES</li>
                    </ul>
                </div>
                <div className='site-title-container'>
                    <h1>HANNAH DUNSMORE</h1>
                </div>
            </div>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}> {menuOpen ? "−" : "+"} </button>
            <div className={`project-container`}>
                {projectClicked === "vocabinet" && <Vocabinet></Vocabinet>}
                {projectClicked === "myGroceries" && <MyGroceries />}
            </div>
        </div>
    )
}