"use client";

import { useEffect, useState } from "react";
import Counter from "./counter";

const url = "https://jsonplaceholder.typicode.com/posts"

function page() {

    const [postData, setPostData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setPostData(data);
            return data
        }
        fetchData()
    }, [])

    return (
        <div className="flex w-full items-center justify-center flex-col gap-20 py-10">
            <Counter />
            <div className="w-full max-w-4xl">
                <ul className="grid grid-cols-3 gap-5">
                    {postData.map(({ id, title, body }) => {
                        return <li key={id}
                            className="border-b border-gray-200 p-4 h bg-gray-300 transition">
                            <h2 className="text-lg font-semibold text-black">{title}</h2>
                            <p className="text-gray-700">{body}</p>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default page