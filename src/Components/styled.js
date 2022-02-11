import styled from "styled-components";

export const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 2rem;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    cursor: pointer;
    box-shadow: 5px 10px 20px 20px rgba(0, 0, 0, 0.253);
    transform: scale(1.1);
    transition: all 2s ease-out;
  }
`;
export const ImgInfo = styled.div`
width: 100%;
  height: 100%;
  text-align:center;
  
  font-family: Big Caslon;
  box-shadow: 5px 10px 20px 20px rgba(0, 0, 0, 0.253);
 
  }
`;
export const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

export const H1 = styled.h1`
  font-family: Big Caslon;
  margin-bottom: 1em;
`;
export const MainWarpper = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1.5em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;
