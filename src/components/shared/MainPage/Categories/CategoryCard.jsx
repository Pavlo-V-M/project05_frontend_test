

const CategoryItemCard = ({ drinkThumb, drink }) => {

  return (
    <div>
      <img src={drinkThumb} alt="coctail"></img>
      <h2>{drink} </h2>
    </div>
    
  )
}

export default CategoryItemCard;