import React from 'react';
import styles from './EducationalPreview.module.css';

class EducationalPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={styles['education']}>
        <div className={styles['contact']}>
          <h3>Contact</h3>

          <div className={styles['details']}>
            <div className={styles['detail']}>
              <img></img>
              <h5></h5>
            </div>
          </div>

          <div className={styles['details']}>
            <div className={styles['detail']}>
              <img></img>
              <h5></h5>
            </div>
          </div>

          <div className={styles['details']}>
            <div className={styles['detail']}>
              <img></img>
              <h5></h5>
            </div>
          </div>

          <div className={styles['details']}>
            <div className={styles['detail']}>
              <img></img>
              <h5></h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EducationalPreview;