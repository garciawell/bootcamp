import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 90%;
  position: absolute;
  background: #fff;
  z-index: 999;
  left: 50px;
  top: 5%;
`;

export const List = styled.ul`
  padding: 15px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.h3`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;

export const SubTitle = styled.span`
  color: #777;
  font-size: 16px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid pink;
`;

export const Icon = styled.i`
  background: #f00;
  color: #fff;
`;
