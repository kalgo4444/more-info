import { useNavigate } from 'react-router-dom'
import './card.scss'

const Card = ({ date }) => {
  const navigate = useNavigate()

  return (
    <div className="card__wrapper">
      {date?.map((item) => (
        <article
          onClick={() => navigate(`/product/${item.id}`)}
          key={item.id}
          className="card"
        >
          <div className="card__img">
            <img src={item.image} alt="" />
            <span className="card__category">{item.category}</span>
            <span className="card__rating">{item.rating.rate}</span>
          </div>
          <div className="card__desc">
            <p>{item.title}</p>
            <b className="card__price">${item.price}</b>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Card
