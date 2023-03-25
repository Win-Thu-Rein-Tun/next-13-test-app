"use client"
import Link from "next/link"
import Image from "next/image"

const Posts = ({name, avatar, postTitle}) => (
    <div className="my-8 p-8 bg-white rounded-lg">
        <div className="flex items-center gap-2">
            <Image width={32} height={32} src={avatar} alt="avatar" className="rounded-full"/>
            <h3 className="fonts-bold text-gray-700">{name}</h3>
        </div>
        <div className="my-8">
            <p className="break-all">{postTitle}</p>
        </div>
    </div>
)

export default Posts