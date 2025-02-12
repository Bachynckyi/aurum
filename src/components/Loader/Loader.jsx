import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import scss from "./Loader.module.scss";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className={scss.loader_overlay}
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{ backgroundColor: ["rgba(255, 255, 255, 0)", "#FFFFFF", "#FFFFFF", "rgba(255, 255, 255, 0)"] }}
      transition={{ duration: 2, times: [0, 0.2, 0.8, 1] }}
    >
      <motion.div
        className={scss.dots_container}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, times: [0, 0.2, 0.8, 1] }}
      >
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className={scss.dot}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 1, 1] }}
            transition={{ duration: 0.3, delay: index * 0.3 }}
            style={{ opacity: 1 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Loader;







