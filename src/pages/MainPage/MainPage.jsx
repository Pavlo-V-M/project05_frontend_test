import Header from '../../components/shared/Header/Header/Header';

// import CategoryListPrewiew from "components/shared/MainPage/Categories/CategoryListPrewiew";
import Hero from '../../components/shared/MainPage/Hero/Hero';
import OtherDrinksBtn from '../../components/shared/MainPage/Buttons/OtherDrinksBtn'

import Footer from '../../components/shared/Footer/Footer';

const MainPage = () => {

  return (
    <>
      <Header/>
      <Hero/>
      {/* <CategoryListPrewiew/> */}
      <div>Categories</div>
      <OtherDrinksBtn />
      <Footer />
    </>
  )
  
}
export default MainPage;