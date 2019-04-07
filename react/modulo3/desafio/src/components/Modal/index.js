import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  Container, Title, Input, Dflex, Button, CtIn,
} from './styles';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';

class Modal extends Component {
  state = {};

  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    getRepositoriesRequest: PropTypes.func.isRequired,
    inputRepositories: PropTypes.string.isRequired,
    cordinations: PropTypes.shape({}).isRequired,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { inputRepositories, cordinations, getRepositoriesRequest } = this.props;

    getRepositoriesRequest(inputRepositories, cordinations);
  };

  render() {
    const {
      getRepositoriesRequest,
      handleChange,
      inputRepositories,
      closeModal,
      cordinations,
    } = this.props;

    return (
      <Container>
        <CtIn>
          <Title>Adicionar novo usuário</Title>
          <form onSubmit={this.handleSubmit}>
            <Input
              placeholder="Usuário do github"
              onChange={handleChange}
              name="inputRepositories"
              value={inputRepositories}
            />
            <Dflex>
              <Button type="button" onClick={() => closeModal()}>
                Cancelar
              </Button>
              <Button type="submit" success>
                Salvar
              </Button>
            </Dflex>
          </form>
        </CtIn>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  inputRepo: state.modal.inputRepo,
  cordinations: state.modal.cordinations,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...RepositoriesActions, ...ModalActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
