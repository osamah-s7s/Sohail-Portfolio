'use client';

import React from 'react';
import { Github, Linkedin, Palette, Mail } from 'lucide-react';
import styles from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.preheading}>About Me</h2>
          <h1 className={styles.heading}>
            Crafting spaces that balance beauty and function, one design at a time{' '}
            <span className={styles.gradient}>to tell a unique story</span>
          </h1>
        </div>

        <div className={styles.socialLinks}>
          <div className={styles.socials}>
            <a
              href="https://github.com/sohailmuhammed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className={styles.icon} />
            </a>
            <a
              href="https://linkedin.com/in/sohailmuhammed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className={styles.icon} />
            </a>
            <a
              href="https://behance.net/fa22ff8e"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Palette className={styles.icon} />
            </a>
            <a href="mailto:xsohailx66@gmail.com">
              <Mail className={styles.icon} />
            </a>
          </div>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.profileColumn}>
            <div className={styles.imageWrapper}>
              <img
                src="/assets/images/about/aboutme.png"
                alt="Profile"
                className={styles.profileImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.profileInformations}>
              <h3>About Me</h3>
              <ul>
                <li className="profile-item">
                  <span className="profile-label">Name</span>
                  <span className="profile-content">Sohail</span>
                </li>
                <li className="profile-item">
                  <span className="profile-label">Profession</span>
                  <span className="profile-content">
                    Interior Designer & 3D Visualizer
                  </span>
                </li>
                <li className="profile-item">
                  <span className="profile-label">Hobbies</span>
                  <span className="profile-content">
                    Designing unique spaces, photography, and exploring new architectural trends.
                  </span>
                </li>
                <li className="profile-item">
                  <span className="profile-label">Favorite Tool</span>
                  <span className="profile-content">SketchUp & Enscape</span>
                </li>
                <li className="profile-item">
                  <span className="profile-label">Interests</span>
                  <span className="profile-content">
                    Creating functional and aesthetic environments with a focus on customer satisfaction.
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.opensourceWrapper}>
              <div className={styles.opensource}>
                <div className="about-me-opensource-header">
                  <span className={styles.opensourceBadge}>Design Impact</span>
                  <h3 className={styles.opensourceTitle}>
                    Contributions to Interior Design Community
                  </h3>
                </div>
                <p className={styles.opensourceText}>
                  Designed multiple commercial spaces, including "Cool n2" ice cream cafes and "a. Fragrances" branches,
                  ensuring cohesive branding and improved customer experience through strategic space planning and material selection.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentColumn}>
            <h5>More Than Design</h5>
            <p className={styles.intro}>
              Hello! I'm Sohail Muhammed. I've always been passionate about creating beautiful, functional spaces that reflect the personality and needs of those who inhabit them. Over the past three years, I've honed my skills in interior design, working on a variety of projects ranging from cafes to retail spaces. Now, I'm dedicated to delivering top-tier interior design solutions that blend aesthetics with practicality.
            </p>

            <h5>My Personality</h5>
            <div className={styles.techstack}>
              <div className={styles.techItem}>
                <img
                  className={styles.techIcon}
                  src="/assets/images/about/team.svg"
                  alt="Teamwork"
                />
                <span className={styles.techText}>
                  Collaborative & Client-Focused
                </span>
              </div>
              <div className={styles.techItem}>
                <img
                  className={styles.techIcon}
                  src="/assets/images/about/fire.svg"
                  alt="Problem Solving"
                />
                <span className={styles.techText}>
                  Creative & Solution-Oriented
                </span>
              </div>
              <div className={styles.techItem}>
                <img
                  className={styles.techIcon}
                  src="/assets/images/about/code.svg"
                  alt="Passion"
                />
                <span className={styles.techText}>Detail-Oriented & Passionate</span>
              </div>
              <div className={styles.techItem}>
                <img
                  className={styles.techIcon}
                  src="/assets/images/about/chat.svg"
                  alt="Communication"
                />
                <span className={styles.techText}>
                  Strong Communicator & Team Leader
                </span>
              </div>
            </div>

            <div className={styles.timeline}>
              <h5>Achievements</h5>

              <div className={styles.timelineItem}>
                <div className={styles.timelineCard}>
                  <div className={styles.timelineHeader}>
                    <div className={styles.timelineYear}>05.2025 - Now</div>
                    <div className={styles.timelineCompany}>
                      Faizan Sultan Architect
                    </div>
                  </div>
                  <h3 className={styles.timelineTitle}>
                    Lead Designer & 3D Visualizer for Major Projects
                  </h3>
                  <p className={styles.timelineDescription}>
                    Leading design projects, focusing on delivering high-quality designs and visuals for clients.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineCard}>
                  <div className={styles.timelineHeader}>
                    <div className={styles.timelineYear}>Feb 2020 - Dec 2021</div>
                    <div className={styles.timelineCompany}>
                      Freelance Interior Designer
                    </div>
                  </div>
                  <h3 className={styles.timelineTitle}>
                    Freelance Interior Design Projects
                  </h3>
                  <p className={styles.timelineDescription}>
                    Managed design projects independently, delivering customized solutions while refining my skills in project management.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineCard}>
                  <div className={styles.timelineHeader}>
                    <div className={styles.timelineYear}>2020 - Present</div>
                    <div className={styles.timelineCompany}>
                      Bachelor's in Interior Design
                    </div>
                  </div>
                  <h3 className={styles.timelineTitle}>
                    Studying Interior Design at Superior University
                  </h3>
                  <p className={styles.timelineDescription}>
                    Pursuing my Bachelor's with a focus on space planning, design principles, and technical skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
