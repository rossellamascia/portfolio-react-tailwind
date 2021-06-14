import React, { useEffect, useState } from "react";
import useHttp from "../hooks/useHttp";

export interface AddWorkProps {

}

const AddWork: React.FC<AddWorkProps> = () => {
    const [role, setRole] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [type, setType] = useState<string>('0');
    const [from, setFrom] = useState<string>('');
    const [to, setTo] = useState<string>('');
    const [city, setCity] = useState<string>('');

    const { isLoading,
        error,
        sendRequest, } = useHttp()



    const roleHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setRole(event.currentTarget.value);
    }
    const companyHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setCompany(e.currentTarget.value)
    }
    const typeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
        setType(e.currentTarget.value)
    }
    const fromHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setFrom(e.currentTarget.value)
    }
    const toHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setTo(e.currentTarget.value)
    }
    const cityHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value)
    }

    const addWorkHandler = (data: {
        role: string,
        company: string,
        type: string,
        from: string,
        to: string,
        city: string
    }) => {
        sendRequest({
            url: "https://portfolio-51f61-default-rtdb.firebaseio.com/work.json",
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })


    }

    const submitFormHandler = (e: React.FormEvent) => {
        e.preventDefault()


        if (role !== '' && company !== '' && type !== '0' && from !== '' && to !== '' && city !== '') {
            addWorkHandler({
                role,
                company,
                type,
                from,
                to,
                city
            })
        } else {
            console.error('errore')
        }
    }
    return (
        <>
            <div className="flex justify-center mb-7 mt-10">
                <h1 className="text-5xl">Add your work</h1>
            </div>
            <div className="flex justify-center">
                <form onSubmit={submitFormHandler}>
                    <div>
                        <label className="block mb-1">Role</label>
                        <input onChange={roleHandler} type="text" id="&quot;form-subscribe-Subscribe" className="input" placeholder="Role" value={role} />
                    </div>
                    <div className="my-3">
                        <input type="text" id="&quot;form-subscribe-Subscribe" onChange={companyHandler} className="input" placeholder="Company" value={company} />
                    </div>
                    <div className="relative inline-block w-full mb-3">
                        <select className="input" value={type} placeholder="Regular input" onChange={typeHandler}>
                            <option disabled>Type</option>
                            <option value={1}>Full time</option>
                            <option value={2}>Another option</option>
                            <option value={3}>And one more</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                    </div>
                    <label htmlFor="from" className="block mb-1">From</label>
                    <div className="flex">
                        <input type="text" id="from" onChange={fromHandler} className="input" placeholder="m/Y" value={from} />
                        <input type="text" id="&quot;form-subscribe-Subscribe" onChange={toHandler} className="input ml-3" placeholder="m/Y" value={to} />
                    </div>
                    <div className="my-3">
                        <input type="text" id="&quot;form-subscribe-Subscribe" onChange={cityHandler} className="input" placeholder="City" value={city} />
                    </div>
                    <button className="btn" type="submit">
                        Add
                    </button>
                </form>

            </div>
        </>

    );
}

export default AddWork;