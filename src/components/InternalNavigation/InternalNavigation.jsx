import { useState } from 'react';
import clsx from 'clsx';
import CamperFeatures from '@components/CamperFeatures/CamperFeatures.jsx';
import CamperReviews from '@components/CamperReviews/CamperReviews.jsx';
import styles from './InternalNavigation.module.css';


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
          onClick={() => handleTabClick('features')}>
          Features
        </button>
        <button
          className={clsx(styles.tabButton, activeTab === 'reviews' && styles.active)}
          onClick={() => handleTabClick('reviews')}>
          Reviews
        </button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'features' && <CamperFeatures />}
        {activeTab === 'reviews' && <CamperReviews />}
      </div>
    </>
  );
};

export default InternalNavigation;
