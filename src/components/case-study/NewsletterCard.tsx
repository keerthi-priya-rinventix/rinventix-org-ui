export function NewsletterCard() {
  return (
    <aside
      className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden sticky top-20"
      aria-label="Newsletter signup"
    >
      <div className="h-1.5 bg-gradient-to-r from-[#0F9DF3] to-blue-400" />
      <div className="p-6 flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0F9DF3] to-blue-500 flex items-center justify-center mb-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
        </div>
        <h3 className="font-bold text-black text-lg mb-2">Weekly newsletter</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          No spam. Just the latest releases and tips, interesting articles, and
          exclusive interviews in your inbox every week.
        </p>
        <form
          className="w-full flex flex-col gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F9DF3] focus:border-transparent"
            aria-label="Email address"
          />
          <a
            href="#privacy"
            className="text-sm text-[#0F9DF3] hover:underline text-left"
          >
            Read about our privacy policy.
          </a>
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#0F9DF3] to-blue-600 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Surprise.
          </button>
        </form>
      </div>
    </aside>
  );
}
