const navIcon = document.querySelector('.navigation img');
const navigation = document.querySelector('ul');
const btn = document.querySelector('.navigation button');


navIcon.addEventListener('click', e=>{
    navigation.classList.toggle('active');
    
    
     if(navigation.classList.contains('active')){
        e.target.src='images/icon-close.svg';
        btn.classList.add('white');
    }else{
        e.target.src='images/icon-hamburger.svg';
        btn.classList.remove('white');
    }
});
