function JobCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <div className="h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-800" />

      <div className="mt-3 h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-800" />

      <div className="mt-6 space-y-3">
        <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-800" />
        <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-800" />
        <div className="h-4 w-1/3 rounded bg-gray-200 dark:bg-gray-800" />
      </div>

      <div className="mt-6 flex gap-2">
        <div className="h-6 w-16 rounded-full bg-gray-200 dark:bg-gray-800" />
        <div className="h-6 w-20 rounded-full bg-gray-200 dark:bg-gray-800" />
        <div className="h-6 w-24 rounded-full bg-gray-200 dark:bg-gray-800" />
      </div>

      <div className="mt-6 h-10 w-full rounded-lg bg-gray-200 dark:bg-gray-800" />
    </div>
  )
}

export default JobCardSkeleton