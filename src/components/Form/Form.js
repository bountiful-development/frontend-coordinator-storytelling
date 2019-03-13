import styled from 'styled-components';

export const Form = styled.form`
  background: #fff;
  padding: 2rem 5rem;
  width: 600px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    label {
      text-transform: uppercase;
      font-weight: 700;
    }
    input,
    textarea,
    select {
      background: #fafafa;
      border-radius: 5px;
      padding: 1rem;
      font-size: inherit;
      width: 100%;
      border: 1px solid #e6e6e6;
      font-family: inherit;
      &:focus {
        outline: none;
        border: 1px solid #ed9728;
      }
    }

    select {
      height: 3.6rem;
    }
  }
`;

export const SubmitButton = styled.button`
  background: #ed9728;
  font-size: inherit;
  padding: 1rem 1.5rem;
  display: flex;
  text-transform: uppercase;
  font-family: inherit;
  color: #fff;
  font-weight: 700;
  border: transparent;
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  margin: auto;
  margin-bottom: 3rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #edaf5f;
  }
`;

export const RedirectA = styled.div`
  font-size: 1.4rem;
  text-align: center;
  a {
    margin-left: 8px;
    color: #ed9728;
  }
`;
