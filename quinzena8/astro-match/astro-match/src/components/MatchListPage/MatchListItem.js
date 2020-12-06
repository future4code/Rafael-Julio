import React from 'react';
import styled from 'styled-components';

const ListItemContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid gray;

    :hover {
        background-color: rgba(0,0,0,0.3)
    }
`
const Avatar = styled.img`
    border-radius: 50%;
    margin: 0 10px;
    height: 30px;
    width: 30px;
`

const ProfileName = styled.p`
  color: white;
`

function MatchListItem(props) {
  const profile = props.profile;
  return (
    <ListItemContainer>
       <Avatar src={profile.photo} />
       <ProfileName>{profile.name}</ProfileName>     
    </ListItemContainer>
  );
}

export default MatchListItem;