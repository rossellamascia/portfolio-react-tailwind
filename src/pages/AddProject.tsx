import { useCallback, useState } from "react";
import { fileUrlHandler, urlAPI } from "../utility";

import Alert from "../components/UI/Alert";
import useHttp from "../hooks/useHttp";
import { useHistory } from "react-router-dom";
import { ProjectError } from "../Models/ProjectError";
import { Project } from "../Models/Project";

export interface AddProjectProps {

}
const AddProject: React.FC<AddProjectProps> = () => {

    const [webSite, setCompanyWebSite] = useState<string>('');
    const [file, setFile] = useState<File>();

    const [successMessage, setSuccessMessage] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<ProjectError>({
        webSite: false,
        file: false
    });

    const history = useHistory();
    const { isLoading,
        error,
        sendRequest,
        setIsLoading
    } = useHttp()


    
    const companyWebSiteHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setCompanyWebSite(e.currentTarget.value)
    }
    const onChangeFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0]
            setFile(file);
        }
    }
  

 

    const addWorkHandler = useCallback((data: Omit<Project, 'id'>) => {
        sendRequest({
            url: `${urlAPI}/projects.json`,
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        setSuccessMessage(true);
        history.replace("/");
    }, [history, sendRequest])



    const submitFormHandler = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setSuccessMessage(false);

        if ( file && webSite) {
            const fileUrl = await fileUrlHandler(file);
            addWorkHandler({
                fileUrl,
                webSite
            })
        } else {
            setIsLoading(false);
            setErrorMessage({
                webSite: webSite === '',
                file: !file,
            })

            console.error('errore');
        }
    }, [addWorkHandler, file, setIsLoading, webSite]);


    return (
        <section className="min-h-screen">
            <div className="flex justify-center mb-7 mt-10">
                <h1 className="text-5xl font-bold">Add your project</h1>
            </div>
            <div className="flex justify-center">
                <form onSubmit={submitFormHandler}>
                    
                    <div className="my-3">
                        <label
                            htmlFor="role"
                            className="font-bold mb-1 text-gray-700 block"
                        >Web site/link project</label>
                        <input type="url" id="&quot;form-subscribe-Subscribe" onChange={companyWebSiteHandler} className={errorMessage.webSite ? 'outline-error' : 'input'} placeholder="Https://" value={webSite} />
                        {errorMessage.webSite && <p className="error-message">Required field</p>}

                    </div>
                    <div className="my-3">
                        <label
                            htmlFor="file"
                            className="font-bold mb-1 text-gray-700 block"
                        >Project cover</label>
                        <input type="file" accept="image/*" id="file" onChange={onChangeFileHandler} className={errorMessage.file ? 'outline-error' : 'input'} />
                        {errorMessage.file && <p className="error-message">Required field</p>}
                    </div>
                   

                    {!isLoading && <button className="btn" type="submit">
                        Add
                    </button>}
                    {isLoading && <p className="text-center">Loading...</p>}
                    {successMessage && <Alert
                        className="bg-green-100 border-t-4 border-green-500 rounded-b text-green-900 px-4 py-3 shadow-md mt-6"
                        textMain="Success"
                        icon={
                            {
                                className: "h-6 w-6 mr-4",
                                path: "M5 13l4 4L19 7",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor"
                            }
                        }

                    />}
                    {/* {errorMessage && <Alert
                        className="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md mt-6"
                        textMain="Error"
                        icon={
                            {
                                className: "h-6 w-6 mr-4",
                                path: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor"
                            }
                        }

                    />} */}

                </form>
            </div>
        </section>
    )
};
export default AddProject;