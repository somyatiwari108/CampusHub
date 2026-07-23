function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      company: "Microsoft",
      text: "CampusHub helped me connect with alumni and crack my dream internship.",
    },
    {
      name: "Priya Gupta",
      company: "Google",
      text: "The placement portal and AI quizzes made interview preparation much easier.",
    },
    {
      name: "Aman Verma",
      company: "Amazon",
      text: "A single platform for notices, alumni and placements. Really helpful!",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">
          Alumni Success Stories
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-14">
          Hear from our successful alumni.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
            >

              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                {item.name[0]}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {item.name}
              </h3>

              <p className="text-blue-600">
                {item.company}
              </p>

              <p className="text-gray-600 mt-4">
                "{item.text}"
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;