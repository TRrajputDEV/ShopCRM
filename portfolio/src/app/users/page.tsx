interface User {
    id: number;
    name: string;
}
export default async function usersPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json;

    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map(users => user.)}
            </ul>
        </>
    )


}