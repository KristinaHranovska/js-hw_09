import _ from 'lodash';

const feedbackForm = document.querySelector('.feedback-form');
const formData = {};
const localInfo = JSON.parse(localStorage.getItem("feedback-form-state")) ?? {};

feedbackForm.elements.email.value = localInfo.email || '';
feedbackForm.elements.message.value = localInfo.message || '';

feedbackForm.addEventListener('input', fieldUserInfo);
feedbackForm.addEventListener('submit', sendUserInfo);

const updateLocalStorage = _.throttle(() => {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

function fieldUserInfo(event) {
    const { name, value } = event.target;

    if (name === 'email' || name === 'message') {
        formData[name] = value;
        updateLocalStorage();
    }
}

function sendUserInfo(event) {
    const form = event.target;
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const userInfo = {};

    if (!email || !message) {
        alert('Please, fill in all fields before sending!');
        return;
    }

    userInfo.email = email;
    userInfo.message = message;

    console.log(userInfo);

    event.preventDefault()
    feedbackForm.reset();
    localStorage.clear();
}
