var models = [
  {
    name: "Bmw 318d",
    image: "img/bmw.jpg",
    link: "http://www.arabalar.com.tr/bmw"
  },
  {
    name: "Honda",
    image: "img/honda.jpg",
    link: "http://www.arabalar.com.tr/honda"
  },
  {
    name: "Mazda",
    image: "img/mazda.jpg",
    link: "http://www.arabalar.com.tr/mazda"
  },
  {
    name: "Skoda",
    image: "img/skoda.jpg",
    link: "http://www.arabalar.com.tr/skoda"
  },
  {
    name: "Volvo",
    image: "img/volvo.jpg",
    link: "http://www.arabalar.com.tr/volvo"
  }
];
var index = 0;
var interval;
var slaytCount = models.length;
var settings = {
  duration: "2000",
  random: true
};
init(settings);

document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function() {
    index--;
    showSlide(index);
  });

document.querySelectorAll('.arrow').forEach(function(item){
  item.addEventListener('mouseenter',function(){
    clearInterval(interval);
  })

});

document.querySelectorAll('.arrow').forEach(function(item){
  item.addEventListener('mouseleave',function(){
    init(settings);
  })

});

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function() {
    index++;
    showSlide(index);
  });
function init(settings) {
  var prev;
  interval = setInterval(function() {
    if (settings.random) {
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (prev == index);
      prev = index;
    } else {
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      index++;
    }
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i > slaytCount - 1) {
    index = 0;
  }
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  document.querySelector(".card-title").textContent = models[index].name;
  document.querySelector(".btn").setAttribute("href", models[index].link);
}
