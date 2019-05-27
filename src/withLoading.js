import React from 'react'

export default function withLoading(WrappedComponent) {
  return class extends React.Component {
    state = {
      data: []
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({data: [
          {
            name: "João",
            lastname: "Ninguém"
          }, {
            name: "Jorge",
            lastname: "Alguém"
          }] 
        })
      }, 2000)
    }

    render() {
      if(this.state.data.length > 0) {
        return(<WrappedComponent data={this.state.data}/>)
      } else {
        return(<span>Loading...</span>)
      }
    }
  }
}