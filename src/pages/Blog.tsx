import { useState } from 'react';
import { Search } from 'lucide-react';
import { BlogCard } from '../components/BlogCard';
import { CategoryCard } from '../components/CategoryCard';
import { blogCategories, blogPosts } from '../data/blogData';

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog & Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Explore articles, tutorials, and insights for your academic journey
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {blogCategories.map((category, index) => (
            <div key={category.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <CategoryCard
                category={category}
                isSelected={selectedCategory === category.id}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.id ? '' : category.id
                )}
              />
            </div>
          ))}
        </div>

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12" data-aos="fade-up">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No articles found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div key={post.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}