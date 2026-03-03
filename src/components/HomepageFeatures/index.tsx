import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Spec Kit',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        프로젝트의 요구사항과 설계를 체계적으로 정의하여
        AI 에이전트에게 정확한 맥락을 전달합니다.
      </>
    ),
  },
  {
    title: 'Superpowers 스킬',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        AI 에이전트의 작업 능력을 확장하는 스킬 시스템으로
        계획, 구현, 검증까지 자동화합니다.
      </>
    ),
  },
  {
    title: 'Harness 기법',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Spec Kit과 Superpowers를 하나로 묶어
        실전 프로젝트에서 최대 효율의 AI 개발 워크플로우를 구현합니다.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

type ReferenceItem = {
  number: number;
  title: string;
  file: string;
};

const ReferenceList: ReferenceItem[] = [
  {number: 1, title: 'Superpowers 기본', file: '/vibe_coding_harness/files/1.superpowers_basic.pdf'},
  {number: 2, title: 'Spec Kit 기본', file: '/vibe_coding_harness/files/2.spec_kit_basic.pdf'},
  {number: 3, title: 'Hybrid Harness 기본', file: '/vibe_coding_harness/files/3.hybrid_harness_basic.pdf'},
  {number: 4, title: 'DDD Harness 기본', file: '/vibe_coding_harness/files/4.ddd_harness_basic.pdf'},
  {number: 5, title: 'Total Harness 기본', file: '/vibe_coding_harness/files/5.total_harness_basic.pdf'},
];

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.references}>
        <div className="container">
          <Heading as="h2" className="text--center margin-bottom--lg">
            참고자료
          </Heading>
          <div className="row">
            {ReferenceList.map(({number, title, file}) => (
              <div key={number} className="col col--2 col--offset-0 margin-bottom--md" style={{flex: '0 0 20%', maxWidth: '20%'}}>
                <a href={file} target="_blank" rel="noopener noreferrer" className={styles.referenceCard}>
                  <div className={styles.referenceNumber}>{number}</div>
                  <div className={styles.referenceTitle}>{title}</div>
                  <div className={styles.referenceDownload}>PDF 다운로드</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
