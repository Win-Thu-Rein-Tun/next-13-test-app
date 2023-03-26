"use client";

import CreatePost from "./components/CreatePost";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Posts from "./components/Posts";
import { PostType } from "./types/Posts";

const allPosts = async () => {
  const response = await axios.get("/api/posts/getPost");
  return response.data;
};
export default function Home() {
  const { data, error, isLoading } = useQuery<PostType[]>({
    queryFn: allPosts,
    queryKey: ["posts"],
  });
  if (error) return error;
  if (isLoading) return "Loading...";
  return (
    <main>
      <CreatePost />
      {data?.map((post) => (
        <Posts comments={post.Comment}
        key={post.id} name={post.user.name} avatar={post.user.image} postTitle={post.title} id={post.id}/>
      ))}
    </main>
  );
}
