import * as React from 'react';

export const Notes = (): JSX.Element => {
    const [num, setNum] = React.useState(1);
    const [isInt, setIsInt] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect((): void => {
        document.title = "Notes | Jimmy's Personal Website";
    }, []);

    React.useEffect((): void => {
        setIsInt(Number.isInteger(parseInt(num.toString())));
    }, [num]);

    const lessonNumberChange = (e): void => {
        setNum(e.target.value);
        checkExists(e.target.value);
        console.log("Changed!");
    }

    const checkExists = (lessonNum: number): void => {
        const result = fetch(lessonUrl(lessonNum), { method: 'HEAD' }).then((result: Response) => {
            setError(!result.ok);
        });
    }

    const lessonUrl = (lessonNum: number): string => {
        return `/notes/finance/lesson${lessonNum}.html`;
    }

    const incrementLesson = (increment: number): void => {
        if (Number.isInteger(num)) {
            setNum(num + increment);
        }
    }

    return (
        <div className="container pl-5 pr-5">
            <article className="card mb-3 notes-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="lesson-num">Lesson Number</label>
                        <div className="lesson-input">
                            <input type="text" className={`form-control ${!error && "is-valid"}`} id="lesson-num" onChange={lessonNumberChange} aria-describedby="emailHelp" placeholder="Enter lesson number" />
                            {isInt &&
                                <>
                                    <button className="btn btn-primary" onClick={(ev) => {
                                        ev.preventDefault();
                                        incrementLesson(1);
                                    }}>Next</button>
                                    <button className="btn btn-secondary" onClick={(ev) => {
                                        ev.preventDefault();
                                        incrementLesson(-1);
                                    }}>Previous</button>
                                </>
                            }
                        </div>
                        {error && <small id="lesson-num-help" className="form-text error-text">Sorry, lesson not here yet!</small>}
                        <small id="lesson-num-help" className="form-text text-muted">Notes should update automatically below!</small>
                    </div>
                </form>

                {!error &&
                    <div className="embed-responsive embed-responsive-21by9">
                        <iframe className="embed-responsive-item" src={lessonUrl(num)}></iframe>
                    </div>
                }
            </article>
        </div>
    );
}