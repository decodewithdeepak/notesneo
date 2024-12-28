import { ExternalLink } from 'lucide-react';

export function CreatorSection() {
  return (
    <div className="relative overflow-hidden py-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
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
            A Contribution to Education and a Vision for Empowering Studentsion
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Profile Image Card */}
          <div 
            className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-right"
          >
            <img
              src="https://i.ibb.co/fxHpNCX/deepak-modi.jpg"
              alt="Deepak Modi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Card */}
          <div 
            className="max-w-xl bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20"
            data-aos="fade-left"
          >
            <p className="text-lg text-white leading-relaxed mb-6">
              Hi, I'm Deepak Modi, a passionate developer dedicated to making education more accessible 
              and engaging for students. This website is a small step towards achieving that goal.
            </p>
            <p className="text-indigo-100 mb-8">
              As a student myself, I understand the challenges of finding quality study materials. 
              NotesNeo is built with love and dedication to help fellow students excel in their academic journey.
            </p>
            <a
              href="https://deepakmodi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors duration-300"
            >
              Visit My Portfolio
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}