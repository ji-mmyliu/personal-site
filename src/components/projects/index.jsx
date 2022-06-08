import * as React from "react";

function Project(props) {
    let btnList = props.buttons.map((i) => {
        
    });
    return (
        <div className="card text-light" style={{marginLeft:'2.5em'}}>
            <img className="card-img" src="static/dboj.png" alt={props.name} style={{width:'40em', height:'24em', filter:'brightness(40%)'}}></img>
            <div className="card-img-overlay">
                <h2 style={{color:'#fff'}}>{props.name}</h2>
                <p>{props.description}</p>
                <a href="https://dboj.jimmyliu.dev/"><button className="btn btn-warning">Link to Site</button></a>
                <a href="https://github.com/DiscordBotOnlineJudge"><button className="btn btn-dark">Github Repo</button></a>
            </div>
        </div>
    );
}

export const Projects = () => {
    return (
        <div className="container pl-5 pr-5">
            <article className="card mb-3">
                <div className="card-body">
                    <legend className="border-bottom mb-4"><h1 className="card-title">My Projects</h1></legend>
                </div>
                <div className="card text-light" style={{marginLeft:'2.5em'}}>
                    <img className="card-img" src="static/dboj.png" alt="Discord Bot Online Judge" style={{width:'40em', height:'24em', filter:'brightness(40%)'}}></img>
                    <div className="card-img-overlay">
                        <h2 style={{color:'#fff'}}>Discord Bot Online Judge</h2>
                        <p style={{maxWidth:'600px'}}>An online judging platform made as both a Discord bot and a website. Hosted 9 contests, has over 60 problems, and supports 16 programming languages.</p>
                        <a href="https://dboj.jimmyliu.dev/"><button className="btn btn-warning">Link to Site</button></a>
                        <a href="https://github.com/DiscordBotOnlineJudge"><button className="btn btn-dark">Github Repo</button></a>
                    </div>
                </div>
                <div className="card text-light" style={{marginLeft:'2.5em',marginTop:'2em'}}>
                    <img className="card-img" src="static/fizzbot.png" alt="FizzBot" style={{width:'40em', height:'24em', filter:'brightness(40%)'}}></img>
                    <div className="card-img-overlay">
                        <h2 style={{color:'#fff'}}>FizzBot</h2>
                        <p>A helpful League of Legends Discord bot that can provide champion stats,<br></br> builds, runes, and more!</p>
                        <a href="https://devpost.com/software/fizzbot"><button className="btn btn-success">Devpost Entry</button></a>
                        <a href="https://github.com/ji-mmyliu/FizzBot"><button className="btn btn-dark">Github Repo</button></a>
                    </div>
                </div>
                <div className="card text-light" style={{marginLeft:'2.5em',marginTop:'2em'}}>
                    <img className="card-img" src="static/mouse-movements.png" alt="AI Mouse Head Movements" style={{width:'40em', height:'24em', filter:'brightness(40%)'}}></img>
                    <div className="card-img-overlay">
                        <h2 style={{color:'#fff'}}>AI Head Movement Mouse Stimulator</h2>
                        <p>Allows disabled people to control a computer mouse by simply moving their<br></br> head and performing facial expressions.</p>
                        <a href="https://devpost.com/software/camera-movements-with-head"><button className="btn btn-success">Devpost Entry</button></a>
                        <a href="https://github.com/Averesoft/HeadMouseControl"><button className="btn btn-dark">Github Repo</button></a>
                    </div>
                </div>
                <div className="card text-light" style={{marginLeft:'2.5em',marginTop:'2em'}}>
                    <img className="card-img" src="static/sentiment-analysis.png" alt="Sentiment Analysis Neural Network" style={{width:'40em', height:'24em', filter:'brightness(40%)'}}></img>
                    <div className="card-img-overlay">
                        <h2 style={{color:'#fff'}}>Sentiment Analysis Neural Network</h2>
                        <p>A neural network that detects the sentiment of a natural language phrase.<br></br>Built using Sci-kit Learn Python.</p>
                        <a href="https://devpost.com/software/division-sigma-machine-learning-using-scikit-learn-4plxyj"><button className="btn btn-success">Devpost Entry</button></a>
                        <a href="https://github.com/stefanZorcic/Ignite-2020-Neural-Network"><button className="btn btn-dark">Github Repo</button></a>
                    </div>
                </div>
                <div className="card text-light" style={{marginLeft:'2.5em',marginTop:'2em'}}>
                    <img className="card-img" src="static/flappybird.png" alt="Flappy Bird" style={{width:40+'em', height:24+'em', filter:'brightness(40%)'}}></img>
                    <div className="card-img-overlay">
                        <h2 style={{color:'#fff'}}>Flappy Bird Remake</h2>
                        <p>A remake of the mobile game "Flappy Bird" using Java and HSA Console,<br></br>for the ICS3U final project</p>
                        <a href="https://github.com/ji-mmyliu/Flappy-Bird-Remake"><button className="btn btn-warning">Github Repo</button></a>
                    </div>
                </div>
                <div className="card text-light" style={{marginLeft:'2.5em', marginTop:'2em', marginBottom:'2em'}}>
                    <img className="card-img" src="static/to-do-list-flask.png" alt="Flask Todo List" style={{width:'40em', height:'24em', filter:'brightness(40%)'}}></img>
                    <div className="card-img-overlay">
                        <h2 style={{color:'#fff'}}>Flask To-Do List Web App</h2>
                        <p>A to-do list web app made with flask and SQLAlchemy.<br></br>Made for the LyonHacks II Hackathon web-development workshop demonstration.</p>
                        <a href="https://lyonhacks-workshop.jimmyliu.dev/"><button className="btn btn-success">Link to Site</button></a>
                        <a href="https://github.com/ji-mmyliu/lyonhacks-web-dev-workshop"><button className="btn btn-dark">Github Repo</button></a>
                    </div>
                </div>
            </article>
        </div>
    )
}