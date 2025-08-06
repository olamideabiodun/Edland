import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: (
      <Image
        src="/assets/images/AI-powered_study.png"
        alt="AI-Powered Study Assistance"
        width={38}
        height={38}
        style={{ width: 38, height: 38 }}
        priority
      />
    ),
    title: 'AI-Powered Study Assistance',
    desc: 'Enhance your learning with personalized AI study tools that adapt to your learning style. Get help with research, writing, and problem-solving tailored to your academic needs.'
  },
  {
    icon: (
      <Image
        src="/assets/images/interactive_learning.png"
        alt="Interactive Learning Materials"
        width={38}
        height={38}
        style={{ width: 38, height: 38 }}
        priority
      />
    ),
    title: 'Interactive Learning Materials',
    desc: 'Access engaging, multimedia learning resources designed for better comprehension and retention. Practice concepts with interactive exercises and simulations.'
  },
  {
    icon: (
      <Image
        src="/assets/images/custom_learning.png"
        alt="Custom Learning Paths"
        width={38}
        height={38}
        style={{ width: 38, height: 38 }}
        priority
      />
    ),
    title: 'Custom Learning Paths',
    desc: 'Follow personalized learning paths based on your goals, strengths, and areas for improvement. Our system adapts content recommendations to optimize your learning journey.'
  }
];

const AdvancedLearningToolsSection = () => {
  return (
    <div className="advanced-learning-section">
      {/* Left: Features Card */}
      <div className="features-card">
        {features.map(
          (
            feature: { icon: React.ReactNode; title: string; desc: string },
            idx: number
          ) => (
            <div key={feature.title} className="feature-item">
              <div className="feature-content">
                <div className="feature-title-border">
                  <span className="feature-icon">{feature.icon}</span>
                  <h3 className="feature-title">{feature.title}</h3>
                </div>
                <p className="feature-description">{feature.desc}</p>
              </div>
            </div>
          )
        )}
      </div>
      {/* Right: Title and Laptop Mockup */}
      <div className="right-content">
        <h1 className="main-title main-title-multiline">
          Advanced
          <br />
          Learning
          <br />
          Tools.
        </h1>
        <h1 className="main-title main-title-singleline">
          Advanced Learning Tools.
        </h1>
        <div className="mockup-container">
          <Image
            src="/assets/images/laptop_mock.png"
            alt="Laptop Mockup"
            className="laptop-mockup-image"
            width={480}
            height={320}
            priority
          />
        </div>
      </div>
      <style jsx>{`
        .advanced-learning-section {
          width: 100%;
          min-height: 700px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding: 80px 96px;
          background: radial-gradient(ellipse 70% 80% at 40% 50%, #6abcff 0%, transparent 80%);
          position: relative;
          overflow: hidden;
        }
        .features-card {
          flex: 1.2;
          margin-right: 48px;
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-radius: 33.6px;
          border: 2px solid transparent;
          box-shadow: 0 8px 32px 0 rgba(106, 188, 255, 0.15);
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

        .features-card::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(135deg, #6abcff, rgba(255, 255, 255, 0.8));
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask-composite: xor;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .feature-title-border {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 24px 8px 18px;
          border-radius: 30px;
          border: 1px solid transparent;
          margin-bottom: 12px;
          box-sizing: border-box;
          position: relative;
        }
        
        .feature-title-border::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 0.5px;
          background: linear-gradient(90deg, #ff5757, #8c52ff);
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask-composite: xor;
        }
        
        .feature-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          width: 38px;
          height: 38px;
          margin: 0 8px 0 0;
        }
        .feature-title {
          font-weight: 500;
          font-size: 22px;
          color: #232946;
          background: transparent;
          border-radius: 15px;
          padding: 0;
          margin: 0;
          font-family: 'Questrial', sans-serif;
          display: inline-block;
        }
        .feature-description {
          font-size: 15px;
          color: #232946;
          opacity: 0.85;
          line-height: 1.5;
          margin: 0;
          font-family: 'Questrial', sans-serif;
        }
        .right-content {
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
          margin-left: 0;
          line-height: 1.1;
          font-family: 'Questrial', sans-serif;
        }
        .main-title-singleline {
          display: none;
        }
        .mockup-container {
          position: relative;
          width: 480px;
          height: 320px;
          margin-top: 0;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
        }
        .laptop-mockup-image {
          width: 110%;
          height: 110%;
          object-fit: contain;
          display: block;
          transform: translate(20px, 40px);
        }
        /* Responsive Design */
        @media (max-width: 900px) {
          .advanced-learning-section {
            flex-direction: column;
            padding: 48px 16px;
            min-height: 600px;
          }
          .feature-title {
            font-size: 16px;
            white-space: nowrap;
            overflow: hidden;
            word-break: break-all;
            text-overflow: ellipsis;
            line-height: 1.2;
          }
          .features-card {
            margin-right: 0;
            min-width: 100%;
            padding: 24px 20px;
            min-height: 420px;
            gap: 28px;
          }
          .right-content {
            align-items: center;
            margin-top: 32px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .main-title-multiline {
            display: none;
          }
          .main-title-singleline {
            display: block;
            font-size: 26px;
            text-align: center;
            margin-left: 0;
            white-space: normal;
            word-break: break-word;
            line-height: 1.2;
            width: 100%;
            margin-right: 0;
            font-family: 'Questrial', sans-serif;
            font-weight: 500;
            color: #232946;
            margin-bottom: 24px;
          }
        }
        @media (max-width: 500px) {
          .main-title-singleline {
            font-size: 20px;
            padding: 0 2px;
            text-align: center;
            white-space: normal;
            word-break: break-word;
            width: 100%;
            margin: 0 auto 18px auto;
            display: block;
            align-items: center;
          }
        }
        .main-title-multiline {
          display: block;
        }
        .main-title-singleline {
          display: none;
        }
        @media (min-width: 901px) and (max-width: 1024px) {
          .advanced-learning-section {
            padding: 64px 32px;
          }
          .main-title {
            font-size: 40px;
          }
          .mockup-container {
            width: 350px;
            height: 210px;
          }
          .laptop-mockup-image {
            width: 110%;
            height: 110%;
            max-width: 380px;
            max-height: 200px;
            transform: translate(10px, 20px);
          }
          .features-card {
            padding: 32px 32px;
            min-height: 480px;
          }
        }
        @media (min-width: 1025px) and (max-width: 1200px) {
          .mockup-container {
            width: 420px;
            height: 280px;
          }
          .features-card {
            min-height: 520px;
          }
        }
        @media (min-width: 1200px) {
          .mockup-container {
            width: 480px;
            height: 320px;
          }
        }
      `}</style>
    </div>
  );
};

export default AdvancedLearningToolsSection;