import React from 'react';
import { HeaderContainer, Title, TitleWrapper, HeaderButton, Highlight } from './Header.Style';

const Header = ({ onAddUser }) => (
  <HeaderContainer>
    <TitleWrapper>
      <Title>User <Highlight>Management</Highlight></Title>
    </TitleWrapper>
    <HeaderButton onClick={onAddUser}>
      <span>Add User</span>
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </HeaderButton>
  </HeaderContainer>
);

export default Header;



// import React from 'react';
// import { HeaderContainer, Title } from './Header.Style';
// import { Button } from '../Button/Button.Style';

// const Header = ({ onAddUser }) => (
//   <HeaderContainer>
//     <Title>User Management</Title>
//     <Button onClick={onAddUser}>Add User</Button>
//   </HeaderContainer>
// );

// export default Header;