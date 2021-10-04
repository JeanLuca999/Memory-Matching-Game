import { useEffect, useState } from 'react'
import './style.css'

export default function Card({srcImage, handleVerify, verify, setVerify}) {
  const [currentCardClass, setCurrentCardClass] = useState('card')
  const [currentCardImageClass, setCurrentCardImageClass] = useState('card__img card__img--hidden')
  const [correct, setCorrect] = useState(false)

  function handleClick() {
    setCurrentCardImageClass('card__img')
    setCurrentCardClass('card card--rotate')
  }

  useEffect(() => {
    if(verify.length === 2 && verify[0] !== verify[1] && correct === false) {
      window.setTimeout(() => {
        setCurrentCardClass('card');
        setCurrentCardImageClass('card__img card__img--hidden')
        setVerify([])
      },1000)
    } else if (verify.length === 2 && verify[0] === verify[1] && srcImage === verify[0]) {
      setVerify([])
      setCorrect(true)
      console.log('acertou')
    }
  }, [verify, correct, setVerify, srcImage])

  return (
    <figure className={currentCardClass} onClick={() => {handleClick(); handleVerify(srcImage)}}>
      <img className={currentCardImageClass} src={srcImage} alt="card item"></img>
    </figure>
  )
}