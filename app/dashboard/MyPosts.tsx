"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthPost } from "../types/AuthPosts";
import EditPost from "./EditPosts";

const fetchAuthPosts = async () => {
  const response = await axios.get("/api/posts/authPost");
  return response.data;
};

export default function MyPosts() {
  const { data, isLoading } = useQuery<AuthPost>({
    queryFn: fetchAuthPosts,
    queryKey: ["auth-posts"],
  });
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      {data?.Post?.map((post: any) => (
        <EditPost
          id={post.id}
          key={post.id}
          avatar={data.image}
          name={data.name}
          title={post.title}
          comments={post.Comment}
        />
      ))}
    </div>
  );
}
