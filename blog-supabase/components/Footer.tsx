import React from 'react';
import { Separator } from './ui/separator';

const Footer = () => {
 return (
  <div>
   <Separator className='my-6 border-dashed '/>
   <p className="text-center text-sm text-gray-400">&copy; 2024 Ali Talib. All Rights Reserved.</p>
  </div>
 );
}

export default Footer;
