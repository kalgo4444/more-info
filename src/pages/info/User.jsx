import { useLayoutEffect } from 'react'

const User = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return <div>User</div>
}

export default User
