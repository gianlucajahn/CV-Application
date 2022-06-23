import React from 'react';
import styles from './MobileToggle.module.css';

class MobileToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <button type="button" className={styles['toggle']} onClick={this.props.handleToggle}>
        <img src={this.props.mobile.formIsOpen ? require("../../icons/preview.png") : require("../../icons/editor.png")} alt="Mobile View Toggle"></img>
        {this.props.mobile.formIsOpen ? "Preview" : "Editor"}
      </button>
    )
  }
}

export default MobileToggle;