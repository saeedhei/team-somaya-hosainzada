import Image from "next/image";

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
    <div className="font-sans min-h-screen bg-blue-500">
      <div className="grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
        {/* Skeleton */}
        <div className="p-4 w-full">
          {users.map((user) => (
            <div
              key={user.id}
              className="border-b py-2 flex flex-col space-y-2"
            >
              <h2 className="font-bold text-lg leading-snug">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {/* Left Section */}
          <div className="bg-white p-4 rounded shadow-md">
            <div className="mb-4 rounded overflow-hidden w-full h-48 relative">
              <Image
                src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/z/u/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=1300&hei=715&scl=2.313846153846154"
                alt="Left Section"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h2 className="text-xl font-semibold text-yellow-500">
              Left Title
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
              qui earum, consectetur ipsa adipisci beatae ullam, quis amet
              aspernatur cum laboriosam enim. Quo libero id itaque minima
              repudiandae impedit atque.
            </p>
          </div>

          {/* Middle Section */}
          <div className="bg-white p-4 rounded shadow-md">
            <div className="mb-4 rounded overflow-hidden w-full h-48 relative">
              <Image
                src="https://images.newscientist.com/wp-content/uploads/2023/02/07104439/SEI_142739270.jpg"
                alt="Middle Section"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h2 className="text-xl font-semibold text-yellow-500">
              Middle Title
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus alias beatae, atque minus adipisci deserunt
              voluptatibus vitae quos enim, quasi earum, autem est labore
              debitis cum iure facilis praesentium sit?
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-white p-4 rounded shadow-md">
            <div className="mb-4 rounded overflow-hidden w-full h-48 relative">
              <Image
                src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265648.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
                alt="Right Section"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h2 className="text-xl font-semibold text-yellow-500">
              Right Title
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae quaerat beatae voluptatum explicabo? Est porro at ex
              eum excepturi optio impedit consectetur maxime dolorum,
              consequuntur, neque ut amet, odio perspiciatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
