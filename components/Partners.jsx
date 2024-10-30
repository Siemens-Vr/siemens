import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const Partners = () => {
  const controls = useAnimationControls();
  const [hasEntered, setHasEntered] = useState(false);

  const logos = [
    { src: "/TVETA.png", alt: "TVETA" },
    { src: "/SIEMENS.png", alt: "SIEMENS" },
    { src: "/SSF_Logo_transparent_RGB.png", alt: "SSF" },
    { src: "/ARSO-LOGO-2-pr.jpg", alt: "ARSO" },
    { src: "/FESTO.png", alt: "FESTO" },
    {
      src: "/Virtual Mechatronics Lab Logo V2-01.png",
      alt: "Virtual Mechatronics Lab",
    },
    { src: "/SIFA FC.png", alt: "SIFA FC" },
    { src: "/KfW_LOGO.png", alt: "KfW" },
    { src: "/EN Co-Funded by the EU_POS.png", alt: "EU" },
    { src: "/BMZ Logo.png", alt: "BMZ" },
    { src: "/AU_LOGO_ENGLISH_CMYK.png", alt: "AU" },
    { src: "/AUDA-NEPAD_LOGO_EN.png", alt: "AUDA-NEPAD" },
  ];

  useEffect(() => {
    const sequence = async () => {
      // Initial entrance animation
      await controls.start({
        x: [-2400, 0],
        transition: {
          duration: 2,
          ease: "easeOut",
        },
      });

      setHasEntered(true);

      // Continuous sliding animation
      while (true) {
        await controls.start({
          x: -2400,
          transition: {
            duration: 30,
            ease: "linear",
          },
        });
        await controls.set({ x: 0 });
      }
    };

    sequence();
  }, [controls]);

  return (
    <div className="w-full overflow-hidden">
      <motion.div className="flex items-center gap-8" animate={controls}>
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: hasEntered ? 0 : index * 0.1,
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto object-contain"
            />
          </motion.div>
        ))}

        {/* Duplicate logos for seamless loop */}
        {logos.map((logo, index) => (
          <motion.div
            key={`duplicate-${index}`}
            className="flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: hasEntered ? 0 : index * 0.1,
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Partners;
