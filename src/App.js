import './App.css'
import Card from './components/Card'
import Header from "./components/Header"
import Wrapper from './components/Wrapper'

import jsLogo from './Assets/js.png'
import cssLogo from './Assets/css.png'
import githubLogo from './Assets/github.png'
import htmlLogo from './Assets/html.png'
import reactLogo from './Assets/react.png'
import tsLogo from './Assets/ts.png'
import { useState } from 'react'

export default function App() {
  const [cardImage, setCardImage] = useState(generateRandomCardList())
  const [verify, setVerify] = useState([])

  function handleVerify(src) {
    setVerify(prev => [...prev, src])
  }

  function generateRandomCardList() {
    let imageList = [
      jsLogo,
      jsLogo,
      cssLogo,
      cssLogo,
      githubLogo,
      githubLogo,
      htmlLogo,
      htmlLogo,
      reactLogo,
      reactLogo,
      tsLogo,
      tsLogo
    ]

    return imageList.sort(() => Math.random() - 0.5)
  }

  return (
    <>
      <Header />
      <Wrapper>

      {cardImage.map((card, index) => (
        <Card 
          key={index}
          srcImage={card}
          handleVerify={handleVerify}
          verify={verify}
          setVerify={setVerify}/>))
      }
        
      </Wrapper>
  
    </>
  )
}