import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 90%;
  position: fixed;
  background: #fff;
  z-index: 999;
  left: 50px;
  top: 5%;
  border-radius: 5px;
`;

export const List = styled.ul`
  padding: 15px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
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
  background: #bd0000;
  color: #fff;
  width: 22px;
  height: 22px;
  display: inline-block;
  font-weight: bold;
  border-radius: 50%;
  text-align: center;
  align-items: center;
  /* line-height: 2px; */
  display: flex;
  font-style: normal;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
`;
