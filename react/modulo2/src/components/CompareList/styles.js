import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const ButtonRefresh = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  padding: 5px;
  border: 0;
  color: #9b65e6;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  position: relative;

  header {
    padding: 30px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  strong {
    font-size: 24px;
    margin-top: 10px;
  }

  small {
    font-size: 14px;
    color: #666;
  }

  img {
    width: 64px;
  }

  ul {
    list-style: none;
    width: 100%;
    margin-top: 30px;
    li {
      font-weight: bold;
      padding: 12px 20px;
      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        margin-left: 5px;
        font-style: italic;
      }
      &:nth-child(2n-1) {
        background: #f5f5f5;
      }
    }
  }
  button {
    position: absolute;
    top: 0;
    right: ${props => (props.left ? '50px' : '0')};
    background: #fafafa;
    border: 1px solid #777;
    cursor: pointer;
    padding: 5px;
    border: 0;
    &:hover {
      background: #b63032;
      i {
        color: #fff;
      }
    }
    i {
      color: #e23337;
      font-size: 18px;
    }
  }
`;
