import * as React from "react";

const Project = (props: { name: string, file: string, children: Array<JSX.Element> }): JSX.Element => {
    return (
        <div className="card text-light grow" style={{ margin: "0 3em 2em 3em", width: "fit-content" }}>
            <img className="card-img project-background-img" src={`/img/${props.file}`} alt={props.name}></img>
            <div className="card-img-overlay" style={{ width: "fit-content" }}>
                <h2 style={{ color: '#fff' }}>{props.name}</h2>
                <div className="project-content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export const Projects = (): JSX.Element => {
    React.useEffect((): void => {
        document.title = "Projects | Jimmy's Personal Website";
    }, []);

    return (
        <div className="container">
            <article className="card mb-3 shrink" style={{ minWidth: "fit-content" }}>
                <div className="card-body">
                    <legend className="border-bottom mb-4"><h1 className="card-title">My Recent Projects</h1></legend>
                </div>
                <Project name="LaZer Guitar" file="laser-guitar.png">
                    <p>A full guitar too big to take everywhere? We made a guitar with LASERS instead of strings!</p>
                    <div className="project-links">
                        <a href="https://drive.google.com/file/d/1x6AdjtD88mvw2LBRyiOMAe-ljKzCD3BE/view?usp=drive_link"><button className="btn" style={{ backgroundColor: "lightblue" }}>Demo Video</button></a>
                        <a href="https://git.uwaterloo.ca/the-guitar-heros"><button className="btn btn-dark">Code Repo</button></a>
                    </div>
                </Project>
                <Project name="Screentime Showdown" file="screentime-showdown.png">
                    <p>Trying to beat social media addiction? Why not do it with a fun and competitive challenge with all your friends?</p>
                    <div className="project-links">
                        <a href="https://screentimeshowdown.tech/"><button className="btn" style={{ backgroundColor: "lightblue" }}>Link to Site</button></a>
                        <a href="https://devpost.com/software/screentime-showdown"><button className="btn btn-dark" style={{ backgroundColor: "purple" }}>Devpost Entry</button></a>
                        <a href="https://github.com/JasonLovesDoggo/ScreenTimeShowdown"><button className="btn btn-dark">Github Repo</button></a>
                    </div>
                </Project>
                <Project name="Wireguard VPN Wizard" file="wireguard-vpn.png">
                    <p>Ever wanted your own VPN? This wizard can build you a hub-and-spoke virtual private network in minutes!</p>
                    <a href="https://github.com/ji-mmyliu/wg-vpn-onboarder"><button className="btn btn-dark">Github Repo</button></a>
                </Project>
                <Project name="QED" file="qed.png">
                    <p>Interested in learning something niche but don't know where to look? We'll match you with the right people!</p>
                    <div className="project-links">
                        <a href="https://qed.patricklin.dev/"><button className="btn" style={{ backgroundColor: "lightblue" }}>Link to Site</button></a>
                        <a href="https://devpost.com/software/qed"><button className="btn btn-dark" style={{ backgroundColor: "purple" }}>Devpost Entry</button></a>
                        <a href="https://github.com/ApocalypseCalculator/QED"><button className="btn btn-dark">Github Repo</button></a>
                    </div>
                </Project>
                <Project name="I Do With Liu" file="idowithliu.png">
                    <p>Andrew and Melanie's wedding website! Complete with secure RSVP, auto email sending, and registry claiming.</p>
                    <div className="project-links">
                        <a href="https://wedding.jimmyliu.dev/"><button className="btn" style={{ backgroundColor: "#F7E7CE" }}>Link to Site</button></a>
                        <a href="https://github.com/idowithliu"><button className="btn btn-dark">Github Repo</button></a>
                    </div>
                </Project>
                <Project name="Sign Language Anki Deck Generator" file="asl-anki.png">
                    <p>Trying to learn American Sign Language? We can quickly prepare you a large Anki flashcard deck of any words you'd like to study in ASL!</p>
                    <a href="https://github.com/ji-mmyliu/asl-anki-generator"><button className="btn btn-dark">Github Repo</button></a>
                </Project>
                <Project name="Project Metropolis" file="metropolis.png">
                    <p>William Lyon Mackenzie's school website and information hub. Frontend client made with React.js</p>
                    <div className="project-links">
                        <a href="https://maclyonsden.com/"><button className="btn btn-dark" style={{ backgroundColor: "#073763" }}>Link to Site</button></a>
                        <a href="https://github.com/wlmac"><button className="btn btn-dark">Github Repo</button></a>
                    </div>
                </Project>
                <Project name="RoundTable" file="roundtable.png">
                    <p>A virtual roundtable that can do (almost) everything a real table can do! Made for the Hack the North 2022 hackathon.</p>
                    <a href="https://github.com/orgs/Roundtable-HTN/repositories"><button className="btn btn-dark">Github Repo</button></a>
                </Project>
                <Project name="Discord Bot Online Judge" file="dboj.png">
                    <p>An online judging platform made as both a Discord bot and a website. Hosted 9 contests, has over 60 problems, and supports 16 programming languages.</p>
                    <div className="project-links">
                        <a href="https://dboj.jimmyliu.dev/"><button className="btn btn-dark" style={{ backgroundColor: "#006cf7" }}>Link to Site</button></a>
                        <a href="https://github.com/DiscordBotOnlineJudge"><button className="btn btn-dark">Github Repo</button></a>
                    </div>
                </Project>
                <Project name="FizzBot" file="fizzbot.png">
                    <p>A helpful League of Legends Discord bot that can provide champion stats, builds, runes, and more!</p>
                    <div className="project-links">
                        <a href="https://devpost.com/software/fizzbot"><button className="btn btn-dark" style={{ backgroundColor: "#006cf7" }}>Devpost Entry</button></a>
                        <a href="https://github.com/ji-mmyliu/FizzBot"><button className="btn btn-dark">Github Repo</button></a>
                    </div>
                </Project>
                <Project name="AI Mouse Head Movements" file="mouse-movements.png">
                    <p>Allows disabled people to control a computer mouse by simply moving their head and performing facial expressions.</p>
                    <div className="project-links">
                        <a href="https://devpost.com/software/camera-movements-with-head"><button className="btn btn-success">Devpost Entry</button></a>
                        <a href="https://github.com/Averesoft/HeadMouseControl"><button className="btn btn-dark">Github Repo</button></a>
                    </div>
                </Project>
                <Project name="Sentiment Analysis Neural Network" file="sentiment-analysis.png">
                    <p>A neural network that detects the sentiment of a natural language phrase. Built using Sci-kit Learn Python.</p>
                    <div className="project-links">
                        <a href="https://devpost.com/software/division-sigma-machine-learning-using-scikit-learn-4plxyj"><button className="btn btn-success">Devpost Entry</button></a>
                        <a href="https://github.com/stefanZorcic/Ignite-2020-Neural-Network"><button className="btn btn-dark">Github Repo</button></a>
                    </div>
                </Project>
                <Project name="Flappy Bird Remake" file="flappybird.png">
                    <p>A remake of the mobile game "Flappy Bird" using Java and HSA Console, for the ICS3U final project</p>
                    <a href="https://github.com/ji-mmyliu/Flappy-Bird-Remake"><button className="btn btn-warning">Github Repo</button></a>
                </Project>
                <Project name="Flask To-Do List Web App" file="to-do-list-flask.png">
                    <p>A to-do list web app made with flask and SQLAlchemy. Made for the LyonHacks II Hackathon web-development workshop demonstration.</p>
                    <div className="project-links">
                        <a href="https://lyonhacks-workshop.jimmyliu.dev/"><button className="btn btn-success">Link to Site</button></a>
                        <a href="https://github.com/ji-mmyliu/lyonhacks-web-dev-workshop"><button className="btn btn-dark">Github Repo</button></a>
                    </div>
                </Project>
            </article>
        </div>
    );
}