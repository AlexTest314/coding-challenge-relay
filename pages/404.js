import { styled } from "styled-components";

const StyledErrorHeader = styled.h1`
  align-self: center;
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  vertical-align: top;
  line-height: 49px;
`;

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Custom404 = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledErrorHeader>404 - {children}</StyledErrorHeader>
    </StyledWrapper>
  );
};

export default Custom404;
