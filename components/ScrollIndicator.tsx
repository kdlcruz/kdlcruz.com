"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  targetRef?: React.RefObject<HTMLElement>; // optional, scrollable container
  className?: string;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  targetRef,
  className,
}) => {
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      const el = targetRef?.current || document.documentElement;
      setIsScrollable(el.scrollHeight > el.clientHeight);
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => window.removeEventListener("resize", checkScrollable);
  }, [targetRef]);

  if (!isScrollable) return null;

  return (
    <div
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${className}`}
    >
      {/* Mouse outline */}
      <div className="w-8 h-14 rounded-full border-2 border-white relative">
        {/* Dot that animates */}
        <motion.div
          className="w-2 h-2 bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};
