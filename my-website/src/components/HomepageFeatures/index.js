import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Step-by-Step Tutorials',
    description: (
      <>
        <div className='text'> Learn complex backend web development technologies and build practical projects through step-by-step guides.
        </div>
          
        <a
          className={styles.tutorialButton}
          href="/blog/django-tutorial"
  >
           Explore Tutorials <span className={styles.arrow}>&rarr;</span>
        </a>

      </>
    ),
  },
  {
    title: 'Tech Insights',
    description: (
      <>
        <div>Stay updated on the latest tech trends, tools, news, and frameworks</div>
        <br/>
            <a
               className={styles.tutorialButton}
               href=""
            >
              Explore Tech Insights <span className={styles.arrow}>&rarr;</span>
           </a>
      </>
    ),
  },

];

function Feature({ title, description }) {
  return (
    <div className="col col--5"> {/* <-- change here */}
      <div className="card shadow--md">
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
