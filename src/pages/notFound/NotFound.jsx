import { useNavigate } from 'react-router-dom'
import './notf.scss'

const NotFound = () => {
  const navigation = useNavigate()

  return (
    <section>
      <div class="container1">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <div class="buttons">
          <button onClick={() => navigation(-1)}>Go Back</button>
          <button onClick={() => navigation('/')} class="home-button">
            Home
          </button>
        </div>
      </div>
    </section>
  )
}

export default NotFound
