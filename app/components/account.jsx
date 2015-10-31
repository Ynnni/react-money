import React from 'react'
import ReactDOM from 'react-dom'

export default class Account extends React.Component {
  constructor () {
    super()
    this.state = { edit: false }
  }

  toggle (e) {
    e.preventDefault()
    this.setState({ edit: !this.state.edit })
  }

  update (e) {
    e.preventDefault()
    fetch(`//localhost:3000/api/accounts/${ this.props.account.id }`,{
      headers: {
        'Content-Type': 'application/json'
      },
      method:'PATCH',
      body: JSON.stringify({
        account: {
          name: ReactDOM.findDOMNode(this.refs.name).value
        }
      })
    })
    .then(response => response.json())
    .then((json) => {
      this.setState({ edit: false })
      this.props.update(this.props.account, json)
    })
  }

  delete (e) {
    e.preventDefault()
    fetch(`//localhost:3000/api/accounts/${ this.props.account.id }`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
    .then(() => {
        this.props.delete(this.props.account)
    })
  }

  row () {
    return (
      <tr>
        <td>{this.props.account.id}</td>
        <td>{this.props.account.name}</td>
        <td>
          <button className="btn btn-default" onClick={this.toggle.bind(this)}>Edit</button>
          <button className="btn btn-danger" onClick={this.delete.bind(this)}>Delete</button>
        </td>
      </tr>
    )
  }

  form () {
    return(
      <tr>
        <td>{this.props.account.id}</td>
        <td>
          <input className="form-control" type="text" defaultValue={this.props.account.name} ref="name"></input>
        </td>
        <td>
          <button className="btn btn-default" onClick={this.update.bind(this)}>Update</button>
          <button className="btn btn-default" onClick={this.toggle.bind(this)}>Cancel</button>
        </td>
      </tr>
    )
  }

  render () {
    if (this.state.edit){
      return this.form()
    } else {
      return this.row()
    }
  }
}
