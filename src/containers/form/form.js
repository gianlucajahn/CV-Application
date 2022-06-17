import React from 'react';
import styles from './form.module.css';
import PersonalForm from '../../components/personalForm/personalForm';
import EducationalForm from '../../components/educationalForm/educationalForm';
import PracticalForm from '../../components/practicalForm/practicalForm';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={styles['form']}>
          <PersonalForm />
          <EducationalForm />
          <PracticalForm experience={this.props.experience} skills={this.props.skills}/>
      </div>
    )
  }
}

export default Form;