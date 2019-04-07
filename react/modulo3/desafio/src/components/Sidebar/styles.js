import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 90%;
  position: absolute;
  background: #fff;
`;

export const List = styled.li`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 45px;
  height: 45px;
  background: #ddd;
  border: 4px solid #993399;
  border-radius: 50px;
`;

export const Title = styled.h3`
  color: #444;
  font-size: 16px;
  font-weight: bold;
`;

export const Subtitle = styled.span`
  color: #777;
  font-size: 14px;
`;

export const Icon = styled.i`
  background: #f00;
  color: #fff;
  border-radius: 50%;
  width: 35px;
  height: 35px;
`;
