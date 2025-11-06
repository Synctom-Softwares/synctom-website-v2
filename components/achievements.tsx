"use client";

const achievements = [
  {
    id: 1,
    number: "120+",
    label: "Projects Delivered",
  },
  {
    id: 2,
    number: "80+",
    label: "Clients Served",
  },
  {
    id: 3,
    number: "25+",
    label: "Skilled Professionals",
  },
  {
    id: 4,
    number: "10+",
    label: "Years of Experience",
  },
];

export default function Achievements() {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-xs sm:text-sm bg-linear-to-r from-[#4F46E5] to-[#EF3A61] bg-clip-text text-transparent mb-2 tracking-[0.3em] sm:tracking-[0.5em] uppercase">
            Our Achievements
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0">
            Building Trust Through Proven Success
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto px-4 sm:px-0">
            At Syncton, our journey is defined by dedication, innovation, and measurable impact.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="text-center">
              <div className="mb-2 sm:mb-3">
                <span 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-[#4F46E5] to-[#EF3A61] bg-clip-text text-transparent"
                >
                  {achievement.number}
                </span>
              </div>
              <p className="text-gray-700 font-medium text-sm sm:text-base md:text-lg">
                {achievement.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}