import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href={'/'}>
        <Image src='/images/logo_light.png' alt='NEURONITE' width={130}  height={10}/>
    </Link>
  )
}

export default Logo
