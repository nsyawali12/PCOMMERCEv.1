const navSlide = ( ) =>  {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    //Toggle view
    burger.addEventListener('click', ( ) => {
        nav.classList.toggle('nav-active');
    });
    
    //animate Links
    
    
}

navSlide( );