import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import JobCard from "../components/JobCard"
import JobCardSkeleton from "../components/JobCardSkeleton"
import SearchBar from "../components/SearchBar"
import Filter from "../components/Filter"

import { jobs } from "../data/job"

interface JobsProps {
  savedJobIds: number[]
  onSave: (jobId: number) => void
}

function Jobs({
  savedJobIds,
  onSave,
}: JobsProps) {
  const [searchParams, setSearchParams] = useSearchParams()

  const [jobType, setJobType] = useState("All")
  const [location, setLocation] = useState("All")

  // Show skeleton cards briefly when the page loads
  const [isLoading, setIsLoading] = useState(true)

  // Search term comes from the URL
  const searchTerm = searchParams.get("search") ?? ""

  // Debounced search state
  const [debouncedSearch, setDebouncedSearch] =
    useState(searchTerm)

  // --------------------------------
  // Skeleton loading
  // --------------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 700)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  // --------------------------------
  // Debounced search
  // --------------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [searchTerm])

  // --------------------------------
  // Search input change
  // --------------------------------
  const handleSearchChange = (value: string) => {
    setSearchParams((currentParams) => {
      const nextParams = new URLSearchParams(currentParams)

      if (value.trim()) {
        nextParams.set("search", value)
      } else {
        nextParams.delete("search")
      }

      return nextParams
    })
  }

  // --------------------------------
  // Search + filters
  // --------------------------------
  const filteredJobs = jobs.filter((job) => {
    const search = debouncedSearch
      .toLowerCase()
      .trim()

    const matchesSearch =
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(search)
      )

    const matchesJobType =
      jobType === "All" ||
      job.jobType === jobType

    const matchesLocation =
      location === "All" ||
      job.location === location

    return (
      matchesSearch &&
      matchesJobType &&
      matchesLocation
    )
  })

  return (
    <section className="mx-auto max-w-7xl">
      {/* Page heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#0F172A] dark:text-white">
          Find Your Next Job
        </h1>

        <p className="mt-2 text-[#475569] dark:text-gray-400">
          Browse available opportunities.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="mb-10 grid gap-4 md:grid-cols-3">
        <SearchBar
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search jobs, companies, or skills..."
        />

        <Filter
          label="Job Type"
          value={jobType}
          options={[
            "All",
            "Full-time",
            "Part-time",
            "Internship",
          ]}
          onChange={setJobType}
        />

        <Filter
          label="Location"
          value={location}
          options={[
            "All",
            "Karachi",
            "Lahore",
            "Islamabad",
            "Remote",
          ]}
          onChange={setLocation}
        />
      </div>

      {/* --------------------------------
          Loading state
      -------------------------------- */}
      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <JobCardSkeleton key={index} />
          ))}
        </div>
      ) : filteredJobs.length > 0 ? (
        <>
          {/* Results count */}
          <p className="mb-6 text-sm text-[#475569] dark:text-gray-500">
            Showing {filteredJobs.length}{" "}
            {filteredJobs.length === 1
              ? "job"
              : "jobs"}
          </p>

          {/* Job cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isSaved={savedJobIds.includes(job.id)}
                onSave={onSave}
              />
            ))}
          </div>
        </>
      ) : (
        /* Empty state */
        <div className="rounded-2xl border border-[#D8E0EA] bg-[#FFFFFF] p-10 text-center dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-white">
            No jobs found
          </h2>

          <p className="mt-2 text-[#475569] dark:text-gray-400">
            Try changing your search or filters.
          </p>
        </div>
      )}
    </section>
  )
}

export default Jobs