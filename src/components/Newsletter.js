export default function Newsletter() {
    return (
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto md:flex items-center">
          <div className="md:w-1/2 mb-8 px-6 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Support Your Child's Reading Journey at Home</h2>
            <p className="text-xl text-gray-600 mb-4">
            With KidsReadWorld's newsletter, you'll receive free, research-backed reading resources, activities, and more, all designed to help your child thrive. Sign up today and start exploring!
            </p>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="flex-grow p-3 rounded-l-lg" />
              <button className="bg-blue-500 text-white p-3 rounded-r-lg hover:bg-blue-600 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/images/kids-computer.jpg" alt="Reading resources" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    );
  }