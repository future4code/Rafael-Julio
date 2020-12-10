import React from 'react';
import styled from 'styled-components';
import users from '../../img/person.svg'
import tinder from '../../img/tinder.svg'


const AppBarContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    padding: 0 10px;
    background-color: black;
`

const ButtonImgList = styled.button`
  position: absolute;
  right: 15px;  
  background: none;
  border: none;
  box-sizing: none;
  border-radius: 50%;
`

const ButtonImg = styled.button`
  position: absolute;
  left: 15px;  
  background: none;
  border: none;
  box-sizing: none;
  border-radius: 50%;
`

const ColorTitle = styled.span`
  color: #9400D3;
  font-size: 24px;
`

const ColorTitle2 = styled.p`
  color: #007b80;
  font-size: 24px;
`

const ImgUsers = styled.img`
  width: 40px;
  height: auto;
  border-radius: 50%;  
  
  :hover {
    width: 45px;
    cursor: pointer;
  }  
`


function AppBar(props) {  
  return (
    <AppBarContainer>
      <ButtonImg onClick={props.goToChooseProfilePage}><ImgUsers src={tinder} alt="Users Match"/></ButtonImg>
      <ColorTitle2>astro<ColorTitle>match</ColorTitle></ColorTitle2>      
      <ButtonImgList onClick={props.goToMatchListPage}><ImgUsers src={users} alt="Users Match"/></ButtonImgList>
    </AppBarContainer>
  );
}

export default AppBar;