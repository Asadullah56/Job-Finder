import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { jobs } from "../data/job"
import JobCard from "../components/JobCard"
import SearchBar from "../components/SearchBar"

function Home({ savedJobIds, onSave }: { savedJobIds: number[]; onSave: (jobId: number) => void; }) {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    const search = searchTerm.trim()

    navigate(
      search ? `/jobs?search=${encodeURIComponent(search)}` : "/jobs"
    )
  }

  const featuredJobs = jobs
    .filter((job) => {
      const search = searchTerm.toLowerCase().trim()
      
      return (
        job.title.toLowerCase().includes(search) ||
        job.company.toLowerCase().includes(search) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(search)
        )
      )
    })
    .slice(0, 3)

  return (
            
    <div>
            <div className="mx-auto mt-8 max-w-2xl">
                    <SearchBar
                    value={searchTerm}
                    onChange={setSearchTerm}
                    onSubmit={handleSearch}
                    placeholder="Search jobs, companies, or skills..."
                    />
            </div>
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#475569] dark:text-gray-400">
            Find your next opportunity
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
            Find a job that matches your{" "}
            <span className="text-[#475569] dark:text-gray-400">
              skills and goals
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#475569] dark:text-gray-400">
            Discover opportunities from companies looking for talented
            developers and professionals.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/jobs"
              className="rounded-lg bg-[#1E293B] px-6 py-3 font-semibold text-white transition duration-200 ease-out hover:-translate-y-px hover:bg-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#475569] active:scale-[0.98] dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
            >
              Browse Jobs
            </Link>

            <Link
              to="/saved"
              className="rounded-lg border border-[#D8E0EA] px-6 py-3 font-semibold text-[#0F172A] transition duration-200 ease-out hover:-translate-y-px hover:bg-[#E8EEF5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#475569] active:scale-[0.98] dark:border-gray-700 dark:text-white dark:hover:bg-gray-900"
            >
              Saved Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="mx-auto max-w-7xl py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold text-[#0F172A] dark:text-white">
              Featured Jobs
            </h2>

            <p className="mt-2 text-[#475569] dark:text-gray-400">
              Explore some of the latest opportunities.
            </p>
          </div>

          <Link
            to="/jobs"
            className="text-sm font-semibold text-[#475569] transition duration-200 ease-out hover:translate-x-0.5 hover:text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#475569] dark:text-gray-300 dark:hover:text-white"
          >
            View all jobs →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              isSaved={savedJobIds.includes(job.id)}
              onSave={onSave}
            />
          ))}
        </div>
      </section>

      {/* Why JobFinder */}
      <section className="mx-auto max-w-7xl py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] dark:text-white">
            Why use JobFinder?
          </h2>

          <p className="mt-2 text-[#475569] dark:text-gray-400">
            Everything you need to find your next opportunity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#D8E0EA] bg-[#FFFFFF] p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-xl font-semibold text-[#0F172A] dark:text-white">
              Easy Search
            </h3>

            <p className="mt-3 leading-7 text-[#475569] dark:text-gray-400">
              Quickly find jobs based on title, company, skills,
              location, and job type.
            </p>
          </div>

          <div className="rounded-2xl border border-[#D8E0EA] bg-[#FFFFFF] p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-xl font-semibold text-[#0F172A] dark:text-white">
              Save Jobs
            </h3>

            <p className="mt-3 leading-7 text-[#475569] dark:text-gray-400">
              Save interesting opportunities and come back to them
              whenever you need.
            </p>
          </div>

          <div className="rounded-2xl border border-[#D8E0EA] bg-[#FFFFFF] p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-xl font-semibold text-[#0F172A] dark:text-white">
              Responsive Design
            </h3>

            <p className="mt-3 leading-7 text-[#475569] dark:text-gray-400">
              Browse jobs comfortably across mobile, tablet, and
              desktop devices.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
