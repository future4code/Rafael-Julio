import React, { useEffect, useState} from 'react';
import MatchListItem from './MatchListItem';
import axios from 'axios';
import { BASE_URL } from '../constants/requests'
import styled from 'styled-components';

const ListContainer = styled.div`
    padding: 8px;
`

function MatchListPage() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}matches`)
    .then(response => {
      setMatches(response.data.matches)
    })       
}, []);

  return (
    <ListContainer>
      {matches.map((profile) => {
          return <MatchListItem profile={profile} />
      })}      
    </ListContainer>
  );
}

export default MatchListPage;