import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const EdnuxLogo = ({ size = 38, withText = false }) => {
  const logo = (
    <Image
      src="/assets/images/ednux_logo.png"
      alt="Ednux Logo"
      width={size}
      height={size}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: withText ? 8 : 0
      }}
      priority
    />
  );
  return withText ? (
    <Link href="/">
      {logo}
      <span style={{ verticalAlign: 'middle', fontWeight: 700, fontSize: size * 0.6 }}>Ednux</span>
    </Link>
  ) : logo;
};

export default EdnuxLogo;
