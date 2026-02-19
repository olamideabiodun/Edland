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
          padding: 120px 64px;
          background:
            radial-gradient(circle at 20% 30%, rgb(237, 239, 248) 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, rgba(226, 244, 253, 0.94) 0%, transparent 55%),
            linear-gradient(180deg, #90a7da 0%, #a2b2ec 45%, #5b6899 100%);

          position: relative;
          overflow: hidden;
        }
        
        .left-content {
          flex: unset;
          width: 520px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
        }
        
        .main-title {
          font-size: 64px;
          font-weight: 600;
          color: #232946;
          margin-bottom: 32px;
          margin-top: -50px;
          text-align: left;
          margin-left: 70px;
          line-height: 1.05;
          font-family: 'Questrial', sans-serif;
          white-space: nowrap;
          width: max-content;
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
          width: 360px !important;
          height: 360px !important;
          z-index: 1;
          opacity: 0.8;
          filter: blur(1.5px);
          pointer-events: none;
          object-fit: contain;
        }
        
        .features-card {
          flex: unset;
          width: 520px;
          margin-left: 32px;
          margin-top: 120px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 32px;
          border: 1px solid rgba(0,0,0,0.05);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          padding: 56px;
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
          font-weight: 600;
          font-size: 20px;
          color: #0b2e5c;
          margin-bottom: 4px;
          font-family: 'Questrial', sans-serif;
        }
        
        .feature-description {
          font-size: 15px;
          color: rgba(3, 7, 12, 0.85);
          opacity: 0.85;filter: blur(0px);
          line-height: 1.6;
          margin: 0;
          font-family: 'Questrial', sans-serif;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .productivity-section {
            flex-direction: column;
            padding: 80px 16px;
            min-height: 600px;
          }
          
          .left-content {
            align-items: center;
            margin-bottom: 16px;
          }
          
          .main-title {
            font-size: 36px;
            font-weight: 600;
            text-align: center;
            white-space: nowrap;
            background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: 'Questrial', sans-serif;
            margin-bottom: 20px;
            line-height: 1.15;
          }
          
          .mockup-container {
            width: 280px;
            height: 280px;
          }
          
          .ring-image {
            width: 196px !important; /* 70% of 280px */
            height: 196px !important;
          }
          
          .features-card {
            margin-left: 0;
            min-width: 100%;
            padding: 28px 24px;
            min-height: 420px;
            gap: 28px;
            margin-top: -8px;
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