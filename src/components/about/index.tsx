import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

export const About = (): JSX.Element => {
    React.useEffect((): void => {
        document.title = "About Me | Jimmy's Personal Website";
    }, []);

    return (
        <div className="container">
            <article className="card mb-3">
                <div className="card-body">
                    <legend className="border-bottom mb-4"><h1 className="card-title">About Me</h1></legend>
                    <div className="paragraph">
                        <h3 style={{ marginBottom: '1em' }}>Hi, I'm Jimmy!</h3>
                        <p className="card-text">
                            I am an incoming first year student at the University of Waterloo Software Engineering program. My passions include competitive programming, software development, and mathematics.
                        </p>
                    </div>

                    <div className="paragraph">
                        <p className="card-text">
                            In addition to preparing for programming contests, hackathons, and math contests, I enjoy giving back to the community by teaching and mentoring other CS and math enthusiasts.
                            I have extensive experience in programming languages such as Python, Java, C++ and also dabble in HTML/CSS and Javascript. In my other time, I play competitive badminton and I also love skiing and snowboarding.
                        </p>
                    </div>

                    <div className="paragraph">
                        <p className="card-text" style={{ marginBottom: 5 + 'rem' }}>
                            You might be interested in some of my <Link to="/projects">projects</Link>, or <Link to="/achievements">achievements</Link>. Find me on <a href="https://devpost.com/ji-mmyliu">Devpost</a>, <a href="https://dmoj.ca/user/JimmyLiu">DMOJ</a>, <a href="https://mcpt.ca/user/ji_mmyliu">MCPT</a>, <a href="mailto:jimmyjcl753@gmail.com">email</a>, and <a href="https://github.com/ji-mmyliu">Github</a>.
                        </p>

                        <div id="footer-icons">
                            <a title="Github" href="https://github.com/ji-mmyliu" target="_blank" style={{ marginRight: '1em' }}><i className="fa fa-github" style={{ fontSize: '50px' }}></i></a>
                            <a title="Email" href="mailto:jimmyjcl753@gmail.com"><i className="fa fa-envelope" style={{ fontSize: '50px' }}></i></a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}