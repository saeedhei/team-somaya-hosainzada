export default function Loading() {
  return (
    <div className="p-4 space-y-4">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="border-b py-2 flex flex-col space-y-2 animate-pulse"
        >
          {/* شبیه نام کاربر */}
          <div className="h-5 w-1/3 bg-gray-200 rounded" />
          {/* شبیه ایمیل */}
          <div className="h-4 w-1/2 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
}
