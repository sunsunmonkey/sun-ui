import  {  memo, useState} from 'react'
import {SlideBoxWrapper} from "./style"
import { vwTransferPX } from '../../util/pxAndVW'

interface SliderBox{
  distance:number,
  transition:string,
  sonCallback:() => void
}
const SliderBox= memo((props:SliderBox) => {
  const [mask , setMask] = useState<string>('block')
  const { distance, transition ,sonCallback} = props

  const transparency = (0.7/vwTransferPX(80))*distance

  //这段写的一坨，反正不优雅
  if(distance > 0 && mask!=='block') setMask('block')
  if(distance === 0 && mask!=='none') setTimeout(() => {
    setMask('none')
  }, 300); 


  return (
    <SlideBoxWrapper >
      <div className="mask" style={{transition:'all .3s', display : mask , backgroundColor: `rgb(0,0,0,${transparency})`}} onClick={sonCallback}></div>
      <div className="selfinfo" style={{transform:`translateX(${distance}px)`,transition:`${transition}`}}></div>
    </SlideBoxWrapper>
  )
})

export default SliderBox