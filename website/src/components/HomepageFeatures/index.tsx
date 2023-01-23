import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  content: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    Svg: require('@site/static/img/box.svg').default,
    content: (
      <>
        <h3>Item 1</h3>
        <h4>Blah</h4>
        <p>
          Blah.
        </p>
      </>
    ),
  },
  {
    Svg: require('@site/static/img/box.svg').default,
    content: (
      <>
        <h3>Item 2</h3>
        <h4>Blah</h4>
        <p>
          Blah.
        </p>
      </>
    ),
  },
  {
    Svg: require('@site/static/img/box.svg').default,
    content: (
      <>
        <h3>Item 3</h3>
        <h4>Blah</h4>
        <p>
          Blah.
        </p>
      </>
    ),
  },
];

function Feature({Svg, content}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">{content}</div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
