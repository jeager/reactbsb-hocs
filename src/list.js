import React from 'react'
import withLoading from './withLoading';

const listComponent = ({data}) => {
  return (
    <ul data-testid="people-list">
      {data.map(item => 
        <li key={item.name}>{`${item.name} ${item.lastname}`}</li>
      )}
    </ul>
  )
}

export default withLoading(listComponent, {
  url: 'person-data'
})