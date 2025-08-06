import Image from "next/image";

const features = [
	{
		icon: (
			// Social Networking SVG
			<svg
				width="38"
				height="38"
				viewBox="0 0 38 38"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx="19"
					cy="19"
					r="18"
					stroke="#232946"
					strokeWidth="2"
					fill="none"
				/>
				<path
					d="M19 12a5 5 0 100 10 5 5 0 000-10z"
					stroke="#232946"
					strokeWidth="2"
					fill="none"
				/>
				<path
					d="M10 28c0-5 18-5 18 0"
					stroke="#232946"
					strokeWidth="2"
					fill="none"
				/>
			</svg>
		),
		title: "Social Networking",
		desc: "Connect with classmates and colleagues in a professional environment built for collaboration and knowledge sharing.",
	},
	{
		icon: (
			// Interactive Virtual Classrooms icon
			<svg
				width="38"
				height="38"
				viewBox="0 0 38 38"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="2"
					y="8"
					width="34"
					height="22"
					rx="3"
					stroke="#232946"
					strokeWidth="2"
					fill="none"
				/>
				<circle
					cx="19"
					cy="15"
					r="3"
					stroke="#232946"
					strokeWidth="2"
					fill="none"
				/>
				<path
					d="M13 25c0-3 12-3 12 0"
					stroke="#232946"
					strokeWidth="2"
					fill="none"
				/>
				<rect x="8" y="32" width="22" height="2" fill="#232946" />
				<rect x="16" y="30" width="6" height="6" fill="#232946" />
			</svg>
		),
		title: "Interactive Virtual Classrooms",
		desc: "Engage in real-time collaborative learning sessions with classmates and educators. Our platform supports interactive discussions, group activities, and live presentations.",
	},
	{
		icon: (
			// Peer Review System icon
			<svg
				width="38"
				height="38"
				viewBox="0 0 38 38"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="3"
					y="8"
					width="12"
					height="16"
					rx="2"
					stroke="#232946"
					strokeWidth="2"
					fill="none"
				/>
				<rect
					x="23"
					y="8"
					width="12"
					height="16"
					rx="2"
					stroke="#232946"
					strokeWidth="2"
					fill="none"
				/>
				<path d="M15 16h8" stroke="#232946" strokeWidth="2" />
				<path d="M19 12v8" stroke="#232946" strokeWidth="2" />
				<circle
					cx="9"
					cy="30"
					r="3"
					stroke="#232946"
					strokeWidth="2"
					fill="none"
				/>
				<circle
					cx="29"
					cy="30"
					r="3"
					stroke="#232946"
					strokeWidth="2"
					fill="none"
				/>
			</svg>
		),
		title: "Peer Review System",
		desc: "Improve your work through structured peer feedback. Our system facilitates anonymous reviews and constructive feedback exchanges between students.",
	},
];

const ProductivitySection = () => {
	return (
		<div className="productivity-section" id="productivity-section">
			{/* Left: Text + Mockup */}
			<div className="left-content">
				<h1 className="main-title">Boost Your Productivity!</h1>
				<div className="mockup-container">
					{/* Ring color image behind mockup */}
					<Image
						src="/assets/images/ring_color.png"
						alt="Ring Color"
						className="ring-image"
						width={336}
						height={336}
						loading="lazy"
					/>
					<Image
						src="/assets/images/mockup_2.png"
						alt="Social Feed Mockup"
						className="mockup-image"
						width={336}
						height={336}
						loading="lazy"
					  />
				</div>
			</div>

			{/* Right: Features Card */}
			<div className="features-card">
				{features.map((feature, idx) => (
					<div key={feature.title} className="feature-item">
						<div className="feature-icon">{feature.icon}</div>
						<div className="feature-content">
							<h3 className="feature-title">{feature.title}</h3>
							<p className="feature-description">{feature.desc}</p>
						</div>
					</div>
				))}
			</div>

			<style jsx>{`
        .productivity-section {
          width: 100%;
          min-height: 600px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 80px 96px;
          background: linear-gradient(120deg, #fafdff 0%, #d2eaff 100%);
          position: relative;
          overflow: hidden;
        }
        
        .left-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
        }
        
        .main-title {
          font-size: 54px;
          font-weight: 500;
          color: #232946;
          margin-bottom: 24px;
          text-align: left;
          margin-left: 70px;
          line-height: 1.1;
          font-family: 'Questrial', sans-serif;
        }
        
        .mockup-container {
          position: relative;
          width: 480px;
          height: 480px;
          margin-top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .ring-image {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 336px !important;
          height: 336px !important;
          z-index: 1;
          opacity: 0.9;
          pointer-events: none;
          object-fit: contain;
        }
        
        .mockup-image {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 600px !important;
          height: auto !important;
          object-fit: contain;
          border-radius: 0;
          box-shadow: none;
          background: none;
          z-index: 2;
          max-width: 600px;
        }
        
        .features-card {
          flex: 1.2;
          margin-left: 48px;
          background: linear-gradient(120deg, #eaf6ff 60%, #b3e0ff 100%);
          border-radius: 33.6px;
          border: 2.5px solid #e3f0ff;
          box-shadow: 0 8px 32px 0 rgba(80,100,180,0.10);
          padding: 40px 48px;
          display: flex;
          flex-direction: column;
          gap: 36px;
          min-width: 420px;
          max-width: 600px;
          min-height: 540px;
          justify-content: center;
          align-items: flex-start;
          position: relative;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        
        .feature-icon {
          margin-top: 4px;
          flex-shrink: 0;
        }
        
        .feature-title {
          font-weight: 500;
          font-size: 20px;
          color: #232946;
          margin-bottom: 4px;
          font-family: 'Questrial', sans-serif;
        }
        
        .feature-description {
          font-size: 15px;
          color: #232946;
          opacity: 0.85;
          line-height: 1.5;
          margin: 0;
          font-family: 'Questrial', sans-serif;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .productivity-section {
            flex-direction: column;
            padding: 48px 16px;
            min-height: 600px;
          }
          
          .left-content {
            align-items: center;
            margin-bottom: 48px;
          }
          
          .main-title {
            font-size: 32px;
            text-align: center;
            white-space: nowrap;
            margin-left: 0;
          }
          
          .mockup-container {
            width: 280px;
            height: 280px;
          }
          
          .ring-image {
            width: 196px !important; /* 70% of 280px */
            height: 196px !important;
          }
          
          .mockup-image {
            width: 350px !important; /* 125% of 280px */
            max-width: 350px;
          }
          
          .features-card {
            margin-left: 0;
            min-width: 100%;
            padding: 24px 20px;
            min-height: 420px;
            gap: 28px;
          }
          
          .feature-title {
            font-size: 18px;
          }
          
          .feature-description {
            font-size: 14px;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .productivity-section {
            padding: 64px 32px;
          }
          
          .main-title {
            font-size: 40px;
          }
          
          .mockup-container {
            width: 350px;
            height: 350px;
          }
          
          .ring-image {
            width: 245px !important; /* 70% of 350px */
            height: 245px !important;
          }
          
          .mockup-image {
            width: 437px !important; /* 125% of 350px */
            max-width: 437px;
          }
          
          .features-card {
            padding: 32px 32px;
            min-height: 480px;
          }
        }
        
        @media (min-width: 1025px) and (max-width: 1200px) {
          .mockup-container {
            width: 420px;
            height: 420px;
          }
          
          .ring-image {
            width: 294px !important; /* 70% of 420px */
            height: 294px !important;
          }
          
          .mockup-image {
            width: 525px !important; /* 125% of 420px */
            max-width: 525px;
          }
          
          .features-card {
            min-height: 520px;
          }
        }
        
        @media (min-width: 1200px) {
          .mockup-container {
            width: 480px;
            height: 480px;
          }
          
          .ring-image {
            width: 336px !important; /* 70% of 480px */
            height: 336px !important;
          }
          
          .mockup-image {
            width: 600px !important; /* 125% of 480px */
            max-width: 600px;
          }
        }
      `}</style>
		</div>
	);
};

import AdvancedLearningToolsSection from "./AdvancedLearningToolsSection";

const ProductivityWithAdvancedSection = () => (
	<>
		<ProductivitySection />
		<AdvancedLearningToolsSection />
	</>
);

export default ProductivityWithAdvancedSection;