import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  border: 1px solid black;
`

export const DivPlaylist = styled.div`
  width: 20vw;
  height: 80vh;
  background-color: #696969;
  border-right: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;  
`
export const TituloLabel = styled.label`
  font-size: 18px;
  margin-top: 20px;
`

export const InputPlaylist = styled.input`
  width: 70%;
  height: 20px;
  border-style: none;
  margin-top: 20px;
`

export const ButtonList = styled.button`
  width: 70%;
  height: auto;
  color: white;
  margin-top: 15px;
  background-color: #fe7e02;
  border: none;

  hover: {
    background-color: #f9b24e;
  }
`






