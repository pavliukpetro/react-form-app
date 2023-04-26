import { useState } from "react";

function SimpleInput() {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const enteredEmailIsValid = enteredEmail.includes('@');
    const enteredNameIsInvalid = enteredName.trim() === '' && enteredNameTouched;
    const enteredEmailIsInvalid = !enteredEmail.includes('@') && enteredEmailTouched;

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    } else {
        formIsValid = false;
    }

    const nameInputChangeHandler = (e) => {
        setEnteredName(e.target.value);
        setEnteredNameTouched(true);
    }
    const nameInputBlurHadler = (e) => {
        setEnteredNameTouched(true);
    }

    const emailInputChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
        setEnteredEmailTouched(true);
    }
    const emailInputBlurHadler = (e) => {
        setEnteredEmailTouched(true);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();

        // Form Validation
        if (enteredName.trim() === '' || !enteredEmail.includes('@')) {
            return;
        }

        console.log('Send Form');
        setEnteredName('');
        setEnteredNameTouched(false);
        setEnteredEmail('');
        setEnteredEmailTouched(false);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={enteredNameIsInvalid ? "form-control invalid" : "form-control"}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHadler}
                    value={enteredName}
                />
                <div>
                {enteredNameIsInvalid && <small>Please, enter the Name</small>}
                </div>
            </div>
            <div className={enteredEmailIsInvalid ? "form-control invalid" : "form-control"}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHadler}
                    value={enteredEmail}
                />
                <div>
                {enteredEmailIsInvalid && <small>Email should include @</small>}
                </div>
            </div>
            <div>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
}

export default SimpleInput;