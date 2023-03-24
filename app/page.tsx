"use client";

import CreatePost from "./components/CreatePost";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const allPosts = async () => {
  const response = await axios.get("/api/posts/getPosts");
  return response.data;
};
export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryFn: allPosts,
    queryKey: ["posts"],
  });
  return (
    <main>
      <div>Hello Next</div>
      <CreatePost />
    </main>
  );
}
