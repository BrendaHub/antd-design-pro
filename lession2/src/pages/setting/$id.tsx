
import React from 'react';

import styles from './id.css';

export default (props: any) => {
  console.log(props)
  return (
    <div className={styles.normal}>
      <h1>Page id</h1>
      { 
        props.match.params.id
      }
    </div>
  );
}
