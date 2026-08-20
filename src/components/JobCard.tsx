import { Link } from "react-router-dom"
import type { Job } from "../types/job"

interface JobCardProps {
  job: Job
  isSaved: boolean
  onSave: (jobId: number) => void
}

function JobCard({
  job,
  isSaved,
  onSave,
}: JobCardProps) {
  return (
    <article className="animate-card-fade-in rounded-2xl border border-[#D8E0EA] bg-[#FFFFFF] p-6 transition duration-200 ease-out hover:-translate-y-1 hover:border-[#C6D1DE] hover:shadow-md hover:shadow-[#1E293B]/10 motion-reduce:transition-none dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700 dark:hover:shadow-black/20">
      
      {/* Job title and company */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-[#0F172A] dark:text-white">
          {job.title}
        </h2>

        <p className="mt-1 text-[#475569] dark:text-gray-400">
          {job.company}
        </p>
      </div>

      {/* Job information */}
      <div className="space-y-2 text-sm text-[#475569] dark:text-gray-400">
        <p>📍 {job.location}</p>
        <p>💼 {job.jobType}</p>
        <p>💰 {job.salary}</p>
      </div>

      {/* Skills */}
      <div className="mt-4 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-[#E8EEF5] px-3 py-1 text-xs text-[#475569] dark:bg-gray-800 dark:text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        <Link
          to={`/jobs/${job.id}`}
          className="flex-1 rounded-lg bg-[#1E293B] px-4 py-2 text-center font-medium text-white transition duration-200 ease-out hover:-translate-y-px hover:bg-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#475569] active:scale-[0.98] dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
        >
          View Details
        </Link>

        <button
          type="button"
          onClick={() => onSave(job.id)}
          className="rounded-lg border border-[#D8E0EA] px-4 py-2 text-[#0F172A] transition duration-200 ease-out hover:-translate-y-px hover:bg-[#E8EEF5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#475569] active:scale-[0.98] dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
        >
          {isSaved ? "Saved" : "Save"}
        </button>
      </div>
    </article>
  )
}

export default JobCard
