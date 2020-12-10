import React from 'react';
import styled from 'styled-components';
import match from '../../img/sim.svg';
import nomatch from '../../img/nao.svg';

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

const ImgMatch = styled.img`
  width: 40px;
  height: auto;    
  cursor: pointer;
  :hover {
    border-radius: 1px solid white;
  }
`

const ButtonMatches = styled.button`
  background: none;
  border: none;
  box-sizing: none;
  border-radius: 50%;
`

function ChooseButtons(props) {
  
  return (
    <ButtonsContainer>
      <ButtonMatches onClick={props.onClickNo}><ImgMatch src={nomatch} alt="Users Match"/></ButtonMatches>
      <ButtonMatches onClick={props.onClickYes}><ImgMatch src={match} alt="Users Match"/></ButtonMatches>      
    </ButtonsContainer>
  );
}

export default ChooseButtons;