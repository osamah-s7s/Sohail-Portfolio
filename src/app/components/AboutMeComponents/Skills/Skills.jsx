'use client';

import { useState, useEffect } from 'react';
import styles from './Skills.module.scss';

const skillsData = [
  { title: 'AutoCAD', icon: '/assets/images/about/autocad.png' },
  { title: 'SketchUp', icon: '/assets/images/about/sketchup.png' },
  { title: 'Enscape', icon: '/assets/images/about/enscape.png' },
  { title: 'Figma', icon: '/assets/images/about/Figma.svg' },
];

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Alle Bilder vorab laden
  useEffect(() => {
    const preloadImages = async () => {
      const allImages = skillsData.map(skill => skill.icon);

      try {
        await Promise.all(
          allImages.map(src => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = reject;
              img.src = src;
            });
          })
        );
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Trotzdem als geladen markieren
      }
    };

    preloadImages();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Skills</h2>

        <div className={styles.grid}>
          {!imagesLoaded ? (
            // Loading-Zustand
            <div className={styles.loading}>
              <div className={styles.spinner}></div>
              <p>Loading skills...</p>
            </div>
          ) : (
            // Skills anzeigen, wenn alle Bilder geladen sind
            skillsData.map((skill, index) => (
              <div
                key={index}
                className={styles.item}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                {/* Füge diesen Div hinzu */}
                <div className={styles.gradientBorder}></div>

                <img
                  src={skill.icon}
                  alt={skill.title}
                  className={styles.icon}
                  style={{
                    transform:
                      hoveredIndex === index
                        ? 'scale(1.15) rotateZ(0deg)'
                        : 'scale(1) rotateZ(0deg)',
                  }}
                  loading="eager" // Wichtig: Sofort laden
                />
                <p className={styles.itemTitle}>{skill.title}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
