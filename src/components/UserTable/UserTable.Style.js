// UserTable.Style.js
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shine = keyframes`
  to {
    background-position: 200% center;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-bottom: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const Th = styled.th`
  text-align: left;
  padding: 16px;
  background: linear-gradient(
    110deg,
    #f5f7fa 0%,
    #e4e7eb 30%,
    #f5f7fa 50%,
    #e4e7eb 70%,
    #f5f7fa 100%
  );
  background-size: 200% auto;
  color: #2d3748;
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 2px solid #edf2f7;
  transition: all 0.3s ease;
  position: relative;

  &:first-child {
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
  }

  &:hover {
    background-position: right center;
    animation: ${shine} 2s linear infinite;
    color: #1a202c;
  }
`;

export const Tr = styled.tr`
  transition: all 0.2s ease;

  &:hover {
    background-color: #f7fafc;
    transform: translateX(4px);
  }
`;

export const Td = styled.td`
  padding: 16px;
  border-bottom: 1px solid #edf2f7;
  color: #4a5568;
  font-size: 0.95rem;
  line-height: 1.5;
  transition: all 0.2s ease;

  &:first-child {
    font-weight: 500;
  }
`;

export const ActionButton = styled.button`
  padding: 8px 16px;
  margin: 0 4px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.variant === 'delete' ? '#FED7D7' : '#E6FFFA'};
  color: ${props => props.variant === 'delete' ? '#C53030' : '#2C7A7B'};

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background: ${props => props.variant === 'delete' ? '#FEB2B2' : '#B2F5EA'};
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;