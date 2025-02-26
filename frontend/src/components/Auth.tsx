import { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@someone2810/medium-common";
import { useState } from "react";
import axios from "axios";



export const Auth = ({type}:{type: "signup"|"signin"}) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });

    async function sendRequest() {
        try{
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/${type === "signup"? "signup": "signin"}`,postInputs);
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt);
            navigate("/blogs")
        } catch(e) {
            alert("Could not complete your request")
        }
    }

    return <div className=" h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            
            <div>
                <div className="px-10 pl-1">
                    <div className="text-3xl font-extrabold">
                        {type === "signup" ? "Create an account" : "Log into your account"}
                    </div>
                    <div className="text-slate-400">
                        {type=== "signin" ? "Don't have an account?" : "Already have an account?"} 
                        <Link className="pl-2 underline" to={type=== "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "Sign up": "Sign in"}
                        </Link>
                    </div>
                </div>
                <div className="pt-8">
                    {type==="signin"? null :
                    <div className="pb-2">
                        <LabelInput label="Name" placeholder="Narendar Das.." onChange={(e)=>{
                            setPostInputs(c =>({
                                ...c,
                                name: e.target.value
                            }))
                        }} />
                    </div>
                    }
                    <div className="pb-2">
                        <LabelInput label="Email" placeholder="naredas@gmail.com" onChange={(e)=>{
                            setPostInputs(c =>({
                                ...c,
                                email: e.target.value
                            }))
                        }} />
                    </div>
                    <div>
                        <LabelInput label="Password" placeholder="********************" type={"password"} onChange={(e)=>{
                            setPostInputs(c =>({
                                ...c,
                                password: e.target.value
                            }))
                        }} />
                    </div>
                    <div>
                        <button onClick={sendRequest} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type==="signup"?"Sign up":"Sign in"}</button>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
}

interface LabelledInputType {
    label: string,
    placeholder: string,
    onChange: (e:ChangeEvent<HTMLInputElement>) =>void
    type?:string
}

function LabelInput({label, placeholder, onChange, type}: LabelledInputType ){
    return <div>
        <div>
            <label className="block mb-2 text-sm font-semibold text-black">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    </div>
}