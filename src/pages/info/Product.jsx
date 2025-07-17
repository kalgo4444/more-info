import { useLayoutEffect } from 'react'

const Info = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <div>Product</div>
}

export default Info
