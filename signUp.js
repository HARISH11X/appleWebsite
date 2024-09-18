const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
        window.location.href="index.html";
    }

};
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