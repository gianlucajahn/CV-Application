import React from 'react';
import styles from './HeaderPreview.module.css';

class HeaderPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const firstName = this.props.info[0].value;
    const capitalizedFirstName = firstName.toUpperCase();

    const lastName = this.props.info[1].value;
    const capitalizedLastName = lastName.toUpperCase();

    return (
      <div>
        <div className={styles['header']}>
          <h1>
            <span
              className={styles['firstName']}>
                {capitalizedFirstName}
            </span>
            {capitalizedLastName}
          </h1>
        </div>
        <div className={styles['currentPos']}>
          <h2 className={styles['positionHeader']}>{this.props.experience[0].position}</h2>
        </div>
      </div>
    )
  }
}

export default HeaderPreview;