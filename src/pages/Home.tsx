import { Download, Users, BookOpen, Star, ArrowRight, Smartphone, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TestimonialSlider } from '../components/TestimonialSlider';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-24 mx-auto max-w-7xl px-4 sm:mt-28 sm:px-6 md:mt-32 lg:mt-36 lg:px-8 xl:mt-48">
              <div className="sm:text-center lg:text-left" data-aos="fade-right">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Access Academic Notes</span>{' '}
                  <span className="block text-indigo-600 xl:inline">Anytime, Anywhere</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Join thousands of students who are already using NotesNeo to access high-quality academic notes. Study smarter, not harder.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow" data-aos="fade-up" data-aos-delay="200">
                    <a
                      href="https://chat.whatsapp.com/EtBjr3a2V8n1biCfXYf1iw"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      <Users className="w-5 h-5 mr-2" />
                      Join WhatsApp Group
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3" data-aos="fade-up" data-aos-delay="400">
                    <a
                      href="https://drive.google.com/uc?export=download&id=19zqey0UnyHMvLes_Nj-kDlzB2rRRxBdA"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Android App
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:absolute lg:inset-y-0 lg:right-32 lg:w-[33%]" data-aos="fade-left">
          <img
            className="w-full h-auto object-contain sm:h-72 md:h-96 lg:h-full"
            // src="https://i.ibb.co/z7j55FV/hero.png"
            src="/assets/home.svg"
            alt="Students studying"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center" data-aos="fade-up">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to excel
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature, index) => (
                <div key={feature.name} className="relative" data-aos="fade-up" data-aos-delay={index * 100}>
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.name}</p>
                  </dt>
                  <dd className="ml-16 text-base text-gray-500 dark:text-gray-400">{feature.description}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8" data-aos="zoom-in">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Ready to Excel in Your Studies?
          </h2>
          <Link
            to="/notes"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mt-6"
          >
            Browse Notes
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-indigo-600 py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white">
              What Our Students Say
            </h2>
            <p className="mt-4 text-lg text-indigo-200">
              Don't just take our word for it - hear from some of our satisfied students
            </p>
          </div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    name: 'Comprehensive Notes',
    description: 'Access detailed notes for all subjects, carefully curated by top educators.',
    icon: BookOpen,
  },
  {
    name: 'Easy Downloads',
    description: 'Download notes instantly for offline access and study.',
    icon: Download,
  },
  {
    name: 'Community Support',
    description: 'Join the WhatsApp community for discussions and support.',
    icon: Users,
  },
  {
    name: 'Personalized Study Resources',
    description: 'Save favorite notes for quick access and create a customized study library.',
    icon: Star,
  },
  {
    name: 'Multi-Device Access',
    description: 'Access your notes and study materials on any device.',
    icon: Smartphone,
  },
  {
    name: 'Updated Content',
    description: 'Stay up-to-date with the latest notes and resources for your studies.',
    icon: RefreshCw,
  },
];

const testimonials = [
  {
    name: 'Deepak Modi',
    title: 'BTech Student',
    quote: 'NotesNeo has been a game-changer for my studies. The notes are well-organized and easy to understand.',
    rating: 5,
    image: 'https://i.ibb.co/fxHpNCX/deepak-modi.jpg',
  },
  {
    name: 'Nitish Modi',
    title: 'BCA Student',
    quote: 'The quality of notes and the community support have helped me improve my academic performance significantly.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Sandeep Nandi',
    title: 'BBA Student',
    quote: 'I love how easy it is to access and download notes. The mobile app is a great addition!',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Vishal Singh',
    title: 'BBA Student',
    quote: 'The platform has made studying much more efficient. I can focus on understanding rather than note-taking.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Shivam Kumar',
    title: 'BTech Student',
    quote: 'The subject categorization and unit-wise breakdown makes finding specific topics very convenient.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Preet Raj',
    title: 'BCA Student',
    quote: 'NotesNeo has become an essential part of my study routine. Highly recommended!',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];