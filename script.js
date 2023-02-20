const hamburger = document.querySelector('.hamburger i');
const navbar = document.querySelector('ul');

hamburger.addEventListener('click', ()=>{
      hamburger.classList.toggle('fa-xmark');
      navbar.classList.toggle('slide');
});



var carousel=document.querySelector('img');
var images=["images/carousel-1.jpg","images/carousel-2.jpg"];
var num=2;
function next(){
    num++;
       if(num>=images.length){
        num=0;
        carousel.src=images[num]
        
    }
    else{
       carousel.src=images[num]
       
       
    }
                    
};
function prev(){
    num--;
    if(num<0){
        num=images.length-1;
        carousel.src=images[num]
            }
            else{
              carousel.src=images[num]
            }

};



const form = document.getElementById('form');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const semester = document.getElementById('Country');
       
form.addEventListener('submit', e => {
	e.preventDefault();
    checkInput()

	
});

function checkInput() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
    const semesterValue = semester.value.trim();
	



    
	
	if(usernameValue === '') {
		setError(username, 'Username cannot be blank');
        username.style.borderColor='red';
        alert("please enter username");
        return false;

        
	} else {
		setSuccess(username);
        username.style.borderColor ='green';
	}
	
	
	if(emailValue === '') {
		setError(email, 'Email cannot be blank');
        email.style.borderColor ='red';
        alert("please enter email");
        return false;
	} else if (!isEmail(emailValue)) {
		setError(email, 'Not a valid email');
        email.style.borderColor = 'red';
        alert("please enter valid Email");
        return false;
	} else {
		setSuccess(email);
        email.style.borderColor = 'green';
	}
	
	if (semesterValue === '-1'){
        setError(semester,'cannot be blank');
        alert("Please select country");
        semester.style.borderColor = 'red';
        return false;
        }
        else{
          setSuccess(semester);
          semester.style.borderColor ='green';
      }

        
	
}

function setError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

   function setSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}  
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


