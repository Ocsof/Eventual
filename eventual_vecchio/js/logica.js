$(document).ready(function(){

    let currentPage = "Home";

    if($(".title").text() === "Eventual"){
        let currentPage = "Home";
        updateContent(currentPage);
         $(".home").addClass("active");   
    }  
   
   $(".nav-link").click(function(){
        let clickedPage = $(this).text();
        console.log(clickedPage);
        if(clickedPage !== currentPage){
            $(".nav-link").removeClass("active");
            $(this).addClass("active");
            currentPage = clickedPage;
        }
        updateContent(currentPage);
   });
});