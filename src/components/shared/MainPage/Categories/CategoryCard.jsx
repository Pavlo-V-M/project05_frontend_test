

const CategoryItemCard = ({ drinkThumb, drink }) => {

  return (
    <>
      <img src={drinkThumb} alt="coctail"></img>
      <h2>{drink}</h2>
      <p>ingredients</p>
    </>
    
  )
}

export default CategoryItemCard;