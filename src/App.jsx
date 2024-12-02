import { useFormik } from "formik";

import * as Yup from "yup";

const registerationSchema = Yup.object({
  userName: Yup.string().min(3).max(20).required("Enter user name!"),
  userEmail: Yup.string().email().required("Enter email!"),
  userPassword: Yup.string().min(6).max(12).required("Enter Password!"),
  userConfirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("userPassword"), null], "Password Must Match!"),
});

function App() {
  const initialValues = {
    userName: "",
    userEmail: "",
    userPassword: "",
    userConfirmPassword: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registerationSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center h-screen bg-gray-100 p-4"
    >
      <div className="flex flex-col justify-start items-center rounded-xl shadow-lg p-8 gap-4 max-w-sm w-full bg-white">
        <div className="userName-container flex flex-col w-full gap-3">
          <label
            htmlFor="userName"
            className="font-semibold text-lg text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            className="border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.userName && touched.userName && (
            <p className="text-red-500 text-sm mt-1">{errors.userName}</p>
          )}
        </div>

        <div className="userEmail-container flex flex-col w-full gap-3">
          <label
            htmlFor="userEmail"
            className="font-semibold text-lg text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            className="border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={values.userEmail}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.userEmail && touched.userEmail && (
            <p className="text-red-500 text-sm mt-1">{errors.userEmail}</p>
          )}
        </div>

        <div className="userPassword-container flex flex-col w-full gap-3">
          <label
            htmlFor="userPassword"
            className="font-semibold text-lg text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="userPassword"
            id="userPassword"
            className="border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={values.userPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.userPassword && touched.userPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.userPassword}</p>
          )}
        </div>

        <div className="userConfirmPassword-container flex flex-col w-full gap-3">
          <label
            htmlFor="userConfirmPassword"
            className="font-semibold text-lg text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="userConfirmPassword"
            id="userConfirmPassword"
            className="border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={values.userConfirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.userConfirmPassword && touched.userConfirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.userConfirmPassword}
            </p>
          )}
        </div>

        <div className="submit-btn-container w-full mt-4">
          <button className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
            Register
          </button>
        </div>
      </div>
    </form>
  );
}

export default App;
