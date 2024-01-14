let fb = document.querySelector('.facebook span')
let tiktok = document.querySelector('.tiktok span')
let youtube = document.querySelector('.youtube span')

function countNumber(element,toNum){
    let count = 0
    let time = 150
    let step = toNum/time
    let counting = setInterval(function(){
        count+=step
        if(count>=toNum){
            
            element.innerText = toNum
            clearInterval(counting)
            console.log(count)
        }
        else{
            element.innerText=Math.round(count)
        }
    },10)
}
countNumber(fb,1000)
countNumber(youtube,1089)
countNumber(tiktok,2003)