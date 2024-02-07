import { Field, Form, Formik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { IconContext } from "react-icons";
import { FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import * as Yup from "yup";
import { useState } from "react";
import { createActivityTemplate } from "../../../api/ActivityApi";

export default function CreateActivity({ onClose, onSubmit }) {
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    feedPercent: Yup.number("Feed Percent must be a number")
      .positive("Feed Percent must be positive")
      .required("Feed Percent is required"),
    time: Yup.string().required("Time is required"),
    day: Yup.number("Day must be a number")
      .positive("Day must be positive")
      .required("Day is required"),
    turn: Yup.number("Turn must be a number")
      .positive("Turn must be positive")
      .required("Turn is required"),
    note: Yup.string(),
    description: Yup.string(),
    name: Yup.string().required("Name is required"),
  });

  async function handleSubmit(values, { setSubmitting }) {
    try {
      const validate = await validationSchema.validate(values);
      // console.log(validate);
      setSubmitting(true);
      setIsLoading(true);
      await createActivityTemplate(values);
      setSubmitting(false);
      setIsLoading(false);
      onSubmit();
    } catch (error) {
      toast.error(error.response.data.message);
      setIsLoading(false);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <div className="z-50 fixed inset-0 flex items-center justify-center w-full md:inset-0 md:h-full">
        <Toaster position="bottom-right" />
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add New Activity
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <IconContext.Provider value={{ size: 20 }}>
                  <FaXmark onClick={onClose} />
                </IconContext.Provider>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <Formik
              initialValues={{
                name: "",
                description: "",
                note: "",
                turn: 0,
                day: 0,
                time: "",
                feedPercent: 0,
              }}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="grid gap-4 mb-4 grid-rows-2 sm:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="example"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      note
                    </label>
                    <Field
                      type="text"
                      name="note"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="note"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Turn
                    </label>
                    <Field
                      type="number"
                      name="turn"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="1"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      day
                    </label>
                    <Field
                      type="number"
                      name="day"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="1"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Time
                    </label>
                    <Field
                      type="time"
                      name="time"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="00:00"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Feed Percent
                    </label>
                    <Field
                      type="number"
                      name="feedPercent"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="1"
                    />
                  </div>
                </div>
                <div className="col-span-2  ">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Description
                  </label>
                  <Field
                    as="textarea"
                    type="text"
                    name="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="description"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-5 text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {isLoading ? (
                    <>
                      <svg
                        aria-hidden="true"
                        className="mr-4 w-6 h-6 text-gray-200 animate-spin dark:text-blue-700 fill-white"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      Loading...
                    </>
                  ) : (
                    <>
                      <IconContext.Provider value={{ className: "mr-2" }}>
                        <FaPlus />
                      </IconContext.Provider>
                      Add new activity
                    </>
                  )}
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
