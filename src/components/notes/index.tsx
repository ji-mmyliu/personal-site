import * as React from 'react';

export const Notes = (): JSX.Element => {
    const [num, setNum] = React.useState(1);
    const [error, setError] = React.useState(false);

    React.useEffect((): void => {
        document.title = "Notes | Jimmy's Personal Website";
    }, []);

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

    return (
        <div className="container pl-5 pr-5">
            <article className="card mb-3 notes-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="lesson-num">Lesson Number</label>
                        <input type="number" className="form-control" id="lesson-num" onChange={lessonNumberChange} aria-describedby="emailHelp" placeholder="Enter lesson number" />
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