import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  padding-top:30px;
`;

export const FormRegister = styled.form`
  width: 70%;
  font-weight: bold;
  display:flex;
  flex-direction:column;
  justify-content:center;


  input {
    margin-bottom: 20px;
  }

  .label-register {
    
  }
`;

export const CardSeusAnimais = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #00A859;
  padding: 10px;
`
export const CardTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background:#00A859;
  color:white;
  border-radius:10px;
  margin-bottom:50px;
`
export const Logo = styled.div`
  background-image: ${props => `url(${props.src})`};
  height: 100px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  justify-content:center;
  margin-bottom: 50px;
`;
