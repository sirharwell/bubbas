import React from 'react'
import { connect } from 'react-redux'
import { List, Form, Divider, Grid, Button } from 'semantic-ui-react'
import { getItems } from '../actions/items'

class Order extends React.Component {
  state = { order: [] }

  componentDidMount() {
    this.props.dispatch(getItems())
    debugger
  }

  render() {

    const { items } = this.props
    return (
      <div></div>
    )
  }
}

const mapStateToProps = (state) => {
  return { items: state.items, user: state.user }
}

export default connect(mapStateToProps)(Order)