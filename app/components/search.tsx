const SearchInput = () => {
  return (
    <div className="flex justify-center mb-10">
      <div className="w-full max-w-md">
        <form className="flex items-center">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchInput;
