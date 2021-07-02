import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  display: block;
  border-radius: 5px;
  border: solid gray 1px;
  transition: ease-in 0.3s;
  text-decoration: none;
  color: inherit;
  margin-bottom: 0.8rem;
  width: 30%;
  padding: 0.5rem;

  &:hover {
    transform: translateX(15px);
    transition: ease-in 0.3s;
    cursor: pointer;
  }
`;
