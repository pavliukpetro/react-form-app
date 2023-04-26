import useInput from "../hooks/input-hook";

function HookInput() {
    // Name
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: enteredNameHasError,
        valueChangeHandler: enteredNameChangeHandler,
        valueBlurHadler: enteredNameBlurHadler,
        reset: resetEnterName
    } = useInput(value => value.trim() !== '');

    // Email
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: enteredEmailHasError,
        valueChangeHandler: enteredEmailChangeHandler,
        valueBlurHadler: enteredEmailBlurHadler,
        reset: resetEnterEmail
    } = useInput(value => value.includes('@'));

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    } else {
        formIsValid = false;
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();

        // Form Validation
        if (enteredName.trim() === '' || !enteredEmail.includes('@')) {
            return;
        }

        console.log('Send Form');
        resetEnterName();

        resetEnterEmail();
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={enteredNameHasError ? "form-control invalid" : "form-control"}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    onChange={enteredNameChangeHandler}
                    onBlur={enteredNameBlurHadler}
                    value={enteredName}
                />
                <div>
                {enteredNameHasError && <small>Please, enter the Name</small>}
                </div>
            </div>
            <div className={enteredEmailHasError ? "form-control invalid" : "form-control"}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    onChange={enteredEmailChangeHandler}
                    onBlur={enteredEmailBlurHadler}
                    value={enteredEmail}
                />
                <div>
                {enteredEmailHasError && <small>Email should include @</small>}
                </div>
            </div>
            <div>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
}

export default HookInput;