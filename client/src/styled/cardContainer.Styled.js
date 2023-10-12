import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  max-width: 1450px;
  justify-content: center;
  
  & > * {
    flex: 1 1 200px;
  }
`;