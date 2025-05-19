import React from "react";
import { motion } from "framer-motion";
import { education } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const EducationCard = ({ degree, institution, duration, image, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-white/5 p-6 rounded-2xl w-[300px] shadow-md"
  >
    <img
      src={image}
      alt={institution}
      className="w-full h-40 object-cover rounded-xl mb-4"
    />
    <p className="text-white text-xl font-bold ">{institution}</p>
    <h3 className="text-secondary text-sm mt-2">{degree}</h3>
    <p className="text-secondary text-sm">{duration}</p>
  </motion.div>
);

const Education = () => {
  return (
    <div id="education" className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant(0)}>
          <h2 className={styles.sectionHeadText}>Education.</h2>
          <p className={styles.sectionSubText}>
            My academic background and learning journey.
          </p>
        </motion.div>
      </div>
      
      <div className="-mt-20 pb-14 px-10 flex flex-wrap justify-center gap-10">
        {education.map((item, index) => (
          <EducationCard key={item.institution} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Education;
