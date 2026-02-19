import CardSwap, { Card } from "../common/CardSwap";
import Squares from "../common/Squares";

const CardLMS = () => {
    return (
        <>
            <div className="card-lms-container">
                {/* Content on top */}
                <div className="card-lms-content">
                    {/* Left side text */}
                    <div className="card-lms-text">
                        <h2 style={{ 
                            fontSize: '36px', 
                            fontWeight: '600', 
                            marginBottom: '16px', 
                            color: '#0f172a',
                            fontFamily: "'Questrial', sans-serif"
                        }}>
                            The Social LMS That Understands Your True Potential
                        </h2>
                        <p style={{ 
                            fontSize: '16px', 
                            lineHeight: '1.6', 
                            color: '#64748b',
                            fontFamily: "'Questrial', sans-serif"
                        }}>
                            Ednux is built on a powerful feedback loop. We don't just manage your learning materials, we analyze your complete learning process to provide precise, actionable insights.
                        </p>
                        <h3 style={{ 
                            fontSize: '19px', 
                            fontWeight: '600', 
                            marginBottom: '3px',
                            marginTop: '16px',
                            color: '#0f172a',
                            fontFamily: "'Questrial', sans-serif"
                        }}>
                            The Feedback You Need
                        </h3>
                        <p style={{ 
                            fontSize: '16px', 
                            lineHeight: '1.6', 
                            color: '#64748b',
                            fontFamily: "'Questrial', sans-serif"
                        }}>
                        Your interactions are a key performance indicator. Our system looks beyond simple participation to understand the quality of your collaboration:
                        <br/><br/>
                        <strong>Social Learning:</strong> We analyze your engagement in discussion forums, the relevance of your peer reviews, and how you contribute to group projects.
                        <br/>
                        <strong>Teamwork Metrics: </strong> The system identifies who is leading discussions, who is providing supportive data, and how effectively your team resolves problems, turning social activity into a measurable skill.
                        <br/>
                        <strong>Content Interaction:</strong> The platform notes how you move through modules, which videos you re-watch, and which topics you master quickly.
                        <br/>
                        <strong>Assessment Performance: </strong> We analyze your answers on quizzes and assignments to pinpoint specific knowledge gaps, not just your final score.
                        </p>

                        <p style={{ 
                            fontSize: '16px', 
                            lineHeight: '1.6', 
                            color: '#64748b',
                            fontFamily: "'Questrial', sans-serif"
                        }}>
                        The data from your collaboration and study habits is fed into our Interpretable ML engine.
                        Instead of a generic "Good job" or "Try harder," our AI provides specific, targeted feedback.
                        </p>
                    
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-gray-700">
                                <strong>Before:</strong> "You got a B- on your project."
                            </p>
                            <p className="text-gray-700">
                                <br/>
                                <strong>With Ednux: </strong>"Your Conceptual Design score was 92%, but your Technical Compliance score was 65%. You are struggling with regulatory codes. Here is a 10-minute module on that specific topic to practice."
                            </p>
                        </div>
                        <br/>
                        <p style={{ 
                            fontSize: '16px', 
                            lineHeight: '1.6', 
                            color: '#64748b',
                            fontFamily: "'Questrial', sans-serif"
                        }}>
                            This process ensures you spend zero time re-learning what you already know and focus 100% of your effort on the exact areas you need to improve, allowing you to master skills faster and more effectively.
                        </p>
                    </div>
                    
                    {/* Right side CardSwap */}
                    <div className="card-lms-cards">
                        <CardSwap
                            cardDistance={60}
                            verticalDistance={70}
                            delay={5000}
                            pauseOnHover={false}
                        >
                            <Card>
                                <div className="card-content">
                                    <img 
                                        src="/assets/images/dash_card-1.png" 
                                        alt="Learning Analytics" 
                                        className="card-image"
                                    />
                                    <div className="card-text">
                                        <h3>Classroom</h3>
                                        <p>Engage with peers, manage your virtual classes and learning sessions</p>
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card-content">
                                    <img 
                                        src="/assets/images/dash_card-2.png" 
                                        alt="AI Feedback" 
                                        className="card-image"
                                    />
                                    <div className="card-text">
                                        <h3>Grades & Competency</h3>
                                        <p>Track your academic performance and skill mastery</p>
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card-content">
                                    <img 
                                        src="/assets/images/dash_card-3.png" 
                                        alt="Personalized Learning" 
                                        className="card-image"
                                    />
                                    <div className="card-text">
                                        <h3>Performance Analysis</h3>
                                        <p>This tab provides a detailed breakdown of your submission's performance</p>
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card-content">
                                    <img 
                                        src="/assets/images/dash_card-4.png" 
                                        alt="Personalized Learning" 
                                        className="card-image"
                                    />
                                    <div className="card-text">
                                        <h3>Adaptive Feedback</h3>
                                        <p>Get specific, targeted feedback on your performance</p>
                                    </div>
                                </div>
                            </Card>
                        </CardSwap>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .card-lms-container {
                    position: relative;
                    width: 100%;
                    min-height: 600px;
                    overflow: hidden;
                    background: #ffffff;
                    background-image: 
    linear-gradient(to right, rgba(229, 231, 235, 0.5) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(229, 231, 235, 0.5) 1px, transparent 1px);
background-size: 40px 40px;
background-position: top right;
                }

                .card-lms-content {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    gap: 48px;
                    max-width: 1240px;
                    margin: 0 auto;
                    padding: 60px 24px;
                    min-height: 600px;
                }

                .card-lms-text {
                    flex: 1;
                    padding-right: 32px;
                }

                .card-lms-cards {
                    flex: 1;
                    position: relative;
                    height: 600px;
                }

                .card-content {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    background: #ffffff;
                    border-radius: 12px;
                    border: 1px solid #3b82f6;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                    overflow: hidden;
                }

                .card-image {
                    width: 100%;
                    height: 70%;
                    object-fit: fit;
                    background: #f3f4f6;
                }

                .card-text {
                    padding: 20px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .card-text h3 {
                    font-size: 20px;
                    font-weight: 600;
                    color: #0f172a;
                    margin: 0 0 8px 0;
                    font-family: 'Questrial', sans-serif;
                }

                .card-text p {
                    font-size: 14px;
                    line-height: 1.5;
                    color: #64748b;
                    margin: 0;
                    font-family: 'Questrial', sans-serif;
                }

                @media (max-width: 1024px) {
                    .card-lms-content {
                        flex-direction: column;
                        gap: 24px;
                        min-height: auto;
                    }
                    
                    .card-lms-text {
                        padding-right: 0;
                        width: 100%;
                    }
                    
                    .card-lms-cards {
                        width: 100%;
                        height: 500px;
                        margin-top: 440px;
                    }
                }

                @media (max-width: 768px) {
                    .card-lms-content {
                        padding: 40px 16px;
                    }
                    
                    .card-lms-text h2 {
                        font-size: 28px !important;
                    }
                    
                    .card-lms-text h3 {
                        font-size: 18px !important;
                    }
                    
                    .card-lms-text p {
                        font-size: 14px !important;
                    }
                    
                    .card-lms-cards {
                        height: 400px;
                        margin-top: 350px;
                    }
                    
                    .card-text h3 {
                        font-size: 18px;
                    }
                    
                    .card-text p {
                        font-size: 13px;
                    }
                }

                @media (max-width: 480px) {
                    .card-lms-content {
                        padding: 32px 12px;
                    }
                    
                    .card-lms-text h2 {
                        font-size: 24px !important;
                    }
                    
                    .card-lms-cards {
                        height: 350px;
                        margin-top: 220px;
                    }
                    
                    .card-text {
                        padding: 16px;
                    }
                    
                    .card-text h3 {
                        font-size: 18px;
                    }
                    
                    .card-text p {
                        font-size: 13px;
                    }
                }
            `}</style>
        </>
    );
};

export default CardLMS;
