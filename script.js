document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', (event)=>{
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        let isValid = true;
        const messages = [];

        if(username.length < 3 )
        {
            isValid = false;
            messages.push('the minimum length for username is 3 characters');
        }
        
        if(! email.indexOf('@') || ! email.indexOf('.'))
        {
            isValid = false;
            messages.push('Please enter a valid email address');
        }

        if(password.length < 8)
        {
            isValid = false;
            messages.push('the minimum length for password is 8 characters');
        }

        feedbackDiv.style.display = 'block';
        if(isValid)
        {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = "#28a745";
        }
        else
        {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";

        }

    });
});