import * as React from "react";

const Project = (props) => {
    return (
        <div className="card text-light" style={{marginLeft:'2.5em', marginBottom:'2em'}}>
            <img className="card-img" src={`static/${props.file}`} alt={props.name} style={{width:'40em', height:'24em', filter:'brightness(40%)'}}></img>
            <div className="card-img-overlay">
                <h2 style={{color:'#fff'}}>{props.name}</h2>
                <div className="project-content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export const Projects = () => {
    React.useEffect(() => {
        document.title = "Projects | Jimmy's Personal Website";
    }, []);

    return (
        <div className="container pl-5 pr-5">
            <article className="card mb-3">
                <div className="card-body">
                    <legend className="border-bottom mb-4"><h1 className="card-title">My Projects</h1></legend>
                </div>
                <Project name="Discord Bot Online Judge" file="dboj.png">
                    <p>An online judging platform made as both a Discord bot and a website. Hosted 9 contests, has over 60 problems, and supports 16 programming languages.</p>
                    <a href="https://dboj.jimmyliu.dev/"><button className="btn btn-warning">Link to Site</button></a>
                    <a href="https://github.com/DiscordBotOnlineJudge"><button className="btn btn-dark">Github Repo</button></a>
                </Project>
                <Project name="FizzBot" file="fizzbot.png">
                    <p>A helpful League of Legends Discord bot that can provide champion stats, builds, runes, and more!</p>
                    <a href="https://devpost.com/software/fizzbot"><button className="btn btn-success">Devpost Entry</button></a>
                    <a href="https://github.com/ji-mmyliu/FizzBot"><button className="btn btn-dark">Github Repo</button></a>
                </Project>
                <Project name="AI Mouse Head Movements" file="mouse-movements.png">
                    <p>Allows disabled people to control a computer mouse by simply moving their head and performing facial expressions.</p>
                    <a href="https://devpost.com/software/camera-movements-with-head"><button className="btn btn-success">Devpost Entry</button></a>
                    <a href="https://github.com/Averesoft/HeadMouseControl"><button className="btn btn-dark">Github Repo</button></a>
                </Project>
                <Project name="Sentiment Analysis Neural Network" file="sentiment-analysis.png">
                    <p>A neural network that detects the sentiment of a natural language phrase. Built using Sci-kit Learn Python.</p>
                    <a href="https://devpost.com/software/division-sigma-machine-learning-using-scikit-learn-4plxyj"><button className="btn btn-success">Devpost Entry</button></a>
                    <a href="https://github.com/stefanZorcic/Ignite-2020-Neural-Network"><button className="btn btn-dark">Github Repo</button></a>
                </Project>
                <Project name="Flappy Bird Remake" file="flappybird.png">
                    <p>A remake of the mobile game "Flappy Bird" using Java and HSA Console, for the ICS3U final project</p>
                    <a href="https://github.com/ji-mmyliu/Flappy-Bird-Remake"><button className="btn btn-warning">Github Repo</button></a>
                </Project>
                <Project name="Flask To-Do List Web App" file="to-do-list-flask.png">
                    <p>A to-do list web app made with flask and SQLAlchemy. Made for the LyonHacks II Hackathon web-development workshop demonstration.</p>
                    <a href="https://lyonhacks-workshop.jimmyliu.dev/"><button className="btn btn-success">Link to Site</button></a>
                    <a href="https://github.com/ji-mmyliu/lyonhacks-web-dev-workshop"><button className="btn btn-dark">Github Repo</button></a>
                </Project>
            </article>
        </div>
    );
}