import styled from "@emotion/styled";

export const HeadignProfile = styled.header`
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;

  .title-heading {
    font-weight: 700;
    color: #00A859;
    font-size: 20px;
  }
`;

export const ImageProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  background: #D9D9D9;
  border-radius: 50%;
`;
export const Logo = styled.div`
  background-image: ${props => `url(${props.src})`};
  width:100px;
  height:50px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  margin-bottom:20px;
  padding:10px;
  
`;
export const ContentActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding:50px;
  
`;