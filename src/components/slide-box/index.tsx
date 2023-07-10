import  {  memo} from 'react'
import {SlideBoxWrapper} from "./style"

interface SliderBox{
  display:string
  distance:number
}
const SliderBox= memo((props:SliderBox) => {

  const {display, distance} = props
  
  return (
    <SlideBoxWrapper display={display} >
        <div className="mask"></div>
        <div className="selfinfo" style={{transform:`translateX(${distance}px)`}}></div>
    </SlideBoxWrapper>
  )
})

export default SliderBox