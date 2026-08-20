import { useEffect, useState } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { Toaster } from "sonner"
import { toast } from "sonner"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Jobs from "./pages/Jobs"
import JobDetails from "./pages/JobDetails"
import SavedJobs from "./pages/SavedJobs"

type Theme = "dark" | "light"

function App() {
  const [theme, setTheme] = useState<Theme>(() =>
    localStorage.getItem("theme") === "light" ? "light" : "dark"
  )

  // -----------------------------
  // Saved jobs state
  // -----------------------------
  const [savedJobIds, setSavedJobIds] = useState<number[]>(() => {
    const storedJobs = localStorage.getItem("savedJobs")

    if (!storedJobs) {
      return []
    }

    try {
      const parsedJobs: unknown = JSON.parse(storedJobs)

      if (
        Array.isArray(parsedJobs) &&
        parsedJobs.every(
          (jobId) => typeof jobId === "number"
        )
      ) {
        return parsedJobs
      }

      return []
    } catch {
      return []
    }
  })

  // -----------------------------
  // Save / Unsave job
  // -----------------------------
const handleSaveJob = (jobId: number) => {
  setSavedJobIds((currentIds) => {
    const isAlreadySaved = currentIds.includes(jobId)

    if (isAlreadySaved) {
      toast.success("Job removed from saved jobs")
      return currentIds.filter((id) => id !== jobId)
    }

    toast.success("Job saved successfully")
    return [...currentIds, jobId]
  })
}

  // -----------------------------
  // Persist saved jobs
  // -----------------------------
  useEffect(() => {
    localStorage.setItem(
      "savedJobs",
      JSON.stringify(savedJobIds)
    )
  }, [savedJobIds])

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    )
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    )
  }

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen bg-[#F4F7FB] text-[#0F172A] transition-colors dark:bg-gray-950 dark:text-white ${
          theme === "dark" ? "dark" : ""
        }`}
      >
        <Navbar theme={theme} onToggleTheme={toggleTheme} />

        <main className="min-h-[80vh] px-6 py-10">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  savedJobIds={savedJobIds}
                  onSave={handleSaveJob}
                />
              }
            />

            <Route
              path="/jobs"
              element={
                <Jobs
                  savedJobIds={savedJobIds}
                  onSave={handleSaveJob}
                />
              }
            />

            <Route
              path="/jobs/:id"
              element={<JobDetails />}
            />

            <Route
              path="/saved"
              element={
                <SavedJobs
                  savedJobIds={savedJobIds}
                  onSave={handleSaveJob}
                />
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
      <Toaster position="top-right" theme={theme} />
    </BrowserRouter>
  )
}

export default App
