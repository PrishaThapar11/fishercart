export default function FilterPanel({
  selectedFish,
  setSelectedFish,
  maxPrice,
  setMaxPrice,
  village,
  setVillage,
}) {
  const fishTypes = ["Rohu", "Tilapia", "Catla", "Mrigal"];

  const toggleFish = (fish) => {
    if (selectedFish.includes(fish)) {
      setSelectedFish(selectedFish.filter((f) => f !== fish));
    } else {
      setSelectedFish([...selectedFish, fish]);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold text-gray-800 mb-3">Filters</h3>

      {/* Fish Type */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-2">Fish Type</p>
        {fishTypes.map((fish) => (
          <label key={fish} className="block text-sm text-gray-600">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedFish.includes(fish)}
              onChange={() => toggleFish(fish)}
            />
            {fish}
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-2">
          Max Price: ₹{maxPrice}
        </p>
        <input
          type="range"
          min="100"
          max="500"
          step="10"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Location */}
      <div>
        <p className="text-sm font-medium mb-2">Nearby Villages</p>
        <select
          value={village}
          onChange={(e) => setVillage(e.target.value)}
          className="w-full border rounded px-2 py-1 text-sm"
        >
          <option value="">All</option>
          <option value="Sehore">Sehore</option>
          <option value="Ashta">Ashta</option>
          <option value="Kothri">Kothri</option>
        </select>
      </div>
    </div>
  );
}
