import { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hook/useFetch'
import './product.scss'
import { RiStarSFill } from 'react-icons/ri'

const Info = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { id } = useParams()
  const { date, error, loading } = useFetch(`/products/${id}`)

  return (
    <>
      {error && <p>Error</p>}
      <section className="product">
        <div className="container">
          <div className="product__wrapper">
            <div className="product__left">
              <h2 className="product__left-title">{date?.title}</h2>
              <p className="product__left-category">{date?.category}</p>
              <div className="product__left-img">
                <img src={date?.image} alt="" />
              </div>
              <div className="product__left-rating">
                {date?.rating.rate}
                <div>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
              </div>
              <div className="product__left-desc">
                <p>{date?.description}</p>
              </div>
            </div>
            <div className="product__right">
              <strong className="product__right-price">
                <s>
                  <span>{date?.price} USD</span>
                </s>{' '}
                -- <span>1 USD</span>
              </strong>
              <p className="product__right-sale">Cheaper price</p>
              <div className="product__right-tags">
                <span>cheaper price</span>
                <span>super price</span>
              </div>
              <button className="product__right-btn">Add to wash list</button>
              <div className="product__right-count">
                <p>{date?.rating.count} count of item can buy</p>
                <p>This week 1512 people buy this</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Info
