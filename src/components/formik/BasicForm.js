import { useFormik } from "formik"
import * as yup from "yup"

const formValidationSchema = yup.object({
  email: yup.string()
    .min(10, "Need a longer email")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Enter valid email"),
  password: yup.string()
    .min(8, "Need a longer password😀")
    .max(12, "Too much password")
    .required("Why not fill the password?")
    .matches(/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#!@%&]).{8,}$/, "Pattern not matching")
})

export function BasicForm() {

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values)
    }
  })


  return (
    <div>Basic Form
      <form onSubmit={formik.handleSubmit}>
        <br />
        Email
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />
        {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
        <br />
        <br />
        Password
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />
        {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
