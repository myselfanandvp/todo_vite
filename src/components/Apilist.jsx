export const Apilist = ({ data = null }) => {
  if (!data) return null;

  return (
    <div className="w-full max-w-md rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        User Details
      </h2>

      <ul className="space-y-3 text-gray-700">
        <li className="flex justify-between">
          <span className="font-medium text-gray-500">ID</span>
          <span>{data.id}</span>
        </li>

        <li className="flex justify-between">
          <span className="font-medium text-gray-500">Name</span>
          <span>{data.name}</span>
        </li>

        <li className="flex justify-between">
          <span className="font-medium text-gray-500">Email</span>
          <span className="text-indigo-600">{data.email}</span>
        </li>

        <li className="flex justify-between">
          <span className="font-medium text-gray-500">Phone</span>
          <span>{data.phone}</span>
        </li>
      </ul>
    </div>
  );
};
