import { useParams } from "react-router-dom"
import { jobs } from "../data/job"

function JobDetails() {
  const { id } = useParams()

  const job = jobs.find((job) => job.id === Number(id))

  if (!job) {
    return (
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-[#0F172A] dark:text-white">
          Job Not Found
        </h1>

        <p className="mt-2 text-[#475569] dark:text-gray-400">
          The job you are looking for does not exist.
        </p>
      </div>
    )
  }

  return (
    <section className="mx-auto max-w-4xl">
      <div className="rounded-2xl border border-[#D8E0EA] bg-[#FFFFFF] p-8 dark:border-gray-800 dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-[#0F172A] dark:text-white">
          {job.title}
        </h1>

        <p className="mt-2 text-xl text-[#475569] dark:text-gray-400">
          {job.company}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-sm text-[#475569]">Location</p>
            <p className="text-[#0F172A] dark:text-white">{job.location}</p>
          </div>

          <div>
            <p className="text-sm text-[#475569]">Job Type</p>
            <p className="text-[#0F172A] dark:text-white">{job.jobType}</p>
          </div>

          <div>
            <p className="text-sm text-[#475569]">Salary</p>
            <p className="text-[#0F172A] dark:text-white">{job.salary}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-white">
            Description
          </h2>

          <p className="mt-3 leading-7 text-[#475569] dark:text-gray-400">
            {job.description}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-white">
            Skills
          </h2>

          <div className="mt-3 flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-[#E8EEF5] px-3 py-1 text-sm text-[#475569] dark:bg-gray-800 dark:text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-white">
            Requirements
          </h2>

          <ul className="mt-3 space-y-2 text-[#475569] dark:text-gray-400">
            {job.requirements.map((requirement) => (
              <li key={requirement}>
                • {requirement}
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="mt-8 rounded-lg bg-[#1E293B] px-6 py-3 font-medium text-white transition duration-200 ease-out hover:-translate-y-px hover:bg-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#475569] active:scale-[0.98] dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
        >
          Apply Now
        </button>
      </div>
    </section>
  )
}

export default JobDetails   
