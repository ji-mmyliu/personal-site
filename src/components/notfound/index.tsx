import * as React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = (): JSX.Element => {
    const navigate = useNavigate();
    React.useEffect(() => {
        document.title = "404 Page Not Found | Jimmy's Personal Website";
    }, []);
    return (
        <div className="container">
            <article className="card mb-3">
                <div className="card-body">
                    <legend className="border-bottom mb-4"><h2 className="card-title">404 Error: Page Not Found</h2></legend>
                    <p>
                        Please double check the spelling of the link.<br></br><br></br>
                        <a href={"/"} onClick={(ev) => {
                            ev.preventDefault();
                            navigate("/");
                        }}><button className="btn btn-outline-primary" data-testid="backToHome">Back to Home</button></a>
                    </p>
                </div>
            </article>
        </div>
    )
}