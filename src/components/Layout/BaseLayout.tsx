import { FunctionComponent, ReactNode } from 'react';
import { Navbar } from '../';
import { Footer } from '../';

interface BaseProps {
  children: ReactNode;
}

const BaseLayout: FunctionComponent<BaseProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='py-16 bg-gray-50 overflow-hidden min-h-screen'>
        {/* 1280px margin: 0 auto */}
        <div className='max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg-px-8'>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BaseLayout;
