export default function Sidebar() {
    return (
      <div className="w-1/4 bg-white p-4 border-r overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
              <p className="font-semibold">User {i + 1}</p>
              <p className="text-sm text-gray-500">Dernier message...</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  