import styled from "styled-components";

export const DivMainPlaylist = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
`

export const DivPlaylist = styled.div`
  width: 20vw;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
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
  width: 200px;
  height: 30px;
  color: white;
  margin-top: 15px;
  background-color: #fe7e02;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: #FFA500;
    border: 1px solid white;
  }  
`

export const DivPlay = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;  
  background-size: cover;
  color: white;
  background-color: rgba(0, 0, 0, .5);
`

export const VisualPlay = styled.div`
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  border: 5px solid green;
  border-radius: 8px;
  padding: 30px;
  align-items: center;
  overflow-y: auto;
`

export const DivPlayList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`

export const TitlePLay = styled.h1`
  color: #fe7e02;
`

export const ButtonPlay = styled.button`
  border-style: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
  
  :hover {
    color: red;    
  }
`






