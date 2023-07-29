import * as React from 'react';

export const Resume = (): JSX.Element => {
    React.useEffect((): void => {
        document.title = "Resume | Jimmy's Personal Website";
        window.addEventListener('resize', updateWidth);
        updateWidth();
    }, []);

    const updateWidth = (): void => {
        document.getElementById("resume")!.setAttribute("width", String(getContentWidth(document.getElementById("resume-card")!)));
    }

    const getContentWidth = (element: Element): number => {
        const styles = getComputedStyle(element);

        return element.clientWidth
            - parseFloat(styles.paddingLeft)
            - parseFloat(styles.paddingRight);
    }

    return (
        <article className="card mb-3">
            <div className="card-body" id="resume-card">
                <embed src="/resume.pdf" id="resume" height={1200} />
            </div>
        </article>
    );
}