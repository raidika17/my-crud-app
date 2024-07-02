import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center mb-10">
      <div className="w-full max-w-md">
        <form className="flex items-center">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Search"
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get("query")?.toString()}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchInput;
