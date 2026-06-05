import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Building Modern
            <span className="text-indigo-400"> React Websites</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Frontend Developer specializing in React.js, Tailwind CSS and
            responsive web applications.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl">
              Hire Me
            </button>

            <button className="border border-white px-6 py-3 rounded-xl">
              View Projects
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Developer"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
