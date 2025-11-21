import LazyVideo from "../LazyVideo/LazyVideo";
import "../../styles/Projects.css";
import { useState, useEffect } from "react";

export const Vocabinet = () => {
    const [isFirstVideoLoaded, setIsFirstVideoLoaded] = useState(false);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {!isFirstVideoLoaded && (
                <div className="loading-screen">
                    <span>Loading...</span>
                </div>
            )}

            <div className={`project-content ${isFirstVideoLoaded ? "visible" : "hidden"}`}>
                <h1 className="project-title">VOCABINET</h1>
                <span className="project-technologies">Technologies: React, JavaScript, CSS</span>
                <span className="project-intro-subtitle">Problem</span>
                <span className="project-intro-text">It's easy to forget new vocabulary learned while reading.</span>
                <span className="project-intro-subtitle">Solution</span>
                <span className="project-intro-text">A tool for searching and storing newly discovered vocabulary. Definitions are retrieved from the Merriam-Webster API. Users can save words to specific books or as individual entries, recording the date learned, and edit or delete saved items as needed.</span>
                <span className="project-intro-subtitle">Reflections</span>
                <span className="project-intro-text">Data is stored in localStorage. Potential future improvements include making word data available for download as JSON to enable transfer between devices and providing yearly statistics on vocabulary learned.</span>
                <div className="spacer"></div>
                {windowWidth <= 1000 && ( <span className="video-instruction">*Click to play/pause.</span>)}
                    <LazyVideo
                    project={"vocabinet"}
                    src={"./videos/SearchAndSave.mp4"}
                    poster={"./posters/SearchAndSave.jpg"}
                    preload="auto"
                    forceLoad={true}
                    onLoaded={() => setIsFirstVideoLoaded(true)}
                />
                <span className="video-caption">Look up new words and add them to your Vocabinet.</span>
                <LazyVideo
                    project={"vocabinet"}
                    src={"/videos/AtoZHomeView.mp4"}
                    poster={"/posters/AtoZHomePoster.jpg"}
                />
                <span className="video-caption">View saved words from A to Z.</span>
                <LazyVideo
                    project={"vocabinet"}
                    src={"/videos/ByBookHomeView.mp4"}
                    poster={"/posters/ByBookHomePoster.jpg"}
                />
                <span className="video-caption">View saved words by book.</span>
                <LazyVideo
                    project={"vocabinet"}
                    src={"/videos/SearchSavedWords.mp4"}
                    poster={"/posters/SearchSavedWords.jpg"} />
                <span className="video-caption">Search saved words.</span>
                <h2 className="project-subtitle">EDIT MODE</h2>
                <LazyVideo
                    project={"vocabinet"}
                    src={"/videos/EditName.mp4"}
                    poster={"/posters/EditName.jpg"}
                />
                <span className="video-caption">Own your Vocabinet.</span>
                <LazyVideo
                    project={"vocabinet"}
                    src={"/videos/EditMode.mp4"}
                    poster={"/posters/EditMode.jpg"}
                />
                <span className="video-caption">Manage and edit saved words.</span>
                <h2 className="project-subtitle">MOBILE VIEW</h2>
                <img className="project-screenshot-mobile" src="/screenshots/SaveWordWithoutBook.png" alt="Save word without book Mobile View" />
                <img className="project-screenshot-mobile" src="/screenshots/ByBookMobile.png" alt="By Book Mobile View" />
                <img className="project-screenshot-mobile" src="/screenshots/AToZMobile.png" alt="A To Z Mobile View" />
                <img className="project-screenshot-mobile" src="/screenshots/EditModeMobile.png" alt="Edit Mode Mobile View" />
                <img className="project-screenshot-mobile" src="/screenshots/EditStandaloneWord.png" alt="Edit word Mobile View" />
                <div className="spacer"></div>
            </div>
        </>
    )
}