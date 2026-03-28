import { useState } from "react";
import BuyerNavbar from "../../components/buyer/BuyerNavbar";
import WelcomeBanner from "../../components/buyer/WelcomeBanner";
import FilterPanel from "../../components/buyer/FilterPanel";
import FishCard from "../../components/buyer/FishCard";
import { fishList } from "../../data/dummyFish";

export default function BuyerHome() {
  const [selectedFish, setSelectedFish] = useState([]);
  const [maxPrice, setMaxPrice] = useState(500);
  const [village, setVillage] = useState("");

  const filteredFishList = fishList.filter((fish) => {
    const fishMatch =
      selectedFish.length === 0 || selectedFish.includes(fish.name);

    const priceMatch = fish.price <= maxPrice;

    const villageMatch =
      village === "" || fish.village === village;

    return fishMatch && priceMatch && villageMatch;
  });

  return (
    <div className="min-h-screen bg-slate-100">
      <BuyerNavbar />

      <div className="p-5 space-y-5">
        <WelcomeBanner />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Filters */}
          <div className="md:col-span-1">
            <FilterPanel
              selectedFish={selectedFish}
              setSelectedFish={setSelectedFish}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              village={village}
              setVillage={setVillage}
            />
          </div>

          {/* Fish Grid */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredFishList.length > 0 ? (
              filteredFishList.map((fish) => (
                <FishCard key={fish.id} fish={fish} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                No fish match your filters 🐟
              </p>
            )}
          </div>
        </div>
      </div>

      <footer className="text-center text-xs text-gray-400 py-4">
        © 2025-26 MatsyaConnect. All rights reserved.
      </footer>
    </div>
  );
}

