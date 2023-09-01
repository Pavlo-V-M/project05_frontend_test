import { Form, Field } from "formik";
import scss from "./subscribeForm.module.scss";

const FormField = () => {
  return (
    <Form className={scss.subscribe_form}>
    <p className={scss.subscribe_text}>
        Subscribe to our newsletter and stay in touch with the latest news and special offers.
    </p>
    <div className={scss.input_container}>
        <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            className={`${scss.subscribe_input} ${
                isFocused
                    ? values.email
                        ? errors.email
                            ? scss.invalid_border
                            : scss.valid_border
                        : ""
                    : ""
            }`}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />

        {errors.email && isFocused && (
            <div className={scss.error_message_on_border}>{errors.email}</div>
        )}
    </div>

    <div className={scss.subscribe_status_container}>
        {status === "success" && isConfirmed && (
            <p
                className={`${scss.success_message} ${scss.status_message} ${scss.success_status}`}
            >
                You have successfully subscribed to the newsletter
            </p>
        )}

        {status === "error" && (
            <p className={`${scss.error_message} ${scss.status_message} ${scss.error_status}`}>
                Oops! An error occurred. Please try again later.
            </p>
        )}
    </div>

    <button
        type="submit"
        disabled={isSubmitting || !values.email || Object.keys(errors).length > 0}
        className={scss.subscribe_button}
    >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
    </button>
</Form>
  )
}

export default Form;