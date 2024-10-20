import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">KidsReadWorld</Link>
          <div className="space-x-6">
            <Link href="#" className="text-gray-600 hover:text-gray-800">Books</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Articles</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">About</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}