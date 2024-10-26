import { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styles from './InternalNavigation.module.css';
import clsx from 'clsx';
import CamperFeatures from '@components/CamperFeatures/CamperFeatures.jsx';
import CamperReviews from '@components/CamperReviews/CamperReviews.jsx';

const InternalNavigation = () => {
  const [activeTab, setActiveTab] = useState('features');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={styles.internalNavigation}>
        <button
          className={clsx(styles.tabButton, activeTab === 'features' && styles.active)}
          onClick={() => handleTabClick('features')}
        >
          Features
        </button>
        <button
          className={clsx(styles.tabButton, activeTab === 'reviews' && styles.active)}
          onClick={() => handleTabClick('reviews')}
        >
          Reviews
        </button>
      </div>
      <SwitchTransition>
        <CSSTransition
          key={activeTab}
          timeout={300}
          classNames={{
            enter: styles.tabContentEnter,
            enterActive: styles.tabContentEnterActive,
            exit: styles.tabContentExit,
            exitActive: styles.tabContentExitActive,
          }}
        >
          <div className={styles.tabContent}>
            {activeTab === 'features' && <CamperFeatures />}
            {activeTab === 'reviews' && <CamperReviews />}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>

  );
};

export default InternalNavigation;