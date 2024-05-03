import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {
  href:string,
  exact?:boolean,
  children:React.ReactNode,
  className:string
}
const NavLink = ({href,exact=false,children,...props}: Props) => {
  const pathname = usePathname();
  
  // const isActive = exact ? pathname === href : pathname.startsWith(href);
  const isActive=false;
  if (isActive) {
      props.className += ' active';
  }

  return (
      <Link href={href} {...props}>
              {children}
      </Link>
  );
}

export default NavLink;
