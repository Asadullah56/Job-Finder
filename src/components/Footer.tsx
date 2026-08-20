function Footer() {
  return (
    <footer className="border-t border-[#D8E0EA] bg-[#F4F7FB] transition-colors dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] dark:text-white">
              JobFinder
            </h2>
            <p className="mt-1 text-sm text-[#475569] dark:text-gray-400">
              Find your next opportunity.
            </p>
          </div>

          <p className="text-sm text-[#475569]">
            © 2026 JobFinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
