"use client"

import CreatePost from "./components/CreatePost";
import axios from "axios";

const allPosts = async() => {
  const response = await axios.get("/api/posts/getPosts")
  return response.data
}
export default function Home() {
  return (
    <main>
      <div>Hello Next</div>
      <CreatePost/>
    </main>
  );
}
