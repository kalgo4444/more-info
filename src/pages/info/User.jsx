import { useLayoutEffect } from 'react'
import './user.scss'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hook/useFetch'
import userImg from '../../assets/user.png'

const User = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { id } = useParams()
  const { date, error, loading } = useFetch(`/users/${id}`)

  return (
    <>
      {error && <p>Error!</p>}
      {loading ? (
        <></>
      ) : (
        <>
          <section className="user">
            <div className="container">
              <div className="user__wrapper">
                <div className="user__desc">
                  <h2 className="user__desc-name">
                    {date?.name.firstname} {date?.name.lastname}
                  </h2>
                  <div className="user__desc-info">
                    <p>Email: {date?.email}</p>
                    <p>Username: {date?.username}</p>
                    <p>Phone: {date?.phone}</p>
                  </div>
                  <div className="user__desc-address">
                    <p>City: {date?.address.city}</p>
                    <p>Street: {date?.address.street}</p>
                    <p>Zipcode: {date?.address.zipcode}</p>
                  </div>
                </div>
                <div className="user__img">
                  <img src={userImg} loading="lazy" alt="User image" />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default User
