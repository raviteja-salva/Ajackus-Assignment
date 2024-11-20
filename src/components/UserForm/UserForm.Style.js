// UserForm.Style.js
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

export const FormContainer = styled.div`
  max-width: 900px;
  margin: 3rem auto;
  padding: 0 1.5rem;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const FormTitle = styled.h2`
  color: #1a202c;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  text-align: center;
  letter-spacing: -0.5px;
`;

export const StyledForm = styled.form`
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08),
              0 2px 4px rgba(0, 0, 0, 0.05),
              0 12px 24px rgba(0, 0, 0, 0.05);
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right:30px;
  margin-top:20px;
`;

export const InputLabel = styled.label`
  position: absolute;
  left: 1.25rem;
  top: 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  color: #64748b;
  pointer-events: none;
  transition: all 0.2s ease;
  background: transparent;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1.2rem 1.25rem;
  font-size: 1rem;
  font-weight: 500;
  color: #1a202c;
  background: #f8fafc;
  border: 2px solid #f1f5f9;
  border-radius: 12px;
  transition: all 0.2s ease;

  &::placeholder {
    color: transparent;
  }

  &:hover {
    background: #f1f5f9;
    border-color: #e2e8f0;
  }

  &:focus {
    outline: none;
    background: white;
    border-color: #3b82f6;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
  }

  &:focus ~ ${InputLabel}, 
  &:not(:placeholder-shown) ~ ${InputLabel} {
    transform: translateY(-3.5rem) translateX(-0.5rem);
    font-size: 0.875rem;
    font-weight: 600;
    color: #3b82f6;
  }
`;


export const SubmitButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: #3b82f6;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 0.3px;

  &:hover {
    background: #2563eb;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3);
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    transform: none;
  }
`;