const articles = [
    { id: 1, title: "Kids' Favorite Book Awards", image: "/images/kids-explore.jpg" },
    { id: 2, title: "Reading Together", image: "/images/continuously-improving.png" },
    { id: 3, title: "Exploring New Genres", image: "/images/explore-in-cave.jpeg" },
  ];
  
  export default function RecommendedArticles() {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Recommended Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                  <a href="#" className="text-blue-500 hover:text-blue-600">Read more</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }