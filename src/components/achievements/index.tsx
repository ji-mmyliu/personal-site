import * as React from "react";

export const Achievements = (): JSX.Element => {
    React.useEffect(() => {
        document.title = "Achievements | Jimmy's Personal Website";
    }, []);
    return (
        <article className="card mb-3">
            <div className="card-body">
                <legend className="border-bottom mb-4"><h1 className="card-title">Timeline and Achievements</h1></legend>
                <div className="paragraph">
                    <legend className="border-bottom mb-4"><h3>2022</h3></legend>

                    <h5>May</h5>
                    <ul>
                        <li><a href="https://play.picoctf.org/events/70" target="_blank">picoCTF 2022</a> Capture the Flag competition by <a href="https://www.cmu.edu/" target="_blank">CMU</a> 3<sup>rd</sup> place in <a href="https://discover.rbcroyalbank.com/canhack-2022-teaching-students-cyber-security-skills-through-friendly-competition/" target="_blank">CanHack</a></li>
                        <li><a href="https://www.ofsaa.on.ca/badminton" target="_blank">Ontario Federation of School Athletic Associations</a> (OFSAA) badminton mixed doubles - "A Flight" silver medal</li>
                    </ul>

                    <h5>April</h5>
                    <ul>
                        <li>Hypatia Mathematics Contest 2022 - Group 3 Honour Roll</li>
                        <li>Euclid Mathematics Contest 2022 - Score of 77</li>
                    </ul>

                    <h5>March</h5>
                    <ul>
                        <li><a href="http://usaco.org" target="_blank">USA Computing Olympiad</a> 2022 <a href="http://usaco.org/index.php?page=open22results" target="_blank">Open Contest</a> Silver Division (Perfect score of 1000)</li>
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
                        <li><a href="https://ignition-hacks-2021.devpost.com/" target="_blank">Ignition Hacks</a> 2021 Division Delta Best Education Hack</li>
                    </ul>

                    <h5>June</h5>
                    <ul>
                        <li>DMOJ Monthly Open Programming Contest 2020-21 <a href="https://dmoj.ca/contest/dmopc20c7" target="_blank">June Contest</a> - 18<sup>th</sup> place</li>
                        <li>Achieved "Master" rating title on DMOJ with rating 1944</li>
                    </ul>

                    <h5>May</h5>
                    <ul>
                        <li><a href="https://ecoo.mcpt.ca/" target="_blank">ECOO</a> Programming Contest - 37<sup>th</sup> place with score 552</li>
                        <li>AP Computer Science A Exam - Score of 5</li>
                    </ul>

                    <h5>April</h5>
                    <ul>
                        <li>DMOJ Monthly Open Programming Contest 2020-21 <a href="https://dmoj.ca/contest/dmopc20c5" target="_blank">April Contest</a> - 36<sup>th</sup> place</li>
                        <li><a href="https://lyonhacks.devpost.com/">LyonHacks</a> Student Hackathon Honourable Mentions Winner</li>
                    </ul>

                    <legend className="border-bottom mb-4"><h3>2020</h3></legend>
                    <h5>November</h5>
                    <ul>
                        <li>Canadian Intermediate Mathematics Contest - Group 5 Honour Roll</li>
                    </ul>

                    <legend className="border-bottom mb-4"><h3>2019</h3></legend>
                    <h5>May</h5>
                    <ul>
                        <li>Acceptance into the <a href="http://wlmac.ca/macsprogram/" target="_blank">MaCS</a> enriched Math and Computer Science program at William Lyon Mackenzie Collegiate Institute.</li>
                    </ul>
                </div>
            </div>
        </article>
    )
}