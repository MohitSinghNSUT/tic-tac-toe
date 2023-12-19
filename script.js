let kata='X';
let zero='O';
let count=0;
let box=document.getElementsByClassName('box');
Array.from(box).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        console.log('click');
        if(boxtext.innerText===''){

            if(count&1){
                boxtext.innerText=kata;
            }
            else{
                boxtext.innerText=zero;
                
            }
            count++;
            winner();
        }
})

})
function winner(){
    let arr=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8],
    ]
let status=new Array();

let boxes=document.getElementsByClassName('boxtext')
Array.from(boxes).forEach(e=>{
    status.push(e.innerText);
})
for (let index = 0; index < status.length; index++) {
    const element = status[index];
    console.log(index,element);
}
for (let index = 0; index < arr.length; index++) {
    if(status[arr[index][0]]!='' && status[arr[index][0]]==status[arr[index][1]] && status[arr[index][1]]==status[arr[index][2]]){
        let ans=document.getElementsByClassName('turn')[0];
        if(ans.innerText==''&&status[arr[index][0]]=='O')
        ans.innerHTML='<h1>zero is winner</h1>'
    else if(ans.innerText==''&&status[arr[index][0]]=='X')
    ans.innerHTML='<h1>kata is winner</h1>'
}
}


}
document.getElementsByTagName('button')[0].addEventListener('click',()=>{
    
    let box=document.getElementsByClassName('boxtext')
    Array.from(box).forEach(e=>{
        e.innerText='';
    })
   document.getElementsByClassName('turn')[0].innerText='';
   count=0;
})