export default function Body() {
    return (
        <div>
            <div className="bodyInfo">
                <div className="bodyText">
                    <h1 className="header">Welcome to Responsive Web Design</h1>
                    <p className="textDump">Hello. Something about me. More talking that is really interesting. Hope you like the website. Really Impress them. Blah blah blah. 
                        Don't forget a picture, even if its an avatar and not a real life photo. Short but with enough content to draw them in.</p>
                </div>
                <img className="freeImage" src="freeStuff.png" alt="Free Stuff"></img>
            </div>
            <div className="projectInfo">
                <h2 className="currentProjects">My current projects</h2>
                <hr className="underline"></hr>
                <div className="projectImages">
                    <img className="projectImage" src="project.jpg" alt="First project"></img>
                    <img className="projectImage" src="project.jpg" alt="Second project"></img>
                    <img className="projectImage" src="project.jpg" alt="Third project"></img>
                    <img className="projectImage" src="project.jpg" alt="Fourth project"></img>
                    <img className="projectImage" src="project.jpg" alt="Fifth project"></img>
                </div>
            </div>
        </div>
    );
}