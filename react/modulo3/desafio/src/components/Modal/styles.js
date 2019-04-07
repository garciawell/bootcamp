import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-items: center;
  z-index: 99999;
`;
export const CtIn = styled.div`
  background: #fff;
  max-width: 350px;
  margin: 0 auto;
  width: 100%;
  padding: 25px;
  border-radius: 5px;
`;
export const Title = styled.h2`
  font-size: 17px;
  color: #333;
  font-weight: bold;
  text-align: center;
`;
export const Input = styled.input`
  border: 1px solid #777;
  height: 40px;
  flex: 1;
  margin: 25px 0;
  width: 100%;
  border-radius: 3px;
  padding: 0 10px;
`;
export const Dflex = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.button`
  background: ${props => (props.success ? 'green' : '#ccc')};
  margin-left: ${props => (props.success ? '15px' : '0')};
  color: #fff;
  padding: 15px;
  font-weight: 500;
  border: 0;
  width: 100%;
  border-radius: 5px;
`;
