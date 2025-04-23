"use client"; 

import Lottie from "lottie-react";
import animationData from "@/data/confetti.json"; 

const LottieAnimation = () => {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width: 300, height: 150 }}
    />
  );
};

export default LottieAnimation;
