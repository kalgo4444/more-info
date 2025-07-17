import { useNavigate } from 'react-router-dom'
import './card.scss'
import image from '../../assets/users.png'

const UserCard = ({ date }) => {
  const navigate = useNavigate()

  return (
    <div className="card__wrapper">
      {date?.map((item) => (
        <article
          onClick={() => navigate(`/user/${item.id}`)}
          key={item.id}
          className="card"
        >
          <div className="card__img">
            <img src={image} alt="card image" />
            <span className="card__category">{item.username}</span>
            <span className="card__rating">{item.id}</span>
          </div>
          <div className="card__desc">
            <p style={{ textTransform: 'uppercase' }}>
              {item.name.firstname} {item.name.lastname}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default UserCard
