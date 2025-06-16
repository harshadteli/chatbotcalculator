const chatbotEye = document.getElementById('chatbot-eye');
const chatbotEye2 = document.getElementById('chatbot-eye-2');
const chatbotBtn = document.getElementById('cancel');
const backbtnred = document.getElementById("back");



chatbotBtn.addEventListener('click', () => {
    chatbotEye.style.animation = 'none';
    chatbotEye2.style.animation = 'none';
    chatbotEye.style.background = '#f00';
    chatbotEye2.style.background = '#f00';
    setTimeout(() => {
        chatbotEye.style.background = '#000';
        chatbotEye2.style.background = '#000';
        chatbotEye.style.transform = 'scaleY(1)';
        chatbotEye2.style.transform = 'scaleY(1)';
        chatbotEye.style.animation = 'blink 4s infinite';
        chatbotEye2.style.animation = 'blink 4s infinite';
    }, 1000);
});
backbtnred.addEventListener('click', () => {
    chatbotEye.style.animation = 'none';
    chatbotEye2.style.animation = 'none';
    chatbotEye.style.background = '#f00';
    chatbotEye2.style.background = '#f00';
    setTimeout(() => {
        chatbotEye.style.background = '#000';
        chatbotEye2.style.background = '#000';
        chatbotEye.style.transform = 'scaleY(1)';
        chatbotEye2.style.transform = 'scaleY(1)';
        chatbotEye.style.animation = 'blink 4s infinite';
        chatbotEye2.style.animation = 'blink 4s infinite';
    }, 1000);
});