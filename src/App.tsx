import { memo, useRef, useState } from "react"
import SliderBox from "./components/slide-box"
import './assets/css/reset.css'
import { AppWrapper } from "./style"
import React from "react"
import { pxTransferVW, vwTransferPX } from "./util/pxAndVW"

function App() {

  const [ distance , setDistance] = useState<number>(0)
  const [ isShow ,  setIsShow ] = useState<boolean>(false)
  const [transition , setTransition] = useState<string>('none')
  const positonStart = useRef<number>(0)
  const positonEnd = useRef<number>(0)


  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>){
    if (event.targetTouches[0].pageX < 12) {
      setIsShow(true)
      positonStart.current = event.targetTouches[0].pageX
    }

  
  }
  function handleTouchMove(event: React.TouchEvent<HTMLDivElement>){
    if( pxTransferVW(distance)>80 ) return
    setTransition('none')
    positonEnd.current = event.targetTouches[0].pageX
    setDistance( positonEnd.current - positonStart.current)
    
  }

  function handleTouchEnd(){
    setTimeout(()=>{
      setTransition('all .3s')
    })
    if(distance>vwTransferPX(80/2)) { 
      setDistance(vwTransferPX(80) ) 
    }else{
      setDistance(0)
    }
  }
  function sonCallback(){
    setTransition('all .3s')
    setDistance(0)
  }
  return (
    <AppWrapper  
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}>

     {isShow &&<SliderBox 
      distance={distance}
      transition={transition}
      sonCallback={sonCallback}
     ></SliderBox>}
     
       
    </AppWrapper>
  )
}

export default memo(App) 
