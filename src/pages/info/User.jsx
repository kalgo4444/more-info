import { useLayoutEffect } from 'react'
import './user.scss'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hook/useFetch'

const User = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { id } = useParams()
  const { date, error, loading } = useFetch(`/users/${id}`)

  return (
    <section className="user">
      <div className="container">
        <div className="user__wrapper"></div>
      </div>
    </section>
  )
}

export default User
