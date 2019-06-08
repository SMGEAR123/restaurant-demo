$(document).ready(function() {
  
  const $featureItem = $('.feature-item');
  const $featuredImage = $('.feature-item>img');
  const $dishDescription = $('p.dish-description');
  const $imgTextContainer = $('div.food-img-text-container');
  
  const menu = [
    {
      name: "Dumplings",
      description: "Steamed or fried dumplings with your choice of pork, chicken or shrimp!"
    },
    {
      name: "Gyoza",
      description: "a Japanese dish consisting of wonton wrappers stuffed with pork and cabbage. Also served with Shrimp and Chicken filling!"
    },
    {
      name: "Spring Rolls",
      description: "A Vietnamese dish traditionally consisting of pork, prawn, vegetables, bún, and other ingredients wrapped in Vietnamese bánh tráng."
    }
  ]
  
  $featureItem.click((e) => {
    console.log(`You clicked on ${e.target.alt}!`);  
  });

// Get the carousel working
  $("#myCarousel").carousel({
    interval: 4000//Change the interval, 1000 for every second
  });
    
  // Enable the carousel indicators for each item position
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
    
  // Carousel Controls working with carousel method to device previous or next
  $(".carousel-control-prev").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function(){
    $("#myCarousel").carousel("next");
  });

//Source for JavaScript solution: https://www.w3schools.com/bootstrap4/bootstrap_ref_js_carousel.asp
  
//Mouseover and Mouseout effects for Chef special images
  //On mouseover, display text
  $featuredImage.mouseover((e) => {
    
  });
  
  //On mouseout, hide text;

  /* Create a way to select menu items and have their descriptions appear at the top of the page */
  $('div.food-img-text-container').on('click', function(e) {
    console.log($(this)[0].children[1].innerText);
    const searchValue = $(this)[0].children[1].innerText;
     menu.map((menuItem) => {
       if(menuItem.name === searchValue) {
         console.log(menuItem);
         console.log($dishDescription);
         $dishDescription[0].innerText = menuItem.description;
       }
     })
  });
  
  
});//document.Ready ends here;