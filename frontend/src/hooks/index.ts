import { useEffect, useState } from "react";
import axios from "axios";

export interface Blog {
    "content": string,
    "title": string,
    "id": string,
        "author": {
            "name": string 
        }
}

export const useBlog = ({id}:{id: string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>()

    useEffect(() => {
        try{
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/${id}`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
                .then(response => {
                    setBlog(response.data.blog);
                    setLoading(false);
                })
        } catch (e) {
            console.log(`Error: ${JSON.stringify(e)}`);
        }
    }, [])

    return {
        loading,
        blog
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(() => {
        try{
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/bulk`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
                .then(response => {
                    setBlogs(response.data.blogs);
                    setLoading(false);
                })
        } catch (e) {
            console.log(`Error: ${JSON.stringify(e)}`);
        }
    }, [])

    return {
        loading,
        blogs
    }
}