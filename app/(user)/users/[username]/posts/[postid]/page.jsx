"use client";

import { use } from "react";

export default function UserPost(props) {
    const user = use(props.params);

    console.log(user);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">
                Post {user.postid} by {user.username}
            </h1>
            <p>This is post number {user.postid} written by {user.username}.</p>
        </div>
    );
}
