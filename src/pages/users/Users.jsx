import './users.css'
import UserCard from '../../components/card/UserCard'
import { useFetch } from '../../hook/useFetch'
import Skeleton from '../../components/skeleton/Skeleton'

const Users = () => {
  const { date, error, loading } = useFetch('/users')

  return (
    <section className="home">
      <div className="container">
        <div className="home__wrapper">
          <h2>Users</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            ipsam.
          </p>
          {error && <p>Error</p>}
          {loading ? <Skeleton /> : <UserCard date={date} />}
        </div>
      </div>
    </section>
  )
}

export default Users
