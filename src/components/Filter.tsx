interface FilterProps {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}

function Filter({
  label,
  value,
  options,
  onChange,
}: FilterProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#475569] dark:text-gray-300">
        {label}
      </label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-[#D8E0EA] bg-[#EEF2F7] px-4 py-3 text-[#0F172A] outline-none transition duration-200 ease-out focus:border-[#475569] focus:ring-2 focus:ring-[#E8EEF5] dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-gray-500 dark:focus:ring-gray-800"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filter
