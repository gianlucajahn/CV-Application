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
      <div className={styles['edu']}>
        <div className={styles['contact']}>
          <h3 className={styles['section-h3']}>CONTACT</h3>

          <div className={styles['details']}>
           <div className={styles['detail']}>
              <img src={require("../../icons/website.png")} className={styles['detailImg']} alt="website"></img>
              <p>{this.props.info[3].value}</p>
            </div>

            <div className={styles['detail']}>
              <img src={require("../../icons/email.png")} className={styles['detailImg']} alt="email"></img>
              <p>{this.props.info[4].value}</p>
            </div>

            <div className={styles['detail']}>
            <img src={require("../../icons/address.png")} className={styles['detailImg']} alt="address"></img>
              <p>{this.props.info[2].value}</p>
            </div>

            <div className={styles['detail']}>
            <img src={require("../../icons/phone.png")} className={styles['detailImg']} alt="Phone number"></img>
              <p>{this.props.info[5].value}</p>
            </div>
          </div>
        </div>

        <div className={styles['education']}>
          <h3 className={styles['section-h3']}>EDUCATION</h3>

          <div className={styles['university']}>
            <h4>{this.props.info[8].value}</h4>
            <h5>{this.props.info[7].value}</h5>
            <p>{this.props.info[9].value}</p>
          </div>

          <div className={styles['school']}>
            <h4>{this.props.info[11].value}</h4>
            <h5>{this.props.info[10].value}</h5>
            <p>{this.props.info[12].value}</p>
          </div>
        </div>

        <div className={styles['skill-preview']}>
          <h3 className={styles['section-h3']}>SKILLS</h3>

          <ul className={styles['skillList']}>
          {this.props.skills.map((skill, i) => {
            return <li key={i}>{skill.skill}</li>
          })}
          </ul>
        </div>
      </div>
    )
  }
}

export default EducationalPreview;