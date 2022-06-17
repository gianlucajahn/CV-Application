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
                          placeholder=' Full Name'
                          name="nameInput"
                          id='nameInput'
                          type="text"
                          required>
                        </input>
                    </div>
      
                    <div className={styles['address']}>
                        <input 
                          className={styles['input']}
                          placeholder=' Your Address'
                          id='addressInput'
                          type="text"
                          required>
                        </input>
                    </div>
            
                    <div className={styles['contact']}>
                        <input 
                          className={styles['input']}
                          placeholder=' Your eMail'
                          id='emailInput'
                          type="email"
                          required>
                        </input>

                        <input 
                          className={styles['input']}
                          placeholder=' Your number'
                          id='telInput'
                          name="telInput"
                          type="tel"
                          required>
                        </input>
                    </div>

                    <div className={styles['about']}>
                      <textarea
                        className={styles['textarea']}
                        placeholder=" Tell us something about yourself!"
                        id="aboutInput"
                        name="aboutInput"
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