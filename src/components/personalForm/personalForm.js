import React from 'react';
import styles from './personalForm.module.css';

class PersonalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={styles['personalForm']}>
                <h2>Personal Data</h2>
                <form className={styles['persForm']}>
                    <div className={styles['name']}>
                        <input 
                          className={styles['input']}
                          placeholder=' First Name'
                          name="firstName"
                          value={this.props.info[0].value}
                          onChange={this.props.handleInfoChange}
                          id='firstNameInput'
                          type="text"
                          required>
                        </input>

                        <input 
                          className={styles['input']}
                          placeholder=' Last Name'
                          name="lastName"
                          value={this.props.info[1].value}
                          onChange={this.props.handleInfoChange}
                          id='lastNameInput'
                          type="text"
                          required>
                        </input>
                    </div>
      
                    <div className={styles['address']}>
                        <input 
                          className={styles['input']}
                          placeholder=' Your Address'
                          name="address"
                          value={this.props.info[2].value}
                          onChange={this.props.handleInfoChange}
                          id='addressInput'
                          type="text"
                          required>
                        </input>
                    </div>

                    <div className={styles['website']}>
                        <input 
                          className={styles['input']}
                          placeholder=' Your Website'
                          name="website"
                          value={this.props.info[3].value}
                          onChange={this.props.handleInfoChange}
                          id='websiteInput'
                          type="text"
                          required>
                        </input>
                    </div>
            
                    <div className={styles['contact']}>
                        <input 
                          className={styles['input']}
                          placeholder=' Your eMail'
                          id='emailInput'
                          name="email"
                          value={this.props.info[4].value}
                          onChange={this.props.handleInfoChange}
                          type="email"
                          required>
                        </input>

                        <input 
                          className={styles['input']}
                          placeholder=' Your number'
                          id='telInput'
                          name="phone"
                          value={this.props.info[5].value}
                          onChange={this.props.handleInfoChange}
                          type="tel"
                          required>
                        </input>
                    </div>

                    <div className={styles['about']}>
                      <textarea
                        className={styles['textarea']}
                        placeholder=" Tell us something about yourself!"
                        id="aboutInput"
                        name="bio"
                        value={this.props.info[6].value}
                        onChange={this.props.handleInfoChange}
                        type="text"
                        required>
                      </textarea>
                    </div>
                </form>
            </div>
        )
    }
}

export default PersonalForm;