import React from 'react'

export default function withLoading(WrappedComponent, {url}) {
  
  const API_URL = 'http://localhost:3001/'
  return class extends React.Component {
    state = {
      data: [],
      errorMessage: ''
    }
    componentDidMount() {
      setTimeout(() => {
        fetch(API_URL + url).then(response => response.json())
          .then(data => this.setState({data}))
          .catch(e => this.setState({errorMessage: 'Houve um erro ao buscar os dados'}))
          
      }, 2000)
    }

    render() {
      if(this.state.data.length > 0) {
        return(<WrappedComponent data={this.state.data}/>)
      } else {
        return(<span>{this.state.errorMessage || 'Loading...'}</span>)
      }
    }
  }
}