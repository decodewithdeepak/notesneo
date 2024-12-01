import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  rating: number;
  image: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3); // 1 slide on small screens, 3 on larger screens
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= testimonials.length - slidesToShow + 1 ? 0 : nextIndex;
    });
  };

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? testimonials.length - slidesToShow : nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  const translateX = -(currentIndex * (100 / slidesToShow));

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-live="polite">
      <div className="flex items-center justify-between">
        {/* Previous Button */}
        <button
          onClick={previousTestimonial}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${translateX}%)`,
              transitionProperty: 'transform',
              transitionTimingFunction: 'ease-in-out',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 px-4 py-2"
                style={{
                  width: `${100 / slidesToShow}%`, // Ensure 3 full cards are shown at once
                }}
                role="group"
                aria-roledescription="testimonial"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl h-full">
                  <div className="flex items-center mb-4">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm italic line-clamp-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? 'fill-current' : 'stroke-current'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {Array.from({ length: Math.ceil(testimonials.length / slidesToShow) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * slidesToShow)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${Math.floor(currentIndex / slidesToShow) === index
                ? 'bg-white border-indigo-600 shadow-lg scale-125 ring-2 ring-indigo-300'  // Active dot with white background, border, shadow, and glow
                : 'bg-gray-200 border-gray-400 opacity-80 hover:opacity-100'  // Inactive dot with gray and reduced opacity
              }`}
            aria-label={`Go to testimonial group ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
