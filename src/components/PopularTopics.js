const topics = ["Topics by Age", "Topics by Grade", "Topics by Genre"];

export default function PopularTopics() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular topics to browse</h2>
        <p className="text-xl text-gray-600 mb-8">
          Not sure where to start? Browse by topics.
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          {topics.map((topic, index) => (
            <button key={index} className="bg-blue-100 text-blue-800 py-2 px-4 rounded-full hover:bg-blue-200 transition duration-300">
              {topic}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Add book cover images here */}
        </div>
      </div>
    </section>
  );
}