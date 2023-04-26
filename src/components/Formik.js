import { useFormik } from 'formik';

const validate = (values) => {
    const errors = {};

    if (!values.email.includes('@')) {
        errors.email = 'Email should have @'
    }

    if (values.name === '') {
        errors.name = 'Name should not be empty'
    }

    return errors;
}

function FormikInput() {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: ''
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />

            {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default FormikInput;