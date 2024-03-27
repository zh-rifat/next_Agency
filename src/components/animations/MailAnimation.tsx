'use client'

import React from 'react'

import mailAnimation from '@/assets/lotties/mail.json';
import Lottie from 'lottie-react';

type Props = {className?:string|undefined}

const MailAnimation = ({className}: Props) => {

  return (
    <div className={className}>
      <Lottie animationData={mailAnimation}
        height={400}
        width={400}
        
      />
    </div>
  )
}

export default MailAnimation;
