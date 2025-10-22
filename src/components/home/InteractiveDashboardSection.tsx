import React, { useEffect, useState } from "react";

const dashboardItems = [
	{
		id: 1,
		title: "Interactive Dashboard",
		subtitle: "A smarter way to learn, track, and grow.",
		description:
			"The Ednux Student Dashboard is the central hub for every learner using the platform. Built for clarity, accessibility, and motivation, it brings together everything students need to stay organized, engaged, and in control of their learning journey.",
		features: [
			"Unified Learning Space",
			"Personalized Experience",
			"Real-Time Progress Tracking",
			"Smart Notifications & Reminders",
		],
		mockupImage: "/assets/images/dashboard-mockup.png",
	},
	{
		id: 2,
		title: "Classroom",
		subtitle: "Interactive learning environments.",
		description:
			"Join virtual classrooms with seamless video conferencing, interactive whiteboards, revisit missed live sessions, downloadable for offline access. Experience education that adapts to your learning style.",
		features: [
			"Virtual Classrooms",
			"Interactive Whiteboards",
			"Live Collaboration",
			"Recording & Playback",
		],
		mockupImage: "/assets/images/classroom-mockup.png",
	},
	{
		id: 3,
		title: "Messages and Notifications",
		subtitle: "Stay connected and informed.",
		description:
			"Communicate seamlessly with instructors and peers through our integrated messaging system. Receive smart notifications that keep you on track with your learning goals.",
		features: [
			"Direct Messaging",
			"Group Conversations",
			"Smart Notifications",
			"Assignment Reminders",
		],
		mockupImage: "/assets/images/messages-mockup.png",
	},
	{
		id: 4,
		title: "Courses",
		subtitle: "Comprehensive course management.",
		description:
			"Access all your enrolled courses in one place. Track progress, view materials, submit assignments, and engage with course content through our intuitive interface.",
		features: [
			"Course Materials",
			"Assignment Tracking",
			"Progress Monitoring",
			"Interactive Content",
		],
		mockupImage: "/assets/images/courses-mockup.png",
	},
	{
		id: 5,
		title: "Grades and Performance Trends",
		subtitle: "Track your academic progress.",
		description:
			"Monitor your academic performance with detailed analytics and visual trends. Identify strengths and areas for improvement with AI-powered insights.",
		features: [
			"Grade Analytics",
			"Performance Trends",
			"AI Insights",
			"Progress Reports",
		],
		mockupImage: "/assets/images/grades-mockup.png",
	},
	{
		id: 6,
		title: "Social Feed",
		subtitle: "Connect with your learning community.",
		description:
			"Engage with fellow learners, share insights, and participate in academic discussions. Build meaningful connections within your educational network.",
		features: [
			"Academic Discussions",
			"Peer Connections",
			"Study Groups",
			"Guided Learning Experience (LXP)",
		],
		mockupImage: "/assets/images/social-mockup.png",
	},
	{
		id: 7,
		title: "Global Learning Ecosystem (GLE)",
		subtitle: "Learn beyond boundaries.",
		description:
			"Connect with students and educators across Africa and beyond. Access diverse perspectives, collaborative projects, and cross-cultural learning opportunities.",
		features: [
			"Global Connections",
			"Cross-Cultural Learning",
			"Collaborative Projects",
			"International Perspectives",
		],
		mockupImage: "/assets/images/gle-mockup.png",
	},
	{
		id: 8,
		title: "Projects and Files",
		subtitle: "Organize your academic work.",
		description:
			"Manage all your projects, assignments, and files in one secure location. Collaborate on group projects and access your work from anywhere.",
		features: [
			"File Management",
			"Project Collaboration",
			"Cloud Storage",
			"Version Control",
		],
		mockupImage: "/assets/images/projects-mockup.png",
	},
];

const InteractiveDashboardSection = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % dashboardItems.length);
		}, 4000); // Change every 4 seconds

		return () => clearInterval(interval);
	}, []);

	const currentItem = dashboardItems[activeIndex];

	return (
		<div className="interactive-dashboard-section" id="how-it-works">
			<div className="container">
				{/* Left side - Mockup */}
				<div className="mockup-container">
					<div className="mockup-wrapper">
						<img
							src={currentItem.mockupImage}
							alt={currentItem.title}
							className="laptop-mockup"
						/>
					</div>
				</div>

				{/* Right side - Content */}
				<div className="content-container">
					<div className="content-card">
						<h1 className="main-title">{currentItem.title}</h1>
						<p className="subtitle">{currentItem.subtitle}</p>
						<p className="description">{currentItem.description}</p>

						<div className="features-grid">
							{currentItem.features.map((feature, index) => (
								<div key={index} className="feature-item">
									<div className="feature-icon-small">
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
											<circle cx="8" cy="8" r="3" fill="currentColor" />
										</svg>
									</div>
									<span>{feature}</span>
								</div>
							))}
						</div>
					</div>

					{/* Progress dots */}
					<div className="progress-dots">
						{dashboardItems.map((_, index) => (
							<button
								key={index}
								className={`dot ${index === activeIndex ? "active" : ""}`}
								onClick={() => setActiveIndex(index)}
							/>
						))}
					</div>
				</div>
			</div>

			<style jsx>{`
        .interactive-dashboard-section {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          padding: 100px 0;
          background: radial-gradient(ellipse 60% 70% at 20% 80%, rgba(70, 139, 249, 0.3) 0%, transparent 70%), #000000;
          overflow: hidden;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          min-height: 600px;
        }

        .mockup-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .mockup-wrapper {
          position: relative;
          padding: 40px;
          transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);
          transition: all 0.6s ease;
        }

        .laptop-mockup {
          width: 100%;
          max-width: 800px;
          height: auto;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .content-container {
          color: white;
          animation: slideInRight 0.8s ease forwards;
        }

        .content-card {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid transparent;
          background-clip: padding-box;
          border-radius: 32px;
          padding: 48px;
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          position: relative;
        }

        .content-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(255,255,255,0.8) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: exclude;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          z-index: -1;
        }

        .main-title {
          font-size: 48px;
          font-weight: 600;
          margin: 0 0 16px 0;
          background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: 'Questrial', sans-serif;
        }

        .subtitle {
          font-size: 24px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 24px 0;
          font-family: 'Questrial', sans-serif;
        }

        .description {
          font-size: 18px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin: 0 0 32px 0;
          font-family: 'Questrial', sans-serif;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
          font-family: 'Questrial', sans-serif;
        }

        .feature-icon-small {
          color: #f9f8fbff;
          flex-shrink: 0;
        }

        .progress-dots {
          display: flex;
          gap: 12px;
          margin-top: 40px;
          justify-content: center;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #4f46e5;
          transform: scale(1.2);
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 1200px) {
          .container {
            padding: 0 24px;
            gap: 60px;
          }
          
          .main-title {
            font-size: 40px;
          }
        }

        @media (max-width: 900px) {
          .container {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 0 20px;
          }
          
          .content-card {
            padding: 32px;
          }
          
          .main-title {
            font-size: 32px;
          }
          
          .subtitle {
            font-size: 20px;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .interactive-dashboard-section {
            padding: 60px 0;
          }
          
          .content-card {
            padding: 24px;
          }
          
          .main-title {
            font-size: 28px;
          }
          
          .mockup-wrapper {
            padding: 20px;
          }
        }
      `}</style>
		</div>
	);
};

export default InteractiveDashboardSection;