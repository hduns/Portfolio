import LazyVideo from "../LazyVideo/LazyVideo";
import "../../styles/Projects.css";
import { useState, useEffect } from "react";

export const MyGroceries = () => {
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
                <h1 className="project-title">MY GROCERIES</h1>
                <span className="project-technologies">Technologies: C#, ASP.NET Core, Entity Framework Core, PostgreSQL, JWT, TypeScript, React, Sass/SCSS</span>
                <span className="project-intro-subtitle">Problem</span>
                <span className="project-intro-text">I rarely use pen and paper to make a shopping list. When I do, I often misplace the list or have to cross things out. Without an application that lets me easily keep track of the ingredients I have at home and plan meals in one place, I sometimes end up buying items I already have or things I don't need at the supermarket.</span>
                <span className="project-intro-subtitle">Solution</span>
                <span className="project-intro-text">A tool that allows users to create an account, save recipes, plan meals for the week (or beyond), and update their kitchen inventory. The site calculates a shopping list based on the current kitchen inventory and the servings specified in the meal plan.</span>
                <span className="project-intro-subtitle">Reflections</span>
                <span className="project-intro-text">Potential future enhancements include social features that allow users to connect with friends and send recipes to one another. Update the admin role to review and approve new ingredients submitted by users.</span>
                <div className="spacer"></div>
                {windowWidth <= 1000 && ( <span className="video-instruction">*Click to play/pause.</span>)}
                <LazyVideo
                    project="my-groceries"
                    src="/videos/Login.mp4"
                    poster="/posters/Login.jpg"
                    preload="auto"
                    forceLoad={true}
                    onLoaded={() => setIsFirstVideoLoaded(true)}
                />
                <span className="video-caption">Log in and view saved recipes.</span>
                <LazyVideo
                    project="my-groceries"
                    src="/videos/AddRecipe.mp4"
                    poster="/posters/AddRecipe.jpg"
                />
                <span className="video-caption">Add new recipes.</span>

                <LazyVideo
                    project="my-groceries"
                    src="/videos/EditRecipe.mp4"
                    poster="/posters/EditRecipe.jpg"
                />
                <span className="video-caption">Edit your existing recipes.</span>

                <LazyVideo
                    project="my-groceries"
                    src="/videos/EditMenuPlanner.mp4"
                    poster="/posters/EditMenuPlanner.jpg"
                />
                <span className="video-caption">Create meal plan.</span>

                <LazyVideo
                    project="my-groceries"
                    src="/videos/EditKitchenInventory.mp4"
                    poster="/posters/EditKitchenInventory.jpg"
                />
                <span className="video-caption">
                    Mark the items you have at home to update your shopping list.
                </span>

                <h2 className="project-subtitle">MOBILE VIEW</h2>
                <img className="project-screenshot-mobile" src="/screenshots/RecipesList.jpg" alt="Recipe list Mobile View" />
                <img className="project-screenshot-mobile" src="/screenshots/RecipeDetail.jpg" alt="Recipe detail Mobile View" />
                <img className="project-screenshot-mobile" src="/screenshots/AddRecipeForm.jpg" alt="Add Recipe Form Mobile View" />
                <img className="project-screenshot-mobile" src="/screenshots/EditRecipe.jpg" alt="Edit Recipe Mobile View" />
                <img className="project-screenshot-mobile" src="/screenshots/MenuPlanner.jpg" alt="Menu Planner Mobile View" />
                <div className="spacer"></div>
            </div>
        </>
    );
};
