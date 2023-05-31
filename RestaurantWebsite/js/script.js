const searchForm=document.querySelector(".search-form");
const searchBtn=document.querySelector("#search-btn");

searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(searchBtn) && 
            !e.composedPath().includes(searchForm)
        ){
            searchForm.classList.remove("active");
        }
    });
});

const cartItem=documnet.querySelector(".cart-items-container");
const cartBtn=documnet.querySelector("#cart-btn");

cartBtn.addEventListener("click", function(){
    cartItem.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(cartBtn) && 
            !e.composedPath().includes(cartItem)
        ){
            cartItem.classList.remove("active");
        }
    });
});

const navbar=documnet.querySelector(".navbar");
const menuBtn=documnet.querySelector("#menu-btn");

menuBtn.addEventListener("click", function(){
    navbar.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(menuBtn) && 
            !e.composedPath().includes(navbar)
        ){
            navbar.classList.remove("active");
        }
    });
});