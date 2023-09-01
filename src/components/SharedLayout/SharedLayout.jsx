import Header from '../shared/Header/Header/Header';
import BackgroundComponent from '../shared/Background/Background';
import Footer from '../shared/Footer/Footer';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const SharedLayout = () => { 
  return (
    <>
      <BackgroundComponent>
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </BackgroundComponent>
      <Footer />
    </>
  )
}

// export default SharedLayout;