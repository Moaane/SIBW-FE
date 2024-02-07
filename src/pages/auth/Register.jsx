import { Field, Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createUserApi } from "../../api/UserApi";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    terms: Yup.string().required("Accept Terms and Conditions is required"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    password: Yup.ing()
      .min(6, "Password must have 6 characters or more")
      .required("Password is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    username: Yup.string().required("Username is required"),
  });

  useEffect(() => {
    const token = localStorage.getItem("authenticated");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  async function handleSubmit(values, { setSubmitting }) {
    try {
      await validationSchema.validate(values);
      setSubmitting(true);
      setIsLoading(true);

      const { confirmPassword, terms, ...dataToSend } = values; 
      setTimeout(async () => {
        await createUserApi(dataToSend);
        setSubmitting(false);
        setIsLoading(false);
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <Toaster position="bottom-right" />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="cursor-default text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                terms: "",
              }}
              onSubmit={handleSubmit}
            >
              <Form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="cursor-default block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your username
                  </label>
                  <Field
                    type="text"
                    name="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@mail.com"
                  />
                </div>
                <div>
                  <label className="cursor-default block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <Field
                    type="email "
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@mail.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirm password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Field
                      name="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="font-light text-gray-500 dark:text-gray-300">
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
