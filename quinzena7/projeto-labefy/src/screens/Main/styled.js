import styled from "styled-components";

export const DivContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: black;
  background-image: url("https://www.ppt-backgrounds.net/uploads/background-music-high-resolution-was-added-by-diana-at-october-28---clipart-presentation.jpeg");
  background-size: cover;
`
export const DivHeader = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .5);
  border-bottom: 2px ridge white;
`

export const LogoImg = styled.img`
  height: 60px;
`

export const TituloLogo = styled.p`
  font-size: 24px;
  color: white;
`

export const DivMain = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
`

export const DivFooter = styled.div`
  width: 100vw;
  height: 10vh;
  border-top: 1px solid white;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
`