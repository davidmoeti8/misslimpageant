import React from 'react';
import {ContestantsList} from '../helpers/ContestantsList';
import ContestantsItem from '../components/ContestantsItem';
import '../styles/Contestants.css'

function Contestants (){
    return(
        <div className='contestants' >
          <h1 className='contestantsTitle'>Our Contestants</h1>
          <div className='contestantsList'>
           {ContestantsList.map((contestantsItem, key)=>{
             return <ContestantsItem key={key} image={contestantsItem.image} name={contestantsItem.name} quote={ContestantsItem.quote} />
           })}
          </div>
        </div>
    )
}

export default Contestants