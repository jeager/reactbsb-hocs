import React, {useState, useEffect} from 'react'

export default function withLoading(WrappedComponent, {url}) {
  
  const API_URL = 'http://localhost:3001/'
  
  return function() {
    const [data, setData] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
      fetch(API_URL + url).then(response => response.json())
          .then(data => setData(data))
          .catch(e => setErrorMessage('Houve um erro ao buscar os dados'))
    },[])

    if(data.length > 0) {
      return(<WrappedComponent data={data}/>)
    } else {
      return(<span>{errorMessage || 'Loading...'}</span>)
    }
  }
}