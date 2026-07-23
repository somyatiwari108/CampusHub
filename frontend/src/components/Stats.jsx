function Stats() {
  const stats = [
    {
      number: "5000+",
      title: "Students",
    },
    {
      number: "800+",
      title: "Alumni",
    },
    {
      number: "120+",
      title: "Companies",
    },
    {
      number: "95%",
      title: "Placement Rate",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition duration-300"
            >
              <h2 className="text-4xl font-bold text-blue-700">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-600">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;