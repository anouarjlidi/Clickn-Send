import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

import './formFacture.scss';

class CreateFacture extends React.Component {
  state = {
    clients : [],
    modal: false,
    backdrop: true,
  }

  componentDidMount() {
    axios.get('/api/customers')
      .then(({data:clients}) => {
        console.log(clients)
        this.setState({
          clients,
        });
      });
  }
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  changeBackdrop = (e) => {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  getClientJSX = () => {
    return this.state.clients.map((client) => {
      const valueModal = client.pro ? client.customerCompany : client.lastname;
      return <option key={client.id} value={valueModal}>{valueModal}</option>;
    });
  }

  
  render() {
    return (
      <div>
        <Form inline onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
            <Label for="backdrop">Backdrop value</Label>{' '}
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              {this.getClientJSX()}           
            </Input>
          </FormGroup>
          {' '}
          <Button color="danger" onClick={this.toggle}>ma modal</Button>
        </Form>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div> 
    );
  }
}

CreateFacture.propTypes = {};

export default reduxForm({
  form: 'facture',
})(CreateFacture);


