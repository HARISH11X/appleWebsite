var count=0;
var total=0;
var product1="";
var output=document.getElementById('output');
var output1=document.getElementById('output1');
var product=document.getElementById('product');
function select1(){
    countclick();
    total=total+41900;
    output1.innerHTML=total;
    product1=product1+" Series 9 -$41900";
    product.innerHTML=product1;
}
function select2(){
    countclick();
    total=total+29900;
    output1.innerHTML=total;
    product1=product1+" iWatch SE -$29900";
    product.innerHTML=product1;
}
function select3(){
    countclick();
    total=total+89900;
    output1.innerHTML=total;
    product1=product1+"iWatch Ultra 2 -$89900";
    product.innerHTML=product1;
}
function countclick()
{
    count=count+1;
    output.innerHTML=count;
}
var div=document.getElementById('div');
var display=1;
function show(){
    if(display==1){
        div.style.display='block';
        display=0;
    }
    else{
        div.style.display='none';
        display=1;
    }
}
while(input!=='quit'){
    if(input==='new'){
        arr.push(prompt('ok enter todo'))
    }
    else if(input==='list'){
        for(let i=0;i<arr.length;i++){
            console.log(`${i}=${arr[i]}`)
        }
    }
    else if(input==='delete'){
        let index=parseInt(prompt('ok enter the index'))
        if(!Number.isNaN(index)){
            arr.splice(index,1)
            console.log('ok! deleted')
        }
        else{
            alert('invalid input try again') 
        }
    }
    else{
        alert('Alert!! enter correctly "new,list,delete,quit"')
    }
    input=prompt('do something like "new,list,delete,quit"')
}
function sendmsg(){
    let text=document.getElementById("text").value;
    if(text===''){
        alert("Enter correctly!")
    }
    else{
        alert("Message Send Successfully")
    }
}

function data(){
    div.style.display='block';
        display=0;
        count=count+1;
    output.innerHTML=count;
    let data=document.querySelector('a');
let demo=document.querySelector('h1');
const div=document.querySelector('div');
const span=document.querySelector('span');
}
function vis(){
    product.innerHTML=product1;
    let text=document.getElementById("text").value;
    if(text===''){
        alert("Enter correctly!")
    }
    while(input!=='quit'){
        if(input==='new'){
            arr.push(prompt('ok enter todo'))
        }
        else if(input==='list'){
            for(let i=0;i<arr.length;i++){
                console.log(`${i}=${arr[i]}`)
            }
        }
        else if(input==='delete'){
            let index=parseInt(prompt('ok enter the index'))
            if(!Number.isNaN(index)){
                arr.splice(index,1)
                console.log('ok! deleted')
            }
            else{
                alert('invalid input try again') 
            }
    div.style.display='block';
        display=0;
        count=count+1;
    output.innerHTML=count;
        }
    }
}