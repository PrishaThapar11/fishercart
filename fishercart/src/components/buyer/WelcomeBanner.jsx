export default function WelcomeBanner() {
  return (
    <div className="bg-green-100 rounded-xl px-6 py-4 flex items-center justify-between">
      <div>
        <h2 className="text-lg font-bold text-gray-800">
          Welcome, Buyer!
        </h2>
        <p className="text-sm text-gray-700 mt-1 max-w-md">
          Browse today's fresh fish directly from local Kevat fishermen.
        </p>
      </div>

      <div className="hidden md:flex items-center text-5xl">
        🧺🐟
      </div>
    </div>
  );
}
