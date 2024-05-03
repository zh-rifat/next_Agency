import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href={'/'}>
        <Image src='/images/logo.png' alt='FAUZ' width={40}  height={50}/>
    </Link>
  )
}

export default Logo
