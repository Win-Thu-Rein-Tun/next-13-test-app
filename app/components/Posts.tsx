"use client"
import Link from "next/link"
import Image from "next/image"

const Posts = () => (
    <div>
        <div>
            <Image width={32} height={32} src={avatar} alt="avatar"/>
            <h3>{name}</h3>
        </div>
        <div>
            <p>{postTitle}</p>
        </div>
    </div>
)