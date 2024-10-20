export default function Hero() {
    return (
      <div className="bg-white py-16">
        <div className="container mx-auto md:flex items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Top Children's Books</h1>
            <p className="text-xl text-gray-600 mb-8">
            Explore a curated selection of the best kids' books—perfect for every child's interests and reading level.
            </p>
            <button className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300">
              Explore
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="/images/interest.png" alt="Children reading" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    );
  }