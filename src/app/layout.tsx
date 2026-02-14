import '../../globals.css'
// app/layout.tsx (or pages/_app.tsx for older Next.js)
import React, { ReactNode } from "react";
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';

interface Props {
  children?: ReactNode
  // any props that come into the component
}
export default function RootLayout({ children, ...props }: Props) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

