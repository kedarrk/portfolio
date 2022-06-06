import React, { useState } from 'react';

function Projects(){
    const [project,setProject]= 
    useState([{title:"Algo Visualizer",tech:"JavaScript, HTML, CSS",desc:"Website to visualise Graph algorithms and Maze generation algorithms.Implemented Breadth first Search, Depth First Search and Maze generation algorithms.",img:"../algo.gif",src:"https://github.com/kedarrk/algo-visualizer",link:"https://kedarrk.github.io/algo-visualizer/main.html",},
    {title:"Minesweeper",desc:"Created Minesweeper Game using ReactJS.Used BFS Algorithm to further optimise the Game",img:"../mine.gif",src:"https://github.com/kedarrk/Minesweeper",link:"https://kedarrk.github.io/Minesweeper/"},
{title:"Flappy Duck!",desc:"Created a game just like Flappy Bird using vanilla Javascript and HTML canvas.",img:"../flappy.gif",src:"https://github.com/kedarrk/Flappy-Duck-",link:"https://kedarrk.github.io/Flappy-Duck-/"},
{title:"Meme Generator",desc:"Created a meme generator website using IMGFlip Api and ReactJS.User can create a meme using any of the provided template and also download the meme.",img:"../meme.gif",src:"https://github.com/kedarrk/meme-generator",link:"https://kedarrk.github.io/meme-generator/"},
{title:"Pong Multiplayer",desc:"Build the classic multiplayer Pong game.Used web-sockets for bi-directional sharing of information between the client and the server",img:"../pong.png",src:"https://github.com/kedarrk/pong-multiplayer",link:""},

]);
    const [index,setIndex]=useState(4);

    return(
        <div className="edu-container">
        <div className="title">Projects</div>
        {
        project.map((projects)=>{
        return(
        <div className="proj-body" data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="10"
        data-aos-duration="500"
        data-aos-once="true">
        <div className="proj-txt" >
        <div className="edu-act-title proj-title">{projects.title}</div>
        <div className="proj-desc">{projects.desc}</div>
        <div className="proj-btn"><a href={projects.src} target="_blank"><button className="button-24">Source Code</button></a>
        <a href={projects.link} target="_blank"><button className="button-24">Link</button></a></div>
        </div>
        <div className="proj-img"><img src={projects.img} className="imgp"/></div>
        </div>)})
        }
        </div>
    );
}
export default Projects;