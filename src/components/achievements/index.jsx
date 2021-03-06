import * as React from "react";

export const Achievements = () => {
    React.useEffect(() => {
        document.title = "Achievements | Jimmy's Personal Website";
    }, []);
    return (
        <div className="container pl-5 pr-5">
            <article className="card mb-3">
                <div className="card-body">
                    <legend className="border-bottom mb-4"><h1 className="card-title">Timeline and Achievements</h1></legend>
                    <div className="paragraph">
                        <legend className="border-bottom mb-4"><h3>2022</h3></legend>
                        
                        <h5>May</h5>
                        <ul>
                            <li><a href="https://www.ofsaa.on.ca/badminton">Ontario Federation of School Athletic Associations</a> (OFSAA) badminton mixed doubles - "A Flight" silver medal</li>
                        </ul>
                        
                        <h5>April</h5>
                        <ul>
                            <li>Hypatia Mathematics Contest 2022 - Group 3 Honour Roll</li>
                            <li>Euclid Mathematics Contest 2022 - Score of 77</li>
                        </ul>

                        <h5>March</h5>
                        <ul>
                            <li><a href="http://usaco.org">USA Computing Olympiad</a> 2022 <a href="http://usaco.org/index.php?page=open22results">Open Contest</a> Silver Division (Perfect score of 1000)</li>
                        </ul>
        
                        <h5>February</h5>
                        <ul>
                            <li>Canadian Computing Competition - Group 4 honour roll (score of 43)</li>
                            <li>Joined Project Metropolis - William Lyon Mackenzie C.I.'s website and app development team</li>
                        </ul>
        
                        <h5>January</h5>
                        <ul>
                            <li>Cyberpatriot XIV Semi-Finals</li>
                        </ul>
        
                        <h5>December</h5>
                        <ul>
                            <li>Cyberpatriot XIV State Rounds</li>
                        </ul>
        
                        <h5>October</h5>
                        <ul>
                            <li>Joined the Mackenzie Computer Programming Executive Team</li>
                        </ul>
        
                        <legend className="border-bottom mb-4"><h3>2021</h3></legend>
                        <h5>August</h5>
                        <ul>
                            <li><a href="https://ignition-hacks-2021.devpost.com/">Ignition Hacks</a> 2021 Division Delta Best Education Hack</li>
                        </ul>
        
                        <h5>June</h5>
                        <ul>
                            <li>DMOJ Monthly Open Programming Contest 2020-21 <a href="https://dmoj.ca/contest/dmopc20c7">June Contest</a> - 18<sup>th</sup> place</li>
                            <li>Achieved "Master" rating title on DMOJ with rating 1944</li>
                        </ul>
        
                        <h5>May</h5>
                        <ul>
                            <li><a href="https://ecoo.mcpt.ca/">ECOO</a> Programming Contest - 37<sup>th</sup> place with score 552</li>
                            <li>AP Computer Science A Exam - Score of 5</li>
                        </ul>
        
                        <h5>April</h5>
                        <ul>
                            <li>DMOJ Monthly Open Programming Contest 2020-21 <a href="https://dmoj.ca/contest/dmopc20c5">April Contest</a> - 36<sup>th</sup> place</li>
                            <li><a href="https://lyonhacks.devpost.com/">LyonHacks</a> Student Hackathon Honourable Mentions Winner</li>
                        </ul>
        
                        <legend className="border-bottom mb-4"><h3>2020</h3></legend>
                        <h5>November</h5>
                        <ul>
                            <li>Canadian Intermediate Mathematics Contest - Group 5 Honour Roll</li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    )
}