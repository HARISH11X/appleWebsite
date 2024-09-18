var count=0;
var total=0;
var product1="";
var output=document.getElementById('output');
var output1=document.getElementById('output1');
var product=document.getElementById('product');
function select1(){
    countclick();
    total=total+134900;
    output1.innerHTML=total;
    product1=product1+" Midnight-$134900";
    product.innerHTML=product1;
}
function select2(){
    countclick();
    total=total+154900;
    output1.innerHTML=total;
    product1=product1+" Starlight-$154900";
    product.innerHTML=product1;
}
function select3(){
    countclick();
    total=total+174900;
    output1.innerHTML=total;
    product1=product1+" Silver-$174900";
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
function data(){
    div.style.display='block';
        display=0;
        count=count+1;
    output.innerHTML=count;
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
}
function vis(){
    product.innerHTML=product1;
    let text=document.getElementById("text").value;
    if(text===''){
        alert("Enter correctly!")
    }
    div.style.display='block';
        display=0;
        count=count+1;
    output.innerHTML=count;
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