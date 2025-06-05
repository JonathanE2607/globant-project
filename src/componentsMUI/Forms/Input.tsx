import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
    const navigate = useNavigate();
    return (
      <div className="w-full bg-black text-white py-6 px-8">
        <div className="px-8 mx-auto">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search your favourite course"
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-700 rounded-md text-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="px-8 py-3 bg-[#5CD3F8] text-white font-medium rounded-md hover:bg-[#4bc0e4] transition-colors">
              Search
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <div className="relative">
              <button
                onClick={() => {
                  navigate("/course/addClass");
                }}
                className="flex items-center gap-2 px-4 py-2 bg-black border-2 border-gray-700 rounded-md hover:bg-gray-900 transition-colors"
              >
                <span>Add new class</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SearchComponent;