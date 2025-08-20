
import heroImg from "../images/WhatsApp_Image_2024-12-07_at_00.22.51_1855fad0-removebg-preview.png";
 import { motion } from "framer-motion";

// Fake project images from Unsplash
const projectImages = [
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    title: "Modern Dashboard UI",
    desc: "A sleek, responsive dashboard for analytics and business intelligence.",
    tech: ["React", "Tailwind CSS", "D3.js"],
  },
  {
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    title: "E-commerce Platform",
    desc: "A full-featured online store with payment integration and product management.",
    tech: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    title: "Portfolio Website",
    desc: "A personal portfolio to showcase creative work and skills.",
    tech: ["Gatsby", "Styled Components", "Netlify"],
  },
  {
    url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    title: "Mobile App UI",
    desc: "A beautiful mobile app interface for productivity and task management.",
    tech: ["React Native", "Expo", "Firebase"],
  },
  {
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    title: "Landing Page Design",
    desc: "A high-converting landing page for marketing campaigns.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    title: "Blog Platform",
    desc: "A fast, SEO-friendly blog platform for content creators.",
    tech: ["Next.js", "MDX", "Vercel"],
  },
];

const testimonials = [
  {
    name: "Amit Patel",
    text: "JD Products delivered a stunning dashboard for our business. The animations and responsiveness are top-notch!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    text: "The team was creative, fast, and super easy to work with. Our e-commerce site looks amazing!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Mehta",
    text: "I love my new portfolio site. The interactive effects really make it stand out.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const stats = [
  { label: "Projects Completed", value: 32 },
  { label: "Happy Clients", value: 18 },
  { label: "Awards", value: 5 },
  { label: "Years Experience", value: 3 },
];

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-10">
    
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">
        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-shrink-0"
        >
          <img
            src={heroImg}
            alt="Hero"
            className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-full shadow-lg border-4 border-blue-500 bg-blue-400"
          />
        </motion.div>
        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Welcome to{" "}
            <span className="text-blue-400 animate-pulse">JD Products</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-lg">
            Discover modern, interactive, and user-friendly web experiences
            built with{" "}
            <span className="font-semibold text-blue-300">React</span> and{" "}
            <span className="font-semibold text-blue-400">Tailwind CSS</span>.
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Explore Projects
          </motion.a>
        </motion.div>
      </div>
      {/* Animated React SVG */}
   
      <section className="w-full max-w-5xl mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg border-t-4 border-blue-500"
          >
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              {stat.value}+
            </div>
            <div className="text-gray-200 text-lg font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </section>
      {/* Project Gallery Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-20 w-full max-w-6xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectImages.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px 0 rgba(0,0,0,0.2)",
              }}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-blue-800 flex flex-col"
            >
              <img
                src={project.url}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-700 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-20 w-full max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-8 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              whileHover={{ scale: 1.04 }}
              className="bg-gray-900 rounded-xl shadow-lg p-6 border border-blue-800 flex flex-col items-center text-center"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 border-2 border-blue-400 object-cover"
              />
              <p className="text-gray-200 mb-4">"{t.text}"</p>
              <div className="text-blue-400 font-bold">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Info Section (Why Choose Us) */}
      <motion.section
        id="explore"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-20 w-full max-w-4xl bg-gray-800 bg-opacity-80 rounded-xl shadow-lg p-8 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-300 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-200 text-lg mb-4">
          We focus on delivering{" "}
          <span className="text-blue-400 font-semibold">responsive</span>,{" "}
          <span className="text-blue-300 font-semibold">animated</span>, and{" "}
          <span className="text-blue-400 font-semibold">engaging</span> web
          solutions. Our projects are crafted for both beauty and usability.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-1 bg-gray-900 rounded-lg p-6 shadow border border-blue-800"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Modern UI
            </h3>
            <p className="text-gray-300">
              Sleek, up-to-date interfaces using the latest web tech.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-1 bg-gray-900 rounded-lg p-6 shadow border border-blue-800"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Interactive
            </h3>
            <p className="text-gray-300">
              Animations and effects that delight and engage users.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-1 bg-gray-900 rounded-lg p-6 shadow border border-blue-800"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Responsive
            </h3>
            <p className="text-gray-300">
              Looks great on any device, from mobile to desktop.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default Home;
