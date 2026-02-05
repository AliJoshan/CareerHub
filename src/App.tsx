import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import LatestJobs from './components/LatestJobs'
import CTASection from './CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />

      <Hero />

      <Stats />

      {/* FEATURES SECTION */}
      <section className="bg-[#f9fcf9]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to <span className="text-green-600">Succeed</span>
            </h2>
            <p className="text-gray-600">
              We provide comprehensive career services to help you land your dream job
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div
              className="group bg-white rounded-2xl border border-gray-100 p-8 text-center
             shadow-sm transition-all duration-300 ease-out
             hover:-translate-y-2 hover:shadow-xl hover:border-green-200"
            >
              <div
                className="w-14 h-14 mx-auto mb-6 rounded-xl
               bg-green-100 flex items-center justify-center
               transition-all duration-300
               group-hover:bg-green-600"
              >
                <img
                  className="w-7 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  src="public/icons/briefcase.png"
                  alt="icon"
                />
              </div>

              <h3
                className="text-lg font-semibold text-gray-900 mb-3
               transition-colors duration-300
               group-hover:text-green-600"
              >
                Job Portal
              </h3>

              <p className="text-sm text-gray-600">
                Access thousands of verified job listings from top companies across all industries.
              </p>
            </div>

            <div
              className="group bg-white rounded-2xl border border-gray-100 p-8 text-center
             shadow-sm transition-all duration-300 ease-out
             hover:-translate-y-2 hover:shadow-xl hover:border-green-200"
            >
              <div
                className="w-14 h-14 mx-auto mb-6 rounded-xl
               bg-green-100 flex items-center justify-center
               transition-all duration-300
               group-hover:bg-green-600"
              >
                <img
                  className="w-7 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  src="public/icons/customer.png"
                  alt="icon"
                />
              </div>

              <h3
                className="text-lg font-semibold text-gray-900 mb-3
               transition-colors duration-300
               group-hover:text-green-600"
              >
                Talent Agency
              </h3>

              <p className="text-sm text-gray-600">
                Connect with our network of recruiters who specialize in matching talent with opportunities.
              </p>
            </div>


            {/* Card 3 */}
            <div
              className="group bg-white rounded-2xl border border-gray-100 p-8 text-center
             shadow-sm transition-all duration-300 ease-out
             hover:-translate-y-2 hover:shadow-xl hover:border-green-200"
            >
              <div
                className="w-14 h-14 mx-auto mb-6 rounded-xl
               bg-green-100 flex items-center justify-center
               transition-all duration-300
               group-hover:bg-green-600"
              >
                <img
                  className="w-7 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  src="public/icons/graduation.png"
                  alt="icon"
                />
              </div>

              <h3
                className="text-lg font-semibold text-gray-900 mb-3
               transition-colors duration-300
               group-hover:text-green-600"
              >
                Career Coaching
              </h3>

              <p className="text-sm text-gray-600">
                Get personalized guidance from industry experts to accelerate your career growth.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="group bg-white rounded-2xl border border-gray-100 p-8 text-center
             shadow-sm transition-all duration-300 ease-out
             hover:-translate-y-2 hover:shadow-xl hover:border-green-200"
            >
              <div
                className="w-14 h-14 mx-auto mb-6 rounded-xl
               bg-green-100 flex items-center justify-center
               transition-all duration-300
               group-hover:bg-green-600"
              >
                <img
                  className="w-7 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  src="public/icons/circular-target.png"
                  alt="icon"
                />
              </div>

              <h3
                className="text-lg font-semibold text-gray-900 mb-3
               transition-colors duration-300
               group-hover:text-green-600"
              >
                Smart Matching
              </h3>

              <p className="text-sm text-gray-600">
                Our AI-powered system matches you with jobs that fit your skills and preferences.
              </p>
            </div>

          </div>
        </div>
      </section>

      <LatestJobs />
      <CTASection />
      <Footer />

    </>
  )
}

export default App
