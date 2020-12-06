import React from 'react';
import styled from 'styled-components';

const ProfileCardContainer = styled.div`
    margin: 18px;
    border: 1px solid black;    
`

const ProfilePicture = styled.img`
    width: 100%;
    display: block;
    max-height: 350px;
`
const ProfileInfo = styled.div`
   padding: 0 16px; 
`

const TitleBio = styled.h1`
  font-size: 1.4rem;
  color: #9400D3;  
`

const BioP = styled.p`
  font-size: 0.8rem;
  color: #007b80;
  margin-top: 10px;
`

function ProfileCard(props) {
  const profile = props.profile;
  return (
    <ProfileCardContainer>
      <ProfilePicture src={profile.photo} />
      <ProfileInfo>
        <TitleBio>{profile.name}, {profile.age}</TitleBio>
        <BioP>{profile.bio}</BioP>
      </ProfileInfo>
     
    </ProfileCardContainer>
  );
}

export default ProfileCard;