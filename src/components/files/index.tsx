import * as React from "react";
import { default as axios } from "axios";

export const Files = (): JSX.Element => {
    React.useEffect((): void => {
        document.title = "Files | Jimmy's Personal Website";
    }, []);

    const [selectedFile, setSelectedFile] = React.useState({} as any);
    const [isFilePicked, setIsFilePicked] = React.useState(false);

    const fileChanged = (ev): void => {
        setSelectedFile(ev.target.files[0]);
        setIsFilePicked(true);
    }

    const submit = (): void => {
        const formData = new FormData();
        formData.append("file", selectedFile);
        axios.post("https://cdn.jimmyliu.dev/files/upload", formData, {}).then((res) => {
            console.log("Success!", res);
        }).catch((err) => {
            console.log("Error!", err);
        });
    }

    return (
        <div className="container pl-5 pr-5">
            <article className="card mb-3">
                <div className="card-body" id="resume-card">
                    <input type="file" name="file" onChange={fileChanged} />
                    <div>
                        <button onClick={submit}>Submit</button>
                    </div>
                </div>
            </article>
        </div>
    );
}