import React from 'react';

const WorkspaceToolsSection = () => (
  <div className="workspace-tools-section">
    <div className="workspace-tools-bg" />
    <div className="workspace-tools-card">
      <div className="workspace-tools-header">
        <span className="workspace-tools-icon">
          <img
            src="/assets/images/workspace_icon.png"
            alt="Workspace Tools"
            width={40}
            height={40}
            className="workspace-icon-img"
            loading="eager"
          />
        </span>
        <h2 className="workspace-tools-title">Workspace Tools</h2>
      </div>
      <div className="workspace-tools-grid">
        <div className="workspace-tool-item">
          <h3>Project Planning & Scheduling</h3>
          <p>
            Create comprehensive project plans with milestones, deadlines, and
            task assignments. Our intuitive interface makes complex project
            management simple for students.
          </p>
        </div>
        <div className="workspace-tool-item">
          <h3>Team Collaboration Tools</h3>
          <p>
            Work seamlessly with team members on group projects. Assign roles,
            track contributions, and maintain clear communication throughout the
            project lifecycle.
          </p>
        </div>
        <div className="workspace-tool-item">
          <h3>Progress Tracking</h3>
          <p>
            Monitor individual and team progress with visual dashboards and
            automated reminders. Stay on schedule with intelligent task
            prioritization based on deadlines.
          </p>
        </div>
        <div className="workspace-tool-item">
          <h3>Integration with Academic Calendar</h3>
          <p>
            Sync project deadlines with your academic calendar to manage your
            workload efficiently. Receive smart scheduling suggestions to
            balance project work with other coursework.
          </p>
        </div>
        <div className="workspace-tool-item">
          <h3>Knowledge Sharing Tools</h3>
          <p>
            Easily share insights, resources, and study materials with your
            academic network. Highlight key concepts and annotate shared content
            for better understanding.
          </p>
        </div>
        <div className="workspace-tool-item">
          <h3>Cross-Reference System</h3>
          <p>
            Connect concepts across different courses and subjects for deeper
            understanding. Our platform highlights relationships between topics
            to build comprehensive knowledge.
          </p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .workspace-tools-section {
        width: 100vw;
        position: relative;
        z-index: 2;
        min-height: 600px;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        padding: 80px 0 80px 0;
        box-sizing: border-box;
        background: radial-gradient(ellipse 60% 70% at 20% 80%, rgba(70, 139, 249, 0.3) 0%, transparent 70%), #000000;
        overflow: hidden;
      }
      
      .workspace-tools-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        background: radial-gradient(ellipse 60% 70% at 50% 30%, rgba(106, 188, 255, 0.15) 0%, transparent 70%);
        z-index: 0;
      }
      
      .workspace-tools-card {
        position: relative;
        z-index: 1;
        border-radius: 32px;
        background: rgba(255,255,255,0.08);
        border: 2px solid transparent;
        background-clip: padding-box;
        padding: 56px 48px 48px 48px;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        max-width: 1200px;
        margin: 0 auto;
        box-sizing: border-box;
      }
      
      .workspace-tools-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: inherit;
        padding: 2px;
        background: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(13, 12, 12, 0.64) 50%, rgba(255, 255, 255, 0.85) 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: exclude;
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
        z-index: -1;
      }
      
      .workspace-tools-header {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 40px;
        justify-content: center;
      }
      
      .workspace-tools-icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .workspace-icon-img {
        width: 64px;
        height: 64px;
        filter: brightness(0) invert(1);
      }
      
      .workspace-tools-title {
        font-size: 48px;
        font-weight: 500;
        color: #ffffff;
        font-family: 'Questrial', sans-serif;
        margin: 0;
        text-align: center;
      }
      
      .workspace-tools-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px 36px;
      }
      
      .workspace-tool-item {
        background: none;
        border-radius: 18px;
        padding: 0;
      }
      
      .workspace-tool-item h3 {
        font-size: 24px;
        font-weight: 600;
        color: #ffffff;
        margin-bottom: 12px;
        font-family: 'Questrial', sans-serif;
        line-height: 1.3;
      }
      
      .workspace-tool-item p {
        font-size: 16px;
        color: rgba(255,255,255,0.85);
        line-height: 1.6;
        margin: 0;
        font-family: 'Questrial', sans-serif;
      }
      @media (max-width: 1200px) {
        .workspace-tools-section {
          padding: 60px 20px;
        }
        .workspace-tools-card {
          padding: 40px 32px;
          max-width: 1000px;
        }
        .workspace-tools-title {
          font-size: 40px;
        }
        .workspace-icon-img {
          width: 56px;
          height: 56px;
        }
      }
      
      @media (max-width: 900px) {
        .workspace-tools-section {
          padding: 40px 16px;
        }
        .workspace-tools-card {
          padding: 32px 24px;
        }
        .workspace-tools-header {
          flex-direction: column;
          gap: 16px;
          text-align: center;
        }
        .workspace-tools-title {
          font-size: 32px;
        }
        .workspace-tools-grid {
          grid-template-columns: 1fr;
          gap: 32px 0;
        }
        .workspace-tool-item h3 {
          font-size: 20px;
        }
        .workspace-tool-item p {
          font-size: 15px;
        }
        .workspace-icon-img {
          width: 48px;
          height: 48px;
        }
      }
      
      @media (max-width: 600px) {
        .workspace-tools-section {
          padding: 32px 12px;
        }
        .workspace-tools-card {
          padding: 24px 20px;
          border-radius: 24px;
        }
        .workspace-tools-title {
          font-size: 28px;
        }
        .workspace-tool-item h3 {
          font-size: 18px;
        }
        .workspace-tool-item p {
          font-size: 14px;
        }
        .workspace-icon-img {
          width: 40px;
          height: 40px;
        }
      }
    `}</style>
  </div>
);

export default WorkspaceToolsSection;
