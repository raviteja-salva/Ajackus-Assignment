import React from 'react';
import { 
  FormContainer, 
  StyledForm, 
  FormRow, 
  InputGroup, 
  StyledInput, 
  InputLabel, 
  SubmitButton,
  FormTitle
} from './UserForm.Style';

const UserForm = ({ formData, onSubmit, onChange, editingUser }) => (
  <FormContainer>
    <FormTitle>{editingUser ? 'Edit User Details' : 'Add New User'}</FormTitle>
    <StyledForm onSubmit={onSubmit}>
      <FormRow>
        <InputGroup>
          <StyledInput
            id="firstName"
            value={formData.firstName}
            onChange={(e) => onChange({ ...formData, firstName: e.target.value })}
            required
          />
          <InputLabel htmlFor="firstName">First Name</InputLabel>
        </InputGroup>
        <InputGroup>
          <StyledInput
            id="lastName"
            value={formData.lastName}
            onChange={(e) => onChange({ ...formData, lastName: e.target.value })}
            required
          />
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
        </InputGroup>
      </FormRow>
      <FormRow>
        <InputGroup>
          <StyledInput
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => onChange({ ...formData, email: e.target.value })}
            required
          />
          <InputLabel htmlFor="email">Email</InputLabel>
        </InputGroup>
        <InputGroup>
          <StyledInput
            id="department"
            value={formData.department}
            onChange={(e) => onChange({ ...formData, department: e.target.value })}
            required
          />
          <InputLabel htmlFor="department">Department</InputLabel>
        </InputGroup>
      </FormRow>
      <SubmitButton type="submit">
        {editingUser ? 'Update User' : 'Add User'}
      </SubmitButton>
    </StyledForm>
  </FormContainer>
);

export default UserForm;