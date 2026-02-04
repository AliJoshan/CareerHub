import './App.css'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />

      <section className="min-h-screen bg-gradient-to-b from-[#f9fcf9] to-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              ● 1,000+ new jobs posted weekly
            </span>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-tight font-bold text-gray-900 mb-6">
              Find Your <span className="text-green-600">Dream Career</span><br />
              Today
            </h1>

            {/* Description */}
            <p className="text-gray-600 max-w-xl mb-10">
              Connect with top companies and discover opportunities that match your skills and aspirations. Your next great adventure starts here.
            </p>

            {/* Search */}
            <div className="flex items-center bg-white rounded-xl shadow-sm overflow-hidden max-w-xl">
              <div className="flex items-center px-4 text-gray-400">
                🔍
              </div>
              <input
                type="text"
                placeholder="Job title, company, or keyword"
                className="flex-1 py-4 text-sm outline-none"
              />
              <button className="bg-green-600 text-white px-8 py-4 text-sm font-medium hover:bg-green-600 transition">
                Search Jobs →
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 mt-8 text-sm text-gray-600">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 border border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-400 border border-white"></div>
              </div>
              <span>
                <strong className="text-gray-900">5,000+</strong> professionals hired this month
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-[#f4f7f4] py-4">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

            <div>
              <h3 className="text-4xl font-bold text-green-600">50K+</h3>
              <p className="mt-2 text-sm text-gray-600">Active Members</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-600">10K+</h3>
              <p className="mt-2 text-sm text-gray-600">Jobs Posted</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-600">8+</h3>
              <p className="mt-2 text-sm text-gray-600">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-600">95%</h3>
              <p className="mt-2 text-sm text-gray-600">Success Rate</p>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-[#f9fcf9]">
        <div className="max-w-7xl mx-auto px-6 py-24">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to <span className="text-green-600">Succeed</span>
            </h2>
            <p className="text-gray-600">
              We provide comprehensive career services to help you land your dream job
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-sm">
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-xl">
                🎒
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Job Portal
              </h3>
              <p className="text-sm text-gray-600">
                Access thousands of verified job listings from top companies across all industries.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-sm">
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-xl">
                👥
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Talent Agency
              </h3>
              <p className="text-sm text-gray-600">
                Connect with our network of recruiters who specialize in matching talent with opportunities.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-sm">
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-xl">
                🎓
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Career Coaching
              </h3>
              <p className="text-sm text-gray-600">
                Get personalized guidance from industry experts to accelerate your career growth.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-sm">
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-xl">
                🎯
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Smart Matching
              </h3>
              <p className="text-sm text-gray-600">
                Our AI-powered system matches you with jobs that fit your skills and preferences.
              </p>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default App
