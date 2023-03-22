"use client";

import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  return ( 
    <form className="bg-white my-4 p-4 rounded-md">
      <div className="flex flex-col my-4">
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          value={title}
          placeholder="What's on your mind?"
          className="rounded-lg my-2 p-4 bg-gray-200 border-none outline-none"
        ></textarea>
      </div>
      <div className="flex justify-between items-center gap-2">
        <p className={`font-bold text-sm ${title.length > 300 ? "text-red-700" : "text-gray-600"}`}>{`${title.length}/300`}</p>
        <button
          type="submit"
          disabled={isDisabled}
          className="bg-second hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-25"
        >
          Post
        </button>
      </div>
    </form>
  );
}
