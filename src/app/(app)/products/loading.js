export default function Loading() {
  return (
    <div className="mt-10 grid grid-cols-4 gap-8 p-10">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="animate-pulse bg-gray-300 h-60 rounded-xl"></div>
      ))}
    </div>
  );
}