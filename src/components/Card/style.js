import styled from "@emotion/styled"

export const CardDashboard = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
  width: 100%;
  padding: 20px;
  justify-content: space-around;
  background-color: ${prop => prop.color && `${prop.color}`};
  border-radius: 15px;

  label {
    font-weight: 700;
    color: #fff;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const CardImage = styled.div`
  width: 100px;
  height: 100px;
  background-image: ${prop => prop.src && `url(${prop.src})`};
  background-size: contain;
  background-repeat: no-repeat;
`;