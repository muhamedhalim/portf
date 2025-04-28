"use client";

import Lottie from "lottie-react";
import type { CSSProperties } from "react";

interface LottieAnimationProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  style?: CSSProperties;
}

const LottieAnimation = ({
  animationData,
  loop = true,
  autoplay = true,
  style = { width: 300, height: 150 },
}: LottieAnimationProps) => {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={style}
    />
  );
};

export default LottieAnimation;
