
import CategoryListPrewiew from "components/shared/MainPage/Categories/CategoryListPrewiew";
import Hero from '../../components/shared/MainPage/Hero/Hero';
import OtherDrinksBtn from '../../components/shared/MainPage/Buttons/OtherDrinksBtn'
import Container from "components/shared/Container/Container";


const MainPage = () => {

  return (
    <>
      <Container>
        <Hero/>
        <CategoryListPrewiew/>
        <OtherDrinksBtn />
      </Container>
      
    </>
  )
  
}
export default MainPage;