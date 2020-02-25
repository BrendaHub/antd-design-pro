import React from 'react';
import styles from './index.css';
import Footer from '@/components/foot'

const BasicLayout: React.FC = props => {
  console.info(props)
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {props.children}
      <Footer/>
    </div>
  );
};

export default BasicLayout;
