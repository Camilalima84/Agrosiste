import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FormRegister = styled.form`
  width: 70%;
  font-weight: bold;

  input {
    margin-bottom: 20px;
  }

  .label-register {
    
  }
`;

export const ContentActions = styled.div`
  display: flex;
  width: 100%; 
  justify-content: space-between;
  padding-top:15px;
  font-weight: bold;
 
  font-size:20px;


`;

export const UploadImage = styled.section`
  padding: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background: #d9d9d9;
  border-radius: 50%;
  margin: 50px 0;
  font-size:15px;
`;