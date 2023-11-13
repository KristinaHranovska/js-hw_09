const feedbackForm = document.querySelector('.feedback-form');
const formData = {};

// const localInfo = JSON.parse(localStorage.getItem("feedback-form-state"));

// if (localInfo) {
//     feedbackForm.elements.email.value = localInfo.email;
//     feedbackForm.elements.message.value = localInfo.message;
// }

const localInfo = JSON.parse(localStorage.getItem("feedback-form-state")) ?? {};
feedbackForm.elements.email.value = localInfo.email || '';
feedbackForm.elements.message.value = localInfo.message || '';

feedbackForm.addEventListener('input', sendUserInfo);

function sendUserInfo(event) {
    const { name, value } = event.target;

    if (name === 'email' || name === 'message') {
        formData[name] = value;
        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    }
}

