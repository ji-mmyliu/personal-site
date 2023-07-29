import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '../../util/query';
import * as config from '../../../config';

export const Notes = (): JSX.Element => {
    const query: URLSearchParams = useQuery();
    const { id } = useParams();
    const lessonId: string | null = query.get("lessonId");

    const [num, setNum] = React.useState((!!lessonId) ? parseInt(lessonId!) : 1);
    const [error, setError] = React.useState(false);

    React.useEffect((): void => {
        document.title = `Lesson ${num} Notes | Jimmy's Personal Website`;
    }, [num]);

    React.useEffect((): void => {
        (document.getElementById("lesson-num")! as any).value = (!!lessonId) ? lessonId! : 1;
    }, []);

    const lessonNumberChange = (e): void => {
        setNum(e.target.value);
        checkExists(e.target.value);
        window.history.replaceState(null, "", `/notes/${id}?lessonId=${encodeURIComponent(e.target.value)}`);
    }

    const checkExists = (lessonNum: number): void => {
        const result = fetch(lessonUrl(lessonNum), { method: 'HEAD' }).then((result: Response) => {
            setError(!result.ok);
        });
    }

    const lessonUrl = (lessonNum: number): string => {
        return `${config.baseURL}/notes/${id}/lesson${lessonNum}.html`;
    }

    return (
        <article className="card mb-3 notes-form">
            <form>
                <div className="form-group">
                    <label htmlFor="lesson-num">Lesson Number</label>
                    <input type="number" min={1} className={`form-control ${!error && "is-valid"}`} id="lesson-num" onChange={lessonNumberChange} aria-describedby="emailHelp" placeholder="Enter lesson number" style={{ maxWidth: "125px" }} />
                    {error && <small id="lesson-num-help" className="form-text error-text">Sorry, lesson not here yet!</small>}
                    <small id="lesson-num-help" className="form-text text-muted">Notes should update automatically below!</small>
                </div>
            </form>

            {!error &&
                <iframe id="notes-content" src={lessonUrl(num)}></iframe>
            }
        </article>
    );
}