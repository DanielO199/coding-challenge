import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;
export const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: solid gray 1px;
  transition: ease-in 0.3s;
  margin-bottom: 0.8rem;
  padding: 0.5rem;

  &:hover {
    transform: translateX(15px);
    transition: ease-in 0.3s;
  }
`;
