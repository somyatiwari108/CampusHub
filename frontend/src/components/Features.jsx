import {
  FaBullhorn,
  FaUsers,
  FaBriefcase,
} from "react-icons/fa";

import { HiSparkles } from "react-icons/hi2";

function Features() {
  const features = [
    {
      icon: <FaBullhorn className="text-4xl text-blue-600" />,
      title: "Smart Notices",
      description:
        "Get all important college notices instantly in one place.",
    },
    {
      icon: <FaUsers className="text-4xl text-cyan-600" />,
      title: "Alumni Network",
      description:
        "Connect with alumni for mentorship and career guidance.",
    },
    {
      icon: <FaBriefcase className="text-4xl text-indigo-600" />,
      title: "Placement Portal",
      description:
        "Explore internships and placement opportunities easily.",
    },
    {
      icon: <HiSparkles className="text-4xl text-yellow-500" />,
      title: "AI Quiz",
      description:
        "Practice aptitude and technical quizzes powered by AI.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-gray-800">
          Everything You Need
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-14">
          One platform for students, alumni and placements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              {feature.icon}

              <h3 className="text-xl font-semibold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-500 mt-3">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;