"use client";
import { Button } from "./ui/button";
import Image from "next/image";

const industries = [
	{
		id: 1,
		title: "Retail / Ecommerce",
		description:
			"End-to-end solutions for online retail brands, marketplaces, and e-commerce platforms to boost sales and customer engagement.",
		icon: "/industries/ecommerece.svg",
	},
	{
		id: 2,
		title: "Education & e-learning",
		description:
			"Innovative platforms for schools, universities, and edtech startups to deliver engaging, accessible, and personalized learning experiences.",
		icon: "/industries/education.svg",
	},
	{
		id: 3,
		title: "Health & Fitness",
		description:
			"Digital health and fitness solutions for clinics, gyms, and wellness brands to improve patient care and user motivation.",
		icon: "/industries/health.svg",
	},
	{
		id: 4,
		title: "Logistics & Distribution",
		description:
			"Smart logistics and distribution platforms for efficient supply chain, delivery tracking, and fleet management.",
		icon: "/industries/deployment.svg",
	},
	{
		id: 5,
		title: "Real Estate",
		description:
			"Property management, listing, and real estate solutions to simplify buying, selling, and renting experiences.",
		icon: "/industries/realestate.svg",
	},
	{
		id: 6,
		title: "Travel & Hospitality",
		description:
			"Digital solutions for travel agencies, hotels, and hospitality businesses to enhance guest experiences and streamline operations.",
		icon: "/industries/realestate.svg",
	},
	{
		id: 7,
		title: "Food & Restaurant",
		description:
			"Smart solutions for restaurants, food delivery, and supply chain management to optimize operations and customer experience.",
		icon: "/industries/health.svg",
	},
	{
		id: 8,
		title: "On Demand Solutions",
		description:
			"Custom on-demand platforms for services, delivery, and instant access to products and solutions.",
		icon: "/industries/saas.svg",
	},
];

export default function Industries() {
	return (
		<section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-8 sm:mb-10 md:mb-12">
					<p className="text-xs sm:text-sm bg-linear-to-r from-[#4F46E5] to-[#3B82F6] bg-clip-text text-transparent mb-2 tracking-[0.3em] sm:tracking-[0.5em] uppercase">
						Industries
					</p>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0">
						Innovating Across Sectors
					</h2>
					<p className="text-sm sm:text-base text-gray-600 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto px-4 sm:px-0">
						synctom partners with startups, enterprises, and global brands
						across multiple industries to craft scalable, high-performing
						digital solutions that drive measurable results.
					</p>
				</div>

				{/* Industries Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 relative">
					{/* First Row */}
					<div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
						<div className="mb-3 sm:mb-4 w-6 h-6 sm:w-8 sm:h-8 relative">
							<Image
								src={industries[0].icon}
								alt={industries[0].title}
								width={32}
								height={32}
								className="w-full h-full"
								style={{
									filter: "url(#gradient-filter)",
								}}
							/>
							<svg width="0" height="0">
								<defs>
									<linearGradient
										id="gradient-filter"
										x1="0%"
										y1="0%"
										x2="100%"
										y2="100%"
									>
										<stop offset="0%" stopColor="#0383CA" />
										<stop offset="100%" stopColor="#EF3A61" />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
							{industries[0].title}
						</h3>
						<p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
							{industries[0].description}
						</p>
					</div>

					<div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
						<div className="mb-3 sm:mb-4 w-6 h-6 sm:w-8 sm:h-8 relative">
							<Image
								src={industries[1].icon}
								alt={industries[1].title}
								width={32}
								height={32}
								className="w-full h-full"
							/>
						</div>
						<h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
							{industries[1].title}
						</h3>
						<p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
							{industries[1].description}
						</p>
					</div>

					<div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
						<div className="mb-3 sm:mb-4 w-6 h-6 sm:w-8 sm:h-8 relative">
							<Image
								src={industries[2].icon}
								alt={industries[2].title}
								width={32}
								height={32}
								className="w-full h-full"
							/>
						</div>
						<h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
							{industries[2].title}
						</h3>
						<p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
							{industries[2].description}
						</p>
					</div>

					{/* Second Row with Center Image */}
					<div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
						<div className="mb-3 sm:mb-4 w-6 h-6 sm:w-8 sm:h-8 relative">
							<Image
								src={industries[3].icon}
								alt={industries[3].title}
								width={32}
								height={32}
								className="w-full h-full"
							/>
						</div>
						<h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
							{industries[3].title}
						</h3>
						<p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
							{industries[3].description}
						</p>
					</div>

					{/* Center Globe - Hidden on mobile, visible on lg */}
					<div className="hidden lg:flex items-center justify-center">
						<div className="relative w-45 h-45 xl:w-50 xl:h-50">
							<img
								src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGI2Y2Z4NGl5cjh6MWY3dGV2OWxhc3hhb3JnbWc5bDlkZ2VuZjYwaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/vTUs60YG8Cdgl3s0Ky/giphy.gif"
               
                
								className="pointer-events-none"
							/>
						</div>
					</div>

					<div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
						<div className="mb-3 sm:mb-4 w-6 h-6 sm:w-8 sm:h-8 relative">
							<Image
								src={industries[4].icon}
								alt={industries[4].title}
								width={32}
								height={32}
								className="w-full h-full"
							/>
						</div>
						<h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
							{industries[4].title}
						</h3>
						<p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
							{industries[4].description}
						</p>
					</div>

					{/* Third Row */}
					<div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
						<div className="mb-3 sm:mb-4 w-6 h-6 sm:w-8 sm:h-8 relative">
							<Image
								src={industries[5].icon}
								alt={industries[5].title}
								width={32}
								height={32}
								className="w-full h-full"
							/>
						</div>
						<h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
							{industries[5].title}
						</h3>
						<p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
							{industries[5].description}
						</p>
					</div>

					<div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
						<div className="mb-3 sm:mb-4 w-6 h-6 sm:w-8 sm:h-8 relative">
							<Image
								src={industries[6].icon}
								alt={industries[6].title}
								width={32}
								height={32}
								className="w-full h-full"
							/>
						</div>
						<h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
							{industries[6].title}
						</h3>
						<p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
							{industries[6].description}
						</p>
					</div>

					<div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
						<div className="mb-3 sm:mb-4 w-6 h-6 sm:w-8 sm:h-8 relative">
							<Image
								src={industries[7].icon}
								alt={industries[7].title}
								width={32}
								height={32}
								className="w-full h-full"
							/>
						</div>
						<h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
							{industries[7].title}
						</h3>
						<p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
							{industries[7].description}
						</p>
					</div>
				</div>

				{/* View All Industries Button */}
				<div className="text-center">
					<Button
						variant={"default"}
						className="px-6 sm:px-8 py-3 text-sm sm:text-base"
					>
						View all Industries
					</Button>
				</div>
			</div>
		</section>
	);
}