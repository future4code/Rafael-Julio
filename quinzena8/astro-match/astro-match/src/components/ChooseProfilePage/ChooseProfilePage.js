import React, { useEffect, useState } from 'react';
import ChooseButtons from './ChooseButtons';
import ProfileCard from './ProfileCard';
import axios from 'axios';
import {BASE_URL} from '../../components/constants/requests';
import styled from 'styled-components';


function ChooseProfilePage() {

  const [profileToChoose, setProfileToChoose] = useState(undefined)

  const getProfileToChoose = () => {
    axios.get(`${BASE_URL}person`)
    .then(response => {
      setProfileToChoose(response.data.profile)
    })       
}

  useEffect(() => {
    getProfileToChoose()
  }, []);

  const chooseProfile = (choice) => {
    const body = {
        id: profileToChoose.id, 
        choice: choice
      }

      setProfileToChoose(undefined)

      axios.post(`${BASE_URL}choose-person`, body)
      .then((response) => {
         console.log(response)
         getProfileToChoose() 
      })
  }

  const onClickNo = () => {
    chooseProfile(false)
  }

  const onClickYes = () => {    
    chooseProfile(true)
  }

  return (
    <div>
      { profileToChoose &&
        <>
            <ProfileCard profile={profileToChoose}/>
            <ChooseButtons 
            onClickNo={onClickNo} 
            onClickYes={onClickYes}
            />
        </>   
      }
         
    </div>
  );
}

export default ChooseProfilePage;