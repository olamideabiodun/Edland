import Image from "next/image";


const High_integrity = () => {
	return (
		<section className="solve-section" id="high-integrity-section">

			{/* Features Grid Section */}
			<div className="features-grid-section">
				<div className="features-container">
					<p className="features-title">High-Integrity Assessment and Personalized Learning</p>
					<div className="features-grid">
						<div className="feature-card feature-card-small">
							<div className="feature-card-bg"></div>
							<div className="feature-card-content">
								<div className="feature-text">
									<p className="feature-title-text">Verifiable Competency Mastery (CBE) </p>
									<p className="feature-description">The is an analytics interface that translates a user's performance data into a set of objective, auditable competency scores.

Instead of displaying traditional grades, this dashboard visualizes a user's proficiency in specific skills.

It serves as the user's primary interface for tracking their skill development, allowing users to provably demonstrate their mastery to third parties.</p>
								</div>
							</div>
							<div className="feature-card-outline"></div>
						</div>
						
						<div className="feature-card feature-card-small">
							<div className="feature-card-bg"></div>
							<div className="feature-card-content">
								<div className="feature-text">
									<p className="feature-title-text">Adaptive Social Learning Loop</p>
									<p className="feature-description">Ednux's core pedagogical and technological mechanism that continuously gathers data from user interactions to personalize content, guide learning paths.

It is a closed-loop system where social interaction is treated as a critical data source for adaptation and assessment, effectively moving the learning environment beyond static content delivery.</p>
								</div>
							</div>
							<div className="feature-card-outline"></div>
						</div>
						
						<div className="feature-card feature-card-small">
							<div className="feature-card-bg"></div>
							<div className="feature-card-content">
								<div className="feature-text">
									<p className="feature-title-text">Gamified Engagement</p>
									<p className="feature-description">We integrate personalized gamification (points, badges, quests) that adapt to individual motivations, making the learning journey more engaging and encouraging continuous risk-taking and self-correction without penalty.</p>
								</div>
							</div>
							<div className="feature-card-outline"></div>
						</div>
					</div>
				</div>
			</div>
			<div className="standalone-hero">
				<img src="/assets/images/Cbe_3.png" alt="CBE Dashbaord" className="standalone-img" />
			</div>
			

			<style jsx>{`
				.solve-section {
					width: 100%;
					padding: 45px 0 20px ;
					background: #f9fafb;
					position: relative;
				}



				/* Features Grid Section */
				.features-grid-section {
					background: #f9fafb;
					padding: 40px 0 20px 0;
					margin-bottom: 20px;
					width: 100%;
				}
				
				.features-container {
					width: 100%;
					max-width: 1240px;
					margin: 0 auto;
					padding: 0 24px; 
				}
				

				
				.features-title {
					margin: 8px auto 0;
					max-width: 512px;
					text-align: center;
					font-size: 36px;
					font-weight: 600;
					line-height: 1.1;
					color: #0f172a;
					font-family: 'Questrial', sans-serif;
				}
				
				.features-grid {
					margin-top: 40px;
					margin-bottom: 40px; 
					display: grid;
					gap: 16px;
					grid-template-columns: 1fr 1fr 1fr;
					grid-template-rows: 1fr;
				}
				
				.feature-card {
					position: relative;
					border-radius: 12px;
					overflow: hidden;
					transition: transform 0.3s ease, box-shadow 0.3s ease;
				}
				
				.feature-card:hover {
					transform: translateY(-4px);
					box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
				}
				

				.feature-card-small {
					grid-row: span 1;
				}
				
				.feature-card-bg {
					position: absolute;
					inset: 1px;
					border-radius: 12px;
					background: white;
				}
				
				.feature-card-content {
					position: relative;
					display: flex;
					flex-direction: column;
					height: 100%;
					overflow: hidden;
					border-radius: 12px;
				}
				
				.feature-text {
					padding: 32px 32px 12px;
				}
				
				.feature-title-text {
					margin: 8px 0;
					font-size: 18px;
					font-weight: 500;
					line-height: 1.2;
					color: #0f172a;
					font-family: 'Questrial', sans-serif;
				}
				
				.feature-description {
					margin: 8px 0;
					max-width: 512px;
					font-size: 14px;
					line-height: 1.5;
					color: #64748b;
					font-family: 'Questrial', sans-serif;
				}
				
				.feature-image-container {
					position: relative;
					min-height: 480px;
					width: 100%;
					flex-grow: 1;
					margin: 0 auto;
					max-width: 384px;
				}
				
				.feature-image-wrapper {
					position: absolute;
					inset: 40px 40px 0;
					overflow: hidden;
					border-radius: 48px 0 0 0;
					border: 3px solid #374151;
					border-bottom: 3px solid #374151;
					border-top: 3px solid #374151;
					background: #111827;
					box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
				}
				
				.feature-image {
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: top;
				}
				
				.feature-image-container-small {
					display: flex;
					flex: 1;
					align-items: center;
					justify-content: center;
					padding: 0;
				}
				
				.feature-image-small {
					width: 100%;
					max-width: 320px;
				}
				

				
				.feature-code-container-small {
					display: flex;
					flex: 1;
					align-items: center;
					justify-content: center;
					padding: 32px;
				}
				

				
				.code-window-small {
					width: 100%;
					max-width: 320px;
					overflow: hidden;
					border-radius: 8px;
					background: #111827;
					box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
					outline: 1px solid rgba(255, 255, 255, 0.1);
				}
				

				
				.code-tabs-small {
					display: flex;
					background: #111827;
					outline: 1px solid rgba(255, 255, 255, 0.05);
				}
				
				.code-tab {
					border-right: 1px solid rgba(255, 255, 255, 0.1);
					border-bottom: 1px solid rgba(255, 255, 255, 0.2);
					background: rgba(255, 255, 255, 0.05);
					padding: 8px 16px;
					font-size: 14px;
					line-height: 1.5;
					font-weight: 500;
					color: #9ca3af;
					font-family: 'Questrial', sans-serif;
				}
				
				.code-tab-small {
					border-right: 1px solid rgba(255, 255, 255, 0.1);
					border-bottom: 1px solid rgba(255, 255, 255, 0.2);
					background: rgba(255, 255, 255, 0.05);
					padding: 6px 12px;
					font-size: 12px;
					line-height: 1.4;
					font-weight: 500;
					color: #9ca3af;
					font-family: 'Questrial', sans-serif;
				}
				
				.code-tab.active {
					color: white;
					background: rgba(255, 255, 255, 0.1);
				}
				
				.code-tab-small.active {
					color: white;
					background: rgba(255, 255, 255, 0.1);
				}
				

				
				.code-content-small {
					padding: 16px;
				}
				
				.code-block {
					color: #e5e7eb;
					font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
					font-size: 14px;
					line-height: 1.5;
					margin: 0;
					white-space: pre-wrap;
				}
				
				.code-block-small {
					color: #e5e7eb;
					font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
					font-size: 12px;
					line-height: 1.4;
					margin: 0;
					white-space: pre-wrap;
				}
				
				.feature-card-outline {
					pointer-events: none;
					position: absolute;
					inset: 1px;
					border-radius: 12px;
					box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
					outline: 1px solid rgba(0, 0, 0, 0.05);
				}

				/* Standalone image */
				.standalone-hero {
					width: 100%;
					margin: 48px auto 0;
					padding: 0 24px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				
				.standalone-img {
					width: 70%;
					height: auto;
					display: block;
					border-radius: 18px;
				}

				@media (max-width: 1024px) {
					.features-container { padding: 0 16px; }
					.features-grid { 
						grid-template-columns: 1fr; 
						grid-template-rows: auto;
						gap: 12px;
					}
					.features-title { font-size: 28px; }
					.feature-text { padding: 20px; }
					.feature-title-text { font-size: 16px; }
					.feature-description { font-size: 13px; }
					.feature-image-container { min-height: 0; }
					.feature-code-container-small { padding: 16px; }
					.code-window-small { max-width: 100%; }
					.standalone-hero { 
						margin: -16px auto 0;
						padding: 0 16px 32px;
					}
					.standalone-img { 
						width: 100%;
						border-radius: 12px;
					}
				}
				
				@media (max-width: 768px) {
					.features-title { font-size: 24px; }
					.feature-text { padding: 16px; }
					.feature-code-container-small { padding: 12px; }
					.standalone-hero { 
						margin: -12px auto 0;
						padding: 0 12px 24px;
					}
				}
			`}</style>
		</section>
	);
};

export default High_integrity;