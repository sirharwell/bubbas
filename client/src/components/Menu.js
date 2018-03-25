import React from 'react';
import { connect } from 'react-redux';
import TableBody, { Header, Container, Table, Image, Button, Segment, Divider} from 'semantic-ui-react';
import Order from './Order';
import { getItems } from '../actions/items';


class Menu extends React.Component {
  state = { cart: [] }

  componentDidMount() {
    this.props.dispatch(getItems())
  }

  addItemToCart = (item) => {
    console.log(this.state.cart)
    this.setState({ cart: [ item, ...this.state.cart ]})
  }



  items = () => {
    const { items } = this.props
  }

  render() {

    const { items } = this.props
    return (
      <div
        style={{
                backgroundImage: `url(images/stuff.jpg)`, backgroundSize: " 100% " }}>
      <Container textAlign="center">

        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Add To Cart</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {items.map( item =>
            <Table.Body key={item.id}>
              <Table.Row>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>${item.price}</Table.Cell>
                <Table.Cell><Button onClick={() => this.addItemToCart(item)} value="submit" color="green">Add To Cart</Button></Table.Cell>
              </Table.Row>
            </Table.Body>
          )}
        </Table>
      </Container>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { items: state.items }
}


export default connect(mapStateToProps)(Menu);
