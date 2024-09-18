var display=1;
function dark(){
    if(display==1){
    document.body.style.background="black";
        display=0;
    }
    else{
        document.body.style.background='white';
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
var count=0;
var total=0;
var product1="";
var output=document.getElementById('output');
var output1=document.getElementById('output1');
var product=document.getElementById('product');
function select1(){
    countclick();
    total=total+12900;
    output1.innerHTML=total;
    product1=product1+" Airpods(2nd generation)-$12900";
    product.innerHTML=product1;
}
function select2(){
    countclick();
    total=total+20900;
    output1.innerHTML=total;
    product1=product1+" Airpods(3rd generation)-$20900";
    product.innerHTML=product1;
}
function select3(){
    countclick();
    total=total+24900;
    output1.innerHTML=total;
    product1=product1+" Airpods pro(2nd generation)-$24900";
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