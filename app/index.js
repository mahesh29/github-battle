import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'

// Components can have 
// Component
// State
// LifeCycle
// UI

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    )
  }
}

ReactDOM.render(
  // React Element,
  <App />,
  // Where to render
  document.getElementById('app')
)