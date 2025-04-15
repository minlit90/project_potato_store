import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function Basemodal({
  visible = false,
  children,
}: BaseModalProp) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                duration: 0.5,
                delayChildren: 0.7,
              },
            },
            hidden: {
              opacity: 0,
              transition: {
                when: "afterChildren",
                duration: 0.5,
                delayChildren: 0.7,
              },
            },
          }}
          className="bg-black/20 fixed w-screen h-screen top-0 left-0 z-[999999px] flex items-center justify-center"
        >
          <motion.div
            initial={{ y: 710, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 710, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0, 0, 0.3, 1] }}
            className="gap-3 flex items-center justify-center will-change-[transform]"
            style={{ transform: "translateZ(0)" }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export type BaseModalProp = {
  visible: boolean;
  children: React.ReactNode;
};
