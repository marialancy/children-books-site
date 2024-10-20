import Header from '../components/Header';
import Hero from '../components/Hero';
import RecommendedArticles from '../components/RecommendedArticles';
import Newsletter from '../components/Newsletter';
import PopularTopics from '../components/PopularTopics';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Header />
      <Hero />
      <RecommendedArticles />
      <Newsletter />
      <PopularTopics />
      <Footer />
    </main>
  );
}