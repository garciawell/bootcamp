import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  Container, Title, Input, Dflex, Button, CtIn,
} from './styles';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';

const Modal = ({
  closeModal, handleChange, inputRepositories, getRepositoriesRequest,
}) => (
  <Container>
    <CtIn>
      <Title>Adicionar novo usuário</Title>
      <Input
        placeholder="Usuário do github"
        onChange={handleChange}
        name="inputRepositories"
        value={inputRepositories}
      />
      <Dflex>
        <Button onClick={() => closeModal()}>Cancelar</Button>
        <Button success onClick={() => getRepositoriesRequest(inputRepositories)}>
          Salvar
        </Button>
      </Dflex>
    </CtIn>
  </Container>
);

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  getRepositoriesRequest: PropTypes.func.isRequired,
  inputRepositories: PropTypes.string.isRequired,
};

// const mapStateToProps = state => ({
//   inputRepo: state.modal.inputRepo,
// });

const mapDispatchToProps = dispatch => bindActionCreators({ ...RepositoriesActions, ...ModalActions }, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Modal);
