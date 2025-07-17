import './home.scss'
import Card from '../../components/card/Card'
import { useFetch } from '../../hook/useFetch'
import Skeleton from '../../components/skeleton/Skeleton'

const Home = () => {
  const { date, error, loading } = useFetch('/products')

  return (
    <section className="home">
      <div className="container">
        <div className="home__wrapper">
          <h2>Home</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            ipsam.
          </p>
          {error && <p>Error</p>}
          {loading ? <Skeleton /> : <Card date={date} />}
        </div>
      </div>
    </section>
  )
}

export default Home
