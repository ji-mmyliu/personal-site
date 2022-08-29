import * as React from 'react';

export const Resume = () => {
    React.useEffect(() => {
        document.title = "Resume | Jimmy's Personal Website";
        window.addEventListener('resize', updateWidth);
        updateWidth();
    }, []);

    const updateWidth = () => {
        document.getElementById("resume").setAttribute("width", getContentWidth(document.getElementById("resume-card")));
    }

    const getContentWidth = (element) => {
        const styles = getComputedStyle(element)
      
        return element.clientWidth
          - parseFloat(styles.paddingLeft)
          - parseFloat(styles.paddingRight);
    }

    return (
        <div className="container pl-5 pr-5">
            <article className="card mb-3">
                <div className="card-body" id="resume-card">
                    <embed src="static/resume.pdf" id="resume" height={1200} />
                </div>
            </article>
        </div>
    );
}