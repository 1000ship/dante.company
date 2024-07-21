"use client";

import { AnimatedTitle } from "../../atoms";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FC } from "react";

const images = [
  "/images/artifacts-section/idea.jpg",
  "/images/artifacts-section/web.jpg",
  "/images/artifacts-section/mobile.jpg",
  "/images/artifacts-section/smart-contract.jpg",
  "/images/artifacts-section/coding.jpg",
];

const WelcomeSection: FC = () => {
  const t = useTranslations("landing");

  return (
    <div className="relative isolate -z-10">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-stretch">
          <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <div className="sticky top-1/2 mt-24 -translate-y-1/2">
              <AnimatedTitle>
                {t("WelcomeSection.welcomeMessage")}
              </AnimatedTitle>
              <p className="relative mt-6 break-keep text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none dark:text-gray-300">
                {t("WelcomeSection.description1")}
              </p>
              <p className="relative mt-6 break-keep text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none dark:text-gray-300">
                {t("WelcomeSection.description2")}
              </p>
            </div>
          </div>
          <div className="mt-14 flex -translate-y-32 justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 md:translate-y-0 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <img
                  src={images[0]}
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </motion.div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={images[1]}
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={images[2]}
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </motion.div>
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={images[3]}
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={images[4]}
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
