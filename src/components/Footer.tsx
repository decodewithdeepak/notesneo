import { Facebook, Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-8">

          {/* Brand Section */}
          <div className="col-span-1">
            <Link to="/" className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition duration-300">
              NotesNeo
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Empowering students with high-quality academic resources for better learning outcomes and community support.
            </p>
            <Link
              to="/about"
              className="text-indigo-500 dark:text-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-400 mt-4 block text-sm transition duration-300"
            >
              Learn more about us
            </Link>
          </div>

          {/* Quick Links - Adjusted Resources Alignment */}
          <div className="flex flex-row space-x-8 col-span-1 md:col-span-2">
            {footerLinks.map((section, index) => (
              <div key={section.title} className={`flex-1 ${index === 0 ? 'pl-8 md:pl-6 lg:pl-8' : ''}`}>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Connect Section - Centered on small devices */}
          <div className="col-span-1 flex flex-col items-center md:items-start md:text-left text-center">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-500 transition duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-8 w-8" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Follow us on social media for updates and resources.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 cursor-pointer">
              © {new Date().getFullYear()} NotesNeo. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/about"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/decodewithdeepak',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/deepakmodi1/',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/deepakmodi_io',
    icon: Twitter,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/deepakmodi.io/',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    href: 'https://m.facebook.com/deepak.modi.313924',
    icon: Facebook,
  },
  {
    name: 'Email',
    href: 'mailto:deepakmodi8676@gmail.com',
    icon: Mail,
  },
];

const footerLinks = [
  {
    title: 'Resources',
    links: [
      { name: 'Notes', href: '/notes' },
      { name: 'Study Tips', href: '/study-tips' },
      { name: 'Downloads', href: '/downloads' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'Report Issue', href: '/report' },
    ],
  },
];
