import React, {useEffect, useMemo, useState, useContext} from 'react'
import Store from './../../../context'

import styles from './AppGames.module.css'



const CheckIt = ({setWordIndex, wordIndex, speak}) =>{
  
  const data = useContext(Store)
  console.log(data)
    
  const randomWords = useMemo(() => data.playWords.sort(() =>Math.random()-0.5),[])
  const [currentWords, setCurrentWords] = useState(['random', 'correct', 'random2'])

  useEffect(() =>{
    setCurrentWords([
      randomWords[wordIndex].word,
      randomWords[(wordIndex + 1)%randomWords.length].word,
      randomWords[(wordIndex + 2)%randomWords.length].word,
    ].sort(() => Math.random()-0.5))
  },[data.correctWords])
  const CheckWord = (word) => {    
    if (word === randomWords[wordIndex].word){
      speak(randomWords[wordIndex].translate)
      data.setCorrectWords(data.correctWords + 1)
      if( wordIndex !== data.playWords.length - 1 ){
          setWordIndex( wordIndex + 1 )
    }else{
      alert('Game is over')
    }
     
    }else{
      data.setErrorWords(data.errorWords + 1)
      
    }

  }
    return(
        <section>
            <span>Write a translation for this word</span>
            <h3>{randomWords[wordIndex].translate}</h3>        
            <ul className={styles.btnContainer}>
                {currentWords.map((word, index)=>(
                    <li className={styles.btnCheck} onClick={()=> CheckWord(word)}>{word}</li>
            ))}
            </ul>
        </section>
    )
}
export default CheckIt