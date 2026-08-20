import { Search } from "lucide-react"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onSubmit?: () => void
  placeholder?: string
}

function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = "Search jobs...",
}: SearchBarProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit?.()
  }

  return (
    <form className="relative w-full self-start" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#D8E0EA] bg-[#EEF2F7] px-4 py-3 pr-12 text-[#0F172A] outline-none transition duration-200 ease-out placeholder:text-[#475569] focus:border-[#475569] focus:ring-2 focus:ring-[#E8EEF5] dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-800"
      />

      <button
        type="submit"
        aria-label="Search jobs"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#475569] transition duration-200 ease-out hover:scale-110 hover:text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#475569] active:scale-95 dark:hover:text-white"
      >
        <Search size={20} />
      </button>
    </form>
  )
}

export default SearchBar
