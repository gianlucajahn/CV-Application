import React from 'react';
import styles from './preview.module.css';
import HeaderPreview from '../../components/HeaderPreview/HeaderPreview';
import EducationalPreview from '../../components/EducationalPreview/EducationalPreview';
import PracticalPreview from '../../components/PracticalPreview/PracticalPreview';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={this.props.mobile.formIsOpen ? styles['notDisplayed'] : styles["preview"]} id="preview">
        <HeaderPreview 
          info={this.props.info}
          experience={this.props.experience} />
        <div className={styles['info']}>
          <EducationalPreview 
            info={this.props.info}
            skills={this.props.skills} />
          <PracticalPreview 
            info={this.props.info}
            experience={this.props.experience} />
        </div>
      </div>
    )
  }
}

export default Preview;