import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Step-by-Step Tutorials',
    description: (
      <>
        <div>Learn complex backend web development technologies and build practical projects through step-by-step guides.</div>
        <a className={styles.tutorialButton} href="https://dtechreative-blog.vercel.app/blog/django-tutorial">
          Explore Tutorials <span className={styles.arrow}>&rarr;</span>
        </a>
      </>
    ),
  },
  {
    title: 'Tech Insights',
    description: (
      <>
        <div>Stay updated on the latest tech trends, tools, news, and frameworks.</div>
        <a className={styles.tutorialButton} href="https://dtechreative-blog.vercel.app/blog/flask-vs-django">
          Explore Tech Insights <span className={styles.arrow}>&rarr;</span>
        </a>
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className="col col--6 margin-bottom--lg"> {/* 50% width on desktop, full width on mobile */}
      <div className="card shadow--md" style={{ height: "100%" }}>
        <div className="card__body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">  {/* THIS is what places col--6 side by side */}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
