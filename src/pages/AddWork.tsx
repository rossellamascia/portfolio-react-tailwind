import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { app } from "../base";
import Alert from "../components/UI/Alert";
import Datepicker from "../components/UI/Datepicker";
import useHttp from "../hooks/useHttp";
import { Works } from "../Models/Works";
import { urlAPI } from "../utility";

export interface AddWorkProps {

}

const AddWork: React.FC<AddWorkProps> = () => {
    const [role, setRole] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [type, setType] = useState<string>('type');
    const [from, setFrom] = useState<string>('');
    const [to, setTo] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [file, setFile] = useState<File>();
    const [successMessage, setSuccessMessage] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<boolean>(false);

    const history = useHistory()


    const { isLoading,
        error,
        sendRequest,
        setIsLoading
    } = useHttp()



    const roleHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setRole(event.currentTarget.value);
        setErrorMessage(false)
    }
    const companyHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setCompany(e.currentTarget.value)
    }
    const onChangeFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0]
            setFile(file);
        }
    }
    const typeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
        setType(e.currentTarget.value)
    }

    const cityHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value)
    }

    const addWorkHandler = (data: Partial<Works>) => {
        sendRequest({
            url: `${urlAPI}/works.json`,
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        setSuccessMessage(true);
        history.replace("/");
    }

    const fileUrlHandler = async (file: File) => {
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        return await fileRef.getDownloadURL()
    }

    const submitFormHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage(false);
        setSuccessMessage(false);

        if (role !== '' && company !== '' && type !== '0' && from !== '' && to !== '' && city !== '' && file) {

            const fileUrl = await fileUrlHandler(file);
            
            
            addWorkHandler({
                role,
                company,
                type,
                from,
                to,
                city,
                fileUrl
            })
        } else {
            setErrorMessage(true);
            console.error('errore');
        }
    }
    return (
        <section className="min-h-screen">
            <div className="flex justify-center mb-7 mt-10">
                <h1 className="text-5xl font-bold">Add your work</h1>
            </div>
            <div className="flex justify-center">
                <form onSubmit={submitFormHandler}>
                    <div>
                        <label
                            htmlFor="role"
                            className="font-bold mb-1 text-gray-700 block"
                        >Role</label>
                        <input onChange={roleHandler} type="text" id="&quot;form-subscribe-Subscribe" className="input" placeholder="Role" value={role} />
                    </div>
                    <div className="my-3">
                        <label
                            htmlFor="role"
                            className="font-bold mb-1 text-gray-700 block"
                        >Company</label>
                        <input type="text" id="&quot;form-subscribe-Subscribe" onChange={companyHandler} className="input" placeholder="Company" value={company} />
                    </div>
                    <div className="my-3">
                        <label
                            htmlFor="file"
                            className="font-bold mb-1 text-gray-700 block"
                        >Company</label>
                        <input type="file" accept="image/*" id="file" onChange={onChangeFileHandler} className="input" />
                    </div>
                    <label
                        htmlFor="role"
                        className="font-bold mb-1 text-gray-700 block"
                    >Kind of employment</label>
                    <div className="relative inline-block w-full mb-3">
                        <select className="input" value={type} placeholder="Regular input" onChange={typeHandler}>
                            <option disabled value="type">Type</option>
                            <option value="full time">Full time</option>
                            <option value="part time">Part-time</option>
                            <option value="self-employment">Self-employment</option>
                            <option value="freelance">Freelance</option>
                            <option value="contract">Contract</option>
                            <option value="stage">Stage</option>
                            <option value="apprenticeship">Apprenticeship</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <Datepicker
                            setDate={setFrom}
                            label="From"
                        />
                        <Datepicker
                            setDate={setTo}
                            label="To"
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="role"
                            className="font-bold mb-1 text-gray-700 block"
                        >City</label>
                        <input type="text" id="&quot;form-subscribe-Subscribe" onChange={cityHandler} className="input" placeholder="City" value={city} />
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
                    {errorMessage && <Alert
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

                    />}

                </form>
            </div>
        </section>

    );
}

export default AddWork;