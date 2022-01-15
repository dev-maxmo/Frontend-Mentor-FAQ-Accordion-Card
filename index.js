const x = document.querySelectorAll('.faqs');
const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll(".answer");
const arrow = document.querySelectorAll(".arrow");

let length = x.length;


for (let i = 0; i < length; i++) {
    x[i].onclick = () => {

        if (question[i].classList.contains('q-active')) {
            question[i].classList.toggle('q-active');
            answer[i].classList.toggle("a-active");
            arrow[i].classList.toggle("ar-active");
            answer
        } else {
            for (let x = 0; x < length; x++) {
                question[x].classList.remove('q-active');
                answer[x].classList.remove('a-active');
                arrow[x].classList.remove('ar-active');
            }
            question[i].classList.toggle('q-active');  // toggle/add
            answer[i].classList.toggle('a-active');  // toggle/add
            arrow[i].classList.toggle('ar-active');  // toggle/add
        }
    }
}