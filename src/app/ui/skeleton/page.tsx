interface User {
  id: number;
  name: string;
  email: string;
}

export default async function UsersPage() {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  await sleep(2000);

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <div className="p-4">
      {users.map((user) => (
        <div key={user.id} className="border-b py-2 flex flex-col space-y-2">
          <h2 className="font-bold text-lg leading-snug">{user.name}</h2>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      ))}
    </div>
  );
}
