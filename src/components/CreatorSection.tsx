import { ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';

export function CreatorSection() {
  return (
    <div className="relative overflow-hidden py-16 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4" data-aos="fade-down">
            About the Creator
          </h2>
          <p className="text-xl text-indigo-100" data-aos="fade-up">
            A Contribution to Education and a Vision for Empowering Students
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Profile Card */}
          <div 
            className="w-full md:w-1/3 max-w-sm"
            data-aos="fade-right"
          >
            <div className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/20 hover:ring-white/40 transition-all">
                <img
                  src="https://i.ibb.co/fxHpNCX/deepak-modi.jpg"
                  alt="Deepak Modi"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">
                Deepak Modi
              </h3>
              <p className="text-indigo-200 text-center">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* Content Card */}
          <div 
            className="w-full md:w-2/3"
            data-aos="fade-left"
          >
            <div className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
              <p className="text-lg text-white leading-relaxed mb-6">
                Hi, I'm Deepak Modi, a passionate developer dedicated to making education more accessible 
                and engaging for students. This website is a small step towards achieving that goal.
              </p>
              <p className="text-indigo-100 mb-8">
                As a student myself, I understand the challenges of finding quality study materials. 
                NotesNeo is built with love and dedication to help fellow students excel in their academic journey.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a
                  href="https://deepakmodi.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-indigo-50 dark:bg-white/90 dark:hover:bg-white transition-colors duration-300"
                >
                  Visit My Portfolio
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/decodewithdeepak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/deepakmodi1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}