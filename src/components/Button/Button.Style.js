import styled from 'styled-components';

export const Button = styled.button`
  background: ${props => props.variant === 'outlined' ? 'white' : '#0066cc'};
  color: ${props => props.variant === 'outlined' ? '#0066cc' : 'white'};
  border: ${props => props.variant === 'outlined' ? '2px solid #0066cc' : 'none'};
  padding: ${props => props.size === 'large' ? '12px 24px' : props.size === 'small' ? '6px 12px' : '8px 16px'};
  border-radius: 6px;
  cursor: pointer;
  font-size: ${props => props.size === 'large' ? '16px' : props.size === 'small' ? '12px' : '14px'};
  font-weight: 600;
  transition: all 0.3s ease;
  min-width: ${props => props.fullWidth ? '100%' : 'auto'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    background: ${props => props.variant === 'outlined' ? '#f0f7ff' : '#0052a3'};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.3);
  }

  @media (max-width: 768px) {
    padding: ${props => props.size === 'large' ? '10px 20px' : props.size === 'small' ? '5px 10px' : '7px 14px'};
    font-size: ${props => props.size === 'large' ? '15px' : props.size === 'small' ? '11px' : '13px'};
  }
`;

export const ActionButton = styled(Button)`
  padding: ${props => props.size === 'large' ? '10px' : props.size === 'small' ? '4px' : '6px'};
  margin-left: 8px;
  border-radius: 8px;
  
  &:hover {
    background: ${props => props.variant === 'outlined' ? '#f0f7ff' : '#0052a3'};
  }

  @media (max-width: 768px) {
    margin-left: 6px;
    padding: ${props => props.size === 'large' ? '8px' : props.size === 'small' ? '3px' : '5px'};
  }
`;


// import styled from 'styled-components';

// export const Button = styled.button`
//   background: ${props => props.variant === 'outlined' ? 'white' : '#0066cc'};
//   color: ${props => props.variant === 'outlined' ? '#0066cc' : 'white'};
//   border: ${props => props.variant === 'outlined' ? '1px solid #0066cc' : 'none'};
//   padding: 8px 16px;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 14px;
//   transition: all 0.2s;

//   &:hover {
//     opacity: 0.9;
//   }

//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

// export const ActionButton = styled(Button)`
//   padding: 6px;
//   margin-left: 8px;
// `;
