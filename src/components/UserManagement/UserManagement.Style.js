import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const LoadingSpinner = styled.div`
  text-align: center;
  padding: 20px;
  color: #666;
`;

export const ErrorMessage = styled.div`
  background: #fff2f2;
  color: #d63031;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 16px;
`;
