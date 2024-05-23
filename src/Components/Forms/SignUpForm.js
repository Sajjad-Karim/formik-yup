import { Password } from "@mui/icons-material";
import { useFormik } from "formik";
import React from "react";
import { FormSchema } from "./FormSchema";
const SigninForm = () => {
  const intialValues = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    subscription: "",
    acceptCondition: "",
  };
  const { values, handleBlur, touched, handleSubmit, handleChange, errors } =
    useFormik({
      initialValues: intialValues,
      validationSchema: FormSchema,
      onSubmit: (values, action) => {
        console.log(values);
      },
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && touched.firstName ? (
            <p style={{ color: "red", marginTop: "3px" }}>{errors.firstName}</p>
          ) : null}
        </div>
        <div className="form-group mt-2">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && touched.lastName ? (
            <p style={{ color: "red", marginTop: "3px" }}>{errors.lastName}</p>
          ) : null}
        </div>
        <div className="form-group mt-2">
          <label>Gender</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label className="form-check-label" for="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label className="form-check-label" for="female">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="other"
                value="other"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label className="form-check-label" for="other">
                Other
              </label>
            </div>
            {errors.gender && touched.gender ? (
              <p style={{ color: "red", marginTop: "3px" }}>{errors.gender}</p>
            ) : null}
          </div>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p style={{ color: "red", marginTop: "3px" }}>{errors.email}</p>
          ) : null}
        </div>
        <div className="form-group mt-2">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            className="form-control"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.phone && touched.phone ? (
          <p style={{ color: "red", marginTop: "3px" }}>{errors.phone}</p>
        ) : null}
        <div className="form-group mt-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p style={{ color: "red", marginTop: "3px" }}>{errors.password}</p>
          ) : null}
        </div>
        <div className="form-group mt-2">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <p style={{ color: "red", marginTop: "3px" }}>
              {errors.confirmPassword}
            </p>
          ) : null}
        </div>

        <div className="form-group mt-2">
          <label htmlFor="confirmPassword">Subscription</label>
          <select
            className="form-control"
            name="subscription"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select</option>
            <option value="Free">Free</option>
            <option value="Pro">Pro</option>
            <option value="Enterprise">Enterprise</option>
          </select>
          {errors.subscription && touched.subscription ? (
            <p style={{ color: "red", marginTop: "3px" }}>
              {errors.subscription}
            </p>
          ) : null}
        </div>

        <div className="form-group mt-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="termsAndCondtions"
              onChange={handleChange}
              onBlur={handleBlur}
              name="acceptCondition"
            />
            <label className="form-check-label" htmlFor="termsAndCondtions">
              Accept terms and conditions.
            </label>
            {errors.acceptCondition && touched.acceptCondition ? (
              <p style={{ color: "red", marginTop: "3px" }}>
                {errors.acceptCondition}
              </p>
            ) : null}
          </div>
        </div>

        <div className="d-grid mt-2">
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SigninForm;
