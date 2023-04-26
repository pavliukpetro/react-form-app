import { useState } from "react";

const useInput = (validateValue) => {
    // validateValue = (value) => value.trim() !== '';
    const [enteredValue, setEnteredValue] = useState('');
    const [enteredValueTouched, setEnteredValueTouched] = useState(false);

    // const enteredNameIsValid = enteredName.trim() !== '';
    // const enteredNameIsInvalid = enteredName.trim() === '' && enteredNameTouched;
    const valueIsValid = validateValue(enteredValue); // true or false
    const valueHasError = !valueIsValid && enteredValueTouched;

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    }

    const valueBlurHadler = (e) => {
        setEnteredValueTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setEnteredValueTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError: valueHasError,
        valueChangeHandler,
        valueBlurHadler,
        reset
    }
}

export default useInput;
