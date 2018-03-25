import React from 'react';
import {
  Form,
  Grid,
  Image,
  Container,
  Divider,
  Header,
  Button,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/users';

const Fragment = React.Fragment;

class Profile extends React.Component {
  state = { 
    editing: false, 
    formValues: { 
      name: '', 
      email: '',
    },
  }

  componentDidMount() {
    const { user: { name, email }} = this.props
    this.setState({ formValues: { name, email} })
  }

  toggleEdit = () => {
    this.setState( state => {
      return { editing: !state.editing }
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formValues: { name, email }} = this.state;
    const { user, dispatch } = this.props;
    dispatch(updateUser(user.id, { name, email }))
    this.setState({
      editing: false,
      // formValues: {
      //   ...this.state.formValues,
      //   file: ''
      // }
    })
  }

  profileView = () => {
    const { user } = this.props;
    return (
      <Fragment>
        <Grid.Column width={8}>
          <Header as="h1">{user.name}</Header>
          <Header as="h1">{user.email}</Header>
        </Grid.Column>
      </Fragment>
    )
  }

  // onDrop = (files) => {
  //   this.setState({
  //     formValues: {
  //       ...this.state.formValues,
  //       file: files[0]
  //     }
  //   })
  // }

  editView = () => {
    const { formValues: { name, email } } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Grid.Column width={8}>
          <Form.Input
            label="Name"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            name="email"
            value={email}
            type="email"
            required
            onChange={this.handleChange}
          />
          <Button>Update</Button>
        </Grid.Column>
      </Form>
    )
  }

  render() {
    const { editing } = this.state;
    return (
      <Container>
        <Divider hidden />
        <Grid>
          <Grid.Row>
            { editing ? this.editView() : this.profileView() }
            <Grid.Column>
              <Button onClick={this.toggleEdit}>
                { editing ? 'Cancel' : 'Edit' }
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )

  }

}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Profile)



