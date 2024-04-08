// SearchComponent.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searchedmovie", { state: { query } });
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => {
          console.log(e.target.value);
          setQuery(e.target.value);
        }}
        className="p-2 rounded-md border border-gray-300 w-3/4"
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white px-4 py-2 rounded-md w-1/4"
      >
        Search
      </button>
    </form>
  );
};

export default SearchComponent;
