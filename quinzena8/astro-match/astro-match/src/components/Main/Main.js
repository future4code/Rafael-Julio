import React, { useEffect, useState} from 'react';
import AppBar from '../AppBar/AppBar';
import styled from 'styled-components';
import ChooseProfilePage from '../ChooseProfilePage/ChooseProfilePage';
import MatchListPage from '../MatchListPage/MatchListPage';

const MainContainer = styled.div`
  width: 400px;
  height: 600px;
  border: 3px solid black;
  background-color: black;
  border-radius: 8px;
  margin: 30px;
  display: flex;
  flex-direction: column;
`

function Main() {
  const [selectedPage, setSelectedPage] = useState('choose-profile')

  const renderSelectedPage = () => {
    switch(selectedPage) {
      case 'choose-profile':
        return <ChooseProfilePage/>
      case 'choose-list':
        return <MatchListPage/>
      default:
        return <ChooseProfilePage/>
    }
  }

  const goToChooseProfilePage = () => {
    setSelectedPage('choose-profile')
  }

  const goToMatchListPage = () => {
    setSelectedPage('choose-list')
  }

  return (
    <MainContainer>
      <AppBar 
        goToChooseProfilePage={goToChooseProfilePage} 
        goToMatchListPage={goToMatchListPage}
      />
      {renderSelectedPage()}
    </MainContainer>
  );
}

export default Main;