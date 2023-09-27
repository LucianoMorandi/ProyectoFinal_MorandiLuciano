import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)

    const getData = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getData()
    }, [])
  return [data]
}

export default useFetch