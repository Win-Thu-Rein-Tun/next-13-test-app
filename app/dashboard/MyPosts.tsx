"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { AuthPost } from "../types/AuthPosts"

const fetchAuthPosts = async () => {
    const response = await axios.get("/api/posts/authPost")
    return response.data
}

export default function MyPosts() {
    const {data, isLoading} = useQuery<AuthPost>({
        queryFn: fetchAuthPosts,
        queryKey: ["auth-posts"]
    })
    return (
        <div>
            <h1>Data</h1>
        </div>
    )
}