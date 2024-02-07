import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const contentStyle = {
    transform: isInView ? "none" : "translatey(100px)",
    opacity: isInView ? 1 : 0,

    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
  };

  return (
    <section ref={ref} className="bg-white dark:bg-gray-900">
      <div style={contentStyle}>{children}</div>
    </section>
  );
}

export default function Home() {
  const [authenticated, setAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const token = localStorage.getItem("authenticated");
    setAuthenticated(token);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar token={authenticated} />

      <section className="bg-white dark:bg-gray-900 pt-52">
        <div className="px-4 mx-auto max-w-screen-xl text-center lg:px-12">
          <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Your Go-To Solution for Fish Farming Succes
          </h1>
          <p className="mb-8 text-base font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Dive into the Future of Fish Farming with Aquaculture Hub:
            Revolutionizing Aquaculture for Sustainable Growth and Success
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Learn more
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Watch video
            </a>
          </div>
        </div>
      </section>

      {/* <Splide
        className="bg-red-500"
        options={{
          perPage: 2  ,
          perMove: 1,
          gap: "2rem",
          padding: "2rem",
          rewind: "slide",
          focus: 3,
        }}
      >
        <SplideSlide>
          <img src="https://plus.unsplash.com/premium_photo-1667516764926-c4ac7e9a14cd?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://plus.unsplash.com/premium_photo-1667516764926-c4ac7e9a14cd?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://plus.unsplash.com/premium_photo-1667516764926-c4ac7e9a14cd?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://plus.unsplash.com/premium_photo-1667516764926-c4ac7e9a14cd?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SplideSlide>
      </Splide> */}

      <Section>
        <div className="items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6">
          <img className="w-full" src="fisherman3.png" alt="dashboard image" />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-xl md:text-5xl tracking-tight leading-tight font-extrabold text-gray-900 dark:text-white">
              Accelerating the Harvest Cycle up to 74 Days through Aquaculture
            </h2>
            <p className="mb-6 font-normal text-gray-500 text-sm md:text-2xl dark:text-gray-400">
              Optimize Your Yield: Unleashing the Potential of Aquaculture for
              Faster and More Efficient Harvest Cycles
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6">
          <img
            className="visible md:hidden w-full"
            src="fisherman2.png"
            alt="dashboard image"
          />
          <div className="md:mt-0">
            <h2 className="mb-4 text-xl md:text-5xl tracking-tight leading-tight font-extrabold text-gray-900 dark:text-white">
              Accelerating the Harvest Cycle up to 74 Days through Aquaculture
            </h2>
            <p className="mb-6 text-sm font-normal text-gray-500 md:text-2xl dark:text-gray-400">
              Optimize Your Yield: Unleashing the Potential of Aquaculture for
              Faster and More Efficient Harvest Cycles
            </p>
          </div>
          <img
            className="w-full hidden md:block"
            src="fisherman2.png"
            alt="dashboard image"
          />
        </div>
      </Section>

      <Section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 my-32">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              Start your free trial today
            </h2>
            <p className="mb-6 text-sm font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Try Flowbite Platform for 30 days. No credit card required.
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <motion.a
                whileTap={{ scale: 0.9 }}
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Free trial for 30 days
              </motion.a>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
