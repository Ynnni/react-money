import React from 'react'

export default class AccountForm extends React.Component {
  constructor () {
    super()
    this.state = { name: '' }
  }

  handleChange (e) {
    this.setState({ name: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    fetch(`${API_URI}/accounts`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        account: this.state
      })
    })
    .then(response => response.json())
    .then(account => {
        this.props.add(account)
        this.clearState()
    })
  }

  clearState () {
    this.setState({ name: '' })
  }

  valid () {
    this.state.name
  }

  render () {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </div>
        </div>
      </form>
    )
  }
}
