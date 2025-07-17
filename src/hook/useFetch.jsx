import { useEffect, useState } from 'react'
import { api } from '../api/index'

export const useFetch = (endpoind, params) => {
  const [date, setDate] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    api
      .get(endpoind, { params })
      .then((res) => setDate(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [endpoind, JSON.stringify(params)])

  return { date, error, loading }
}
