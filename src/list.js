import React from 'react'
import withLoading from './withLoading';

const listComponent = ({data}) => {
  return (
    <ul>
      {data.map(item => 
        <li>{`${item.name} ${item.lastname}`}</li>
      )}
    </ul>
  )
}

export default withLoading(listComponent)