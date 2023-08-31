import Header from '../shared/Header/Header/Header';
import BackgroundComponent from '../shared/Background/Background';
import Footer from '../shared/Footer/Footer';

import { Outlet } from 'react-router-dom';

export const SharedLayout = () => { 
  return (
    <>
      <BackgroundComponent>
        <Header />
        <main>
          <Outlet />
        </main>
      </BackgroundComponent>
      <Footer />
    </>
  )
}

// export default SharedLayout;