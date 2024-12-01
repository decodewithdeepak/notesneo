import { BookOpen, GraduationCap, Users, User, Lightbulb, RefreshCw, Shield, Clock, Github, Linkedin, Twitter } from 'lucide-react';

export function About() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="text-center mb-8 mt-16" data-aos="fade-down">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white pt-8">
          About NotesNeo
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Empowering students with comprehensive academic resources and a supportive learning community.
        </p>
      </div>

      {/* Image Section - For both Small and Large Screens */}
      <div className="mt-8 sm:mt-8 lg:mt-0 sm:max-w-lg sm:mx-auto lg:hidden sm:flex justify-center p-6" data-aos="zoom-in">
        <img
          className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
          src="https://i.ibb.co/W2rp6sg/notesneo.jpg"
          alt="Students collaborating"
        />
      </div>

      {/* Mission Section */}
      <div className="relative py-8 sm:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Mission Text */}
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left" data-aos="fade-right">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                Our Mission
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                NotesNeo was founded with a simple yet powerful mission: to make quality education accessible to every student. We believe that access to comprehensive study materials shouldn't be a barrier to academic success.
                <br /><br />
                Through our platform, we're building a community where students can easily find, share, and learn from well-organized academic resources.
                <br /><br />
                We continuously enhance our resources to support students' academic and personal success.
              </p>
            </div>

            {/* Image for Large Screens */}
            <div className="hidden lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center" data-aos="fade-left">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                src="https://i.ibb.co/W2rp6sg/notesneo.jpg"
                alt="Students collaborating"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white dark:bg-gray-800 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center" data-aos="fade-up">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              What drives us forward
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {values.map((value, index) => (
                <div key={value.name} className="relative" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <value.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{value.name}</p>
                  <p className="ml-16 text-base text-gray-500 dark:text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12" data-aos="fade-up">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Team</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Meet the Minds Behind NotesNeo
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              Dedicated students working together to make education accessible for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-6">
                  <img
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-500"
                    src={member.image}
                    alt={member.name}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">{member.name}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 text-center mb-4">{member.role}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-6">{member.description}</p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const values = [
  {
    name: 'Quality Education',
    description: 'We provide high-quality notes that help students learn effectively.',
    icon: GraduationCap,
  },
  {
    name: 'Accessibility',
    description: 'We make sure students can access our resources anytime and anywhere.',
    icon: BookOpen,
  },
  {
    name: 'Community',
    description: 'We build a strong community where students can support each other.',
    icon: Users,
  },
  {
    name: 'Innovation',
    description: 'We keep improving and offering new resources to help students grow.',
    icon: Lightbulb,
  },
  {
    name: 'Student-Centered',
    description: 'Our resources are designed to meet the needs of each student.',
    icon: User,
  },
  {
    name: 'Continuous Improvement',
    description: 'We always work to make our resources better for students.',
    icon: RefreshCw,
  },
  {
    name: 'Integrity',
    description: 'We offer honest and trustworthy resources students can rely on.',
    icon: Shield,
  },
  {
    name: 'Time Efficiency',
    description: 'We help students save time by providing well-organized and focused resources.',
    icon: Clock,
  },
];

const teamMembers = [
  {
    name: 'Deepak Modi',
    role: 'Founder & Lead Developer',
    description: 'Full-stack developer with a passion for education technology.',
    image: 'https://i.ibb.co/fxHpNCX/deepak-modi.jpg',
    social: {
      github: 'https://github.com/decodewithdeepak',
      linkedin: 'https://www.linkedin.com/in/deepakmodi1/',
      twitter: 'https://twitter.com/deepakmodi_io'
    }
  },
  {
    name: 'Deepak Modi',
    role: 'Content Manager',
    description: 'Expert in creating and curating high-quality academic content.',
    image: 'https://i.ibb.co/fxHpNCX/deepak-modi.jpg',
    social: {
      github: 'https://github.com/decodewithdeepak',
      linkedin: 'https://www.linkedin.com/in/deepakmodi1/',
      twitter: 'https://twitter.com/deepakmodi_io'
    }
  },
  {
    name: 'Deepak Modi',
    role: 'UI/UX Designer',
    description: 'Creative designer focused on user-friendly educational interfaces.',
    image: 'https://i.ibb.co/fxHpNCX/deepak-modi.jpg',
    social: {
      github: 'https://github.com/decodewithdeepak',
      linkedin: 'https://www.linkedin.com/in/deepakmodi1/',
      twitter: 'https://twitter.com/deepakmodi_io'
    }
  },
  {
    name: 'Deepak Modi',
    role: 'Community Manager',
    description: 'Building and nurturing the NotesNeo student community.',
    image: 'https://i.ibb.co/fxHpNCX/deepak-modi.jpg',
    social: {
      github: 'https://github.com/decodewithdeepak',
      linkedin: 'https://www.linkedin.com/in/deepakmodi1/',
      twitter: 'https://twitter.com/deepakmodi_io'
    }
  }
];