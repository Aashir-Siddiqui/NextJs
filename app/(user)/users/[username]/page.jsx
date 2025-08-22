export default async function UserProfile(props) {
    const user = await props.params;

    console.log(user);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Profile of {user.username}</h1>
            <p>Welcome to {user.username} profile page.</p>
        </div>
    );
}
