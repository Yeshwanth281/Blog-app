import { ChangeEvent, useState } from "react";
import { Appbar } from "../components/Appbar"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    return <div>
        <Appbar />
        <div className="flex justify-center pt-8">
            <div className="max-w-screen-lg w-full">
            
                <label className="block mb-2 text-xl font-medium text-gray-900">Title</label>
                <textarea onChange={(e)=>{
                    setTitle(e.target.value);
                }} className=" resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your title of the Blog here..."></textarea>
                <TextEditor onChange={(e) => {
                    setDescription(e.target.value)
                }}/>
                <button onClick={async () => {
                    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog`,{
                        title,
                        content: description
                    }, {
                        headers:{
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${response.data.id}`)
                }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200">
                    Publish post
                </button>
            </div>
        </div>
    </div>
}

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return (
        <div>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 mt-5">
                <label className="block mb-2 text-xl font-medium text-gray-900 pl-1">Content</label>
                <div className="px-4 py-2 bg-white rounded-b-lg">
                    <textarea 
                        className="h-50 resize-none block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0" 
                        placeholder="Write an article..." 
                        required
                        onChange={onChange} 
                    />
                </div>
            </div>
        </div>
    );
}
