import { Link } from "react-router-dom"
import JobCard from "../components/JobCard"
import { jobs } from "../data/job"

interface SavedJobsProps {
  savedJobIds: number[]
  onSave: (jobId: number) => void
}

function SavedJobs({
  savedJobIds,
  onSave,
}: SavedJobsProps) {
  // Get the actual job objects whose IDs are saved
  const savedJobs = jobs.filter((job) =>
    savedJobIds.includes(job.id)
  )

  return (
    <section className="mx-auto max-w-7xl">
      {/* Page heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#0F172A] dark:text-white">
          Saved Jobs
        </h1>

        <p className="mt-2 text-[#475569] dark:text-gray-400">
          Your saved job opportunities.
        </p>
      </div>

      {/* Saved jobs */}
      {savedJobs.length > 0 ? (
        <>
          <div className="mb-6">
            <p className="text-sm text-[#475569]">
              {savedJobs.length}{" "}
              {savedJobs.length === 1
                ? "job"
                : "jobs"}{" "}
              saved
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {savedJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isSaved={true}
                onSave={onSave}
              />
            ))}
          </div>
        </>
      ) : (
        /* Empty state */
        <div className="rounded-2xl border border-[#D8E0EA] bg-[#FFFFFF] p-12 text-center dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-white">
            No Saved Jobs
          </h2>

          <p className="mx-auto mt-3 max-w-md text-[#475569] dark:text-gray-400">
            You haven't saved any jobs yet. Browse available
            jobs and save the ones you're interested in.
          </p>

          <Link
            to="/jobs"
            className="mt-6 inline-block rounded-lg bg-[#1E293B] px-6 py-3 font-semibold text-white transition duration-200 ease-out hover:-translate-y-px hover:bg-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#475569] active:scale-[0.98] dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
          >
            Browse Jobs
          </Link>
        </div>
      )}
    </section>
  )
}

export default SavedJobs
