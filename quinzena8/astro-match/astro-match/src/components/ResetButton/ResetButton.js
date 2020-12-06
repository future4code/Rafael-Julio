import axios from 'axios';
import React from 'react';
import { BASE_URL } from '../constants/requests';


function ResetButton() {

  const onClickReset = () => {
      axios.put(`${BASE_URL}clear`).then((response) => {
          console.log(response)
      })
  }
  return (
    <div>
      <button onClick={onClickReset}>Resetar Curtidas e Matches</button>
    </div>
  );
}

export default ResetButton;