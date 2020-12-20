let active_link = document.querySelectorAll('#nnaavv a');
let arr_active_link = Array.from(active_link);
arr_active_link.forEach(element => {
  element.addEventListener('click',()=>{

    arr_active_link.forEach(ele =>{
      ele.classList.remove('Nav-link-active')
    })
    element.classList.add('Nav-link-active')
  })
});

