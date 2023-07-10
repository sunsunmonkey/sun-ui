import styled from "styled-components";
interface SliderBox{
    display:string
  }
export const SlideBoxWrapper = styled.div<SliderBox>`
    position: relative;
    height: 100vh;
    .mask{
        background-color: rgb(0,0,0,0.7);
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .selfinfo{
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 999;
        background-color: aqua;
        width:100vw ;
        /* transform: translateX(-50vw) */
        margin-left: -100vw;
    }
`