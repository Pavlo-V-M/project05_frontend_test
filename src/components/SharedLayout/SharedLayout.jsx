import Header from '../shared/Header/Header/Header';
import Footer from '../shared/Footer/Footer';

import { Outlet } from 'react-router-dom';

const SharedLayout = () => { 
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
    
  )
}

export default SharedLayout;