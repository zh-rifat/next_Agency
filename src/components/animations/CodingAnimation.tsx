'use client'

import React from 'react'

import codingAnimation from '@/assets/lotties/coding_animation.json';
import Lottie from 'lottie-react';

type Props = {className?:string|undefined}

const CodingAnimation = ({className}: Props) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: codingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className={className}>
      <Lottie animationData={codingAnimation}
        height={400}
        width={400}
      />
    </div>
  )
}

export default CodingAnimation
