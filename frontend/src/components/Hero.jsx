import heroImage from "../assets/hero.svg";

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500">
      <div className="max-w-7xl mx-auto min-h-screen px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Left Side */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Empowering
            <br />
            Students.
            <br />
            Connecting
            <br />
            Futures.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-xl">
            A modern platform connecting students, alumni and recruiters to
            build careers, share experiences and create opportunities together.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300">
              Get Started
            </button>

            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center">

          {/* Background Glow */}
          <div className="absolute w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>

          {/* Hero Image */}
          <img
            src={heroImage}
            alt="Students"
            className="relative z-10 w-full max-w-lg"
          />

          {/* Floating Card 1 */}
          <div className="absolute top-8 -left-4 bg-white rounded-2xl shadow-xl p-4 z-20">
            <h3 className="text-2xl font-bold text-blue-700">
              5000+
            </h3>

            <p className="text-gray-600 text-sm">
              Active Students
            </p>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-10 -right-4 bg-white rounded-2xl shadow-xl p-4 z-20">
            <h3 className="text-2xl font-bold text-cyan-600">
              800+
            </h3>

            <p className="text-gray-600 text-sm">
              Alumni Network
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;