# JobFinder

A modern and responsive Job Finder Dashboard built with React, TypeScript, Vite, and Tailwind CSS.

JobFinder allows users to browse job opportunities, search and filter jobs, view detailed job information, save jobs, and manage saved jobs with browser LocalStorage.

## Features

### Core Features

- Responsive navigation
- Home page with hero section
- Featured jobs
- Search jobs by title, company, or skills
- Job type filtering
- Location filtering
- Job category filtering
- Dynamic job details using React Router
- Save and unsave jobs
- Saved Jobs page
- LocalStorage persistence
- Empty states
- Responsive mobile, tablet, and desktop layouts

### Bonus Features

- Dark / Light mode
- Toast notifications
- Debounced search
- Skeleton loading cards
- Smooth animations and transitions
- Responsive mobile navigation
- Search from Home page

## Technologies

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React
- Sonner
- LocalStorage
- Git & GitHub

## Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/jobs` | Jobs listing, search and filters |
| `/jobs/:id` | Dynamic job details |
| `/saved` | Saved jobs |

## Project Structure

```text
src/
├── components/
│   ├── Button.tsx
│   ├── Filter.tsx
│   ├── Footer.tsx
│   ├── JobCard.tsx
│   ├── JobCardSkeleton.tsx
│   ├── Navbar.tsx
│   └── SearchBar.tsx
│
├── data/
│   └── job.ts
│
├── pages/
│   ├── Home.tsx
│   ├── Jobs.tsx
│   ├── JobDetails.tsx
│   └── SavedJobs.tsx
│
├── types/
│   └── job.ts
│
├── App.tsx
├── main.tsx
└── index.css