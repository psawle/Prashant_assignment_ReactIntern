import "./card.style.css"

export const Card = ({item}) => {
  const imageLink = item.Image[1];
    return (
      <>
        <div className="card-conatiner">
          <img className="card-image" src={imageLink} alt="imagee"/>
          <p className="card-title">{item.Title}</p>
          <button>{item.Status}</button>
        </div>
      </>
    )
  }