import { SearchBarProps } from "../../action/types";

const SearchBar = ({accounts, setDisplayAccounts}: SearchBarProps) => {
  const handleSearch = (name: string) => {
    const lowerCaseName = name.toLowerCase()
    setDisplayAccounts(() => 
      accounts.map((item) => ({
        id: item.id,
        name: item.name,
        balance: item.balance,
        owner: item.owner
      })).filter((item) => item.name.toLowerCase().includes(lowerCaseName))
    )
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search by name..."
          className="border border-slate-500/60 rounded-2xl px-2 py-4 my-2 text-xl w-full"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBar;
