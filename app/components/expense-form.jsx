class ExpenseForm extends React.Component {
  constructor () {
    super()
    this.state = {
      amount: 0,
      date: (new Date).toJSON().replace(/T.*$/,''),
      description: null
    }
  }

  handleChange (e) {
    this.state[e.target.name] = e.target.value
    this.setState(this.state)
  }

  handleSubmit (e) {
    e.preventDefault()
    // send form this
  }

  render () {
    return (
      <form className="form" onSubmit={this.handleSubmit.bind(this)}>
        // <div className="form-group">
        //   <label htmlFor="currency">Currency</label>
        //   <select className="form-control" id="currency_id" name="currency_id" onChange={this.handleChange.bind(this)}>
        //     <option value="1">UAH</option>
        //     <option value="2">USD</option>
        //   </select>
        // </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="number" className="form-control" id="amount" name="amount" value={this.state.amount} onChange={this.handleChange.bind(this)}/>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" className="form-control" id="date" name="date" value={this.state.date} onChange={this.handleChange.bind(this)}/>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea type="text" className="form-control" name="description" id="description" value={this.state.description} onChange={this.handleChange.bind(this)}/>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Create Expense
          </button>
        </div>
      </form>
    )
  }
}
