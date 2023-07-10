import { memo, useRef, useState } from "react"
import SliderBox from "./components/slide-box"
import './assets/css/reset.css'
import { AppWrapper } from "./style"
import React from "react"

function App() {

  const [ distance , setDistance] = useState<number>(0)
  const [ isShow ,  setIsShow ] = useState<boolean>(false)

  const positonStart = useRef<number>(0)
  const positonEnd = useRef<number>(0)


  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>){
    console.log(window.innerWidth)
    if (event.targetTouches[0].pageX < 12) {
      setIsShow(true)
      positonStart.current = event.targetTouches[0].pageX
    }

  
  }
  function handleTouchMove(event: React.TouchEvent<HTMLDivElement>){
    if( distance>300 ) return
    positonEnd.current = event.targetTouches[0].pageX
    setDistance( positonEnd.current - positonStart.current)
    
  }

  function handleTouchEnd(){
    
  }
  return (
    <AppWrapper  
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}>

     {isShow &&<SliderBox display="none" distance={distance}></SliderBox>}
     
       
    </AppWrapper>
  )
}

export default memo(App) 
