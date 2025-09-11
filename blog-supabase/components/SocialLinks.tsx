import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Github, Linkedin, Instagram } from 'lucide-react';
const LINKS = [
 {
  href: "https://linkedin.com",
  icon: <Linkedin /> 
 },
 {
  href: "https://github.com",
  icon: <Github /> 
 },
 {
  href: "https://instagram.com",
  icon: <Instagram /> 
 }
]
const SocialLinks = () => {
 const renderLinks = LINKS.map((link, index) => {
  return (
   <Button variant={"outline"} size={"icon"} key={index}>
    <Link href={link.href}>
    {link.icon}
    </Link>
   </Button>
  )
 })
 return (
  <div className='flex gap-2 justify-center w-full'>
   {renderLinks}
   </div>
 );
}

export default SocialLinks;
