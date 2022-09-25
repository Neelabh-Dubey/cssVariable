let input = document.querySelectorAll('.inpt');
let demo = document.querySelector(':root');

input.forEach((input) =>{
    input.addEventListener('input',updateValue);
});

// console.log(input);
// console.log(input[0].id);

function updateValue(event){
    let el = event.target.id;
    let val = event.target.value;
    let data = event.target.dataset.size || '';
    console.log(el,val,data,val+data);
    demo.style.setProperty(`--${el}`,val+data);
    console.log(getComputedStyle(demo).getPropertyValue('--border'));
    console.log(getComputedStyle(demo).getPropertyValue('--length'));
}