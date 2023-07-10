export function pxTransferVW(px:number){
    const viewportWidth = window.innerWidth; 
    return (px / viewportWidth) * 100
}

export function vwTransferPX(vw:number){
    const viewportWidth = window.innerWidth; 
    return  (vw/100)*viewportWidth
}