const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();

function selectCity() {
    var city = document.getElementById('citySelect').value;
    document.querySelector('.location').innerHTML = city + ' <ion-icon name="caret-down-sharp"></ion-icon>';
    document.getElementById('dropdownModal').style.display = 'none';
}
window.onclick = function(event) {
    var dropdownModal = document.getElementById('dropdownModal');
    var signinModal = document.getElementById('id01');

    if (event.target == dropdownModal) {
        dropdownModal.style.display = 'none';
    }
    if (event.target == signinModal) {
        signinModal.style.display = 'none';
    }

    var dropdownMenu = document.getElementById('dropdownMenu');
    if (event.target !== dropdownMenu && !dropdownMenu.contains(event.target) && !event.target.matches('.location')) {
        dropdownMenu.style.display = 'none';
    }
};
function toggleCityModal() {
    var dropdownModal = document.getElementById('dropdownModal');
    dropdownModal.style.display = 'flex';  
}
$(document).ready(function () {
    const apiKey = 'f32610b2df41c32a0a769a49ed760862';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1&region=IN`;

    $.get(apiUrl, function (data) {
        const movies = data.results.slice(0, 5);

        
        $('#movies-container a').each(function (index) {
            const movie = movies[index];

            if (movie) {
                const imgSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                const title = movie.title;
                const genres = movie.genre_ids.map(id => getGenreById(id)).join(', ') || 'Unknown Genre';
                const rating = (movie.vote_average * 10).toFixed(0);

                $(this).find('.card-img').attr('src', imgSrc); 
                $(this).find('h3').text(title);
                $(this).find('.detail').text(genres); 
                $(this).find('.card-body p').text(`${rating}%`); 
            } else {
               
                $(this).find('.card-img').attr('src', 'img/poster/placeholder.jpg');
                $(this).find('h3').text('No Title Available');
                $(this).find('.detail').text('Unknown Genre');
                $(this).find('.card-body p').text('No Rating');
            }
        });

       
        const slides = $('.slides .slide');
        let currentIndex = 0;
        const totalSlides = slides.length;

        
        slides.eq(currentIndex).addClass('active');

        
        function nextSlide() {
            slides.eq(currentIndex).removeClass('active');
            currentIndex = (currentIndex + 1) % totalSlides;
            slides.eq(currentIndex).addClass('active'); 
        }

       
        function prevSlide() {
            slides.eq(currentIndex).removeClass('active');
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
            slides.eq(currentIndex).addClass('active'); 
        }

        $('#next-btn').click(nextSlide);
        $('#prev-btn').click(prevSlide);

       
        setInterval(nextSlide, 5000);

        
        $(document).ready(function () {
    const apiKey = 'f32610b2df41c32a0a769a49ed760862';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1&region=IN`;

    $.get(apiUrl, function (data) {
        const movies = data.results.slice(0, 5);

       
        $('#movies-container a').each(function (index) {
            const movie = movies[index];

            if (movie) {
                const imgSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                const title = movie.title;
                const genres = movie.genre_ids.map(id => getGenreById(id)).join(', ') || 'Unknown Genre';
                const rating = (movie.vote_average * 10).toFixed(0);

                $(this).find('.card-img').attr('src', imgSrc); 
                $(this).find('h3').text(title); 
                $(this).find('.detail').text(genres);
                $(this).find('.card-body p').text(`${rating}%`); 
            } else {
               
                $(this).find('.card-img').attr('src', 'img/poster/placeholder.jpg');
                $(this).find('h3').text('No Title Available');
                $(this).find('.detail').text('Unknown Genre');
                $(this).find('.card-body p').text('No Rating');
            }
        });

        
        
        $('.slides .slide img').each(function (index) {
            const movie = movies[index];
            if (movie && movie.backdrop_path) {
                const bannerSrc = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
                
                
                $(this).attr('src', bannerSrc);
                $(this).css({
                    'width': '1270px',
                    'height': '300px',
                    'object-fit': 'fill',
                    'object-position': 'center'
                });
            } else {
                
                $(this).attr('src', 'img/banner-placeholder.jpg');
            }
        });
    });

    
    function getGenreById(id) {
        const genreMapping = {
            28: 'Action',
            12: 'Adventure',
            16: 'Animation',
            35: 'Comedy',
            80: 'Crime',
            99: 'Documentary',
            18: 'Drama',
            10751: 'Family',
            14: 'Fantasy',
            36: 'History',
            27: 'Horror',
            10402: 'Music',
            9648: 'Mystery',
            10749: 'Romance',
            878: 'Science Fiction',
            10770: 'TV Movie',
            53: 'Thriller',
            10752: 'War',
            37: 'Western',
        };
        return genreMapping[id] || 'Unknown Genre';
    }
});

    });

    
    function getGenreById(id) {
        const genreMapping = {
            28: 'Action',
            12: 'Adventure',
            16: 'Animation',
            35: 'Comedy',
            80: 'Crime',
            99: 'Documentary',
            18: 'Drama',
            10751: 'Family',
            14: 'Fantasy',
            36: 'History',
            27: 'Horror',
            10402: 'Music',
            9648: 'Mystery',
            10749: 'Romance',
            878: 'Science Fiction',
            10770: 'TV Movie',
            53: 'Thriller',
            10752: 'War',
            37: 'Western',
        };
        return genreMapping[id] || 'Unknown Genre';
    }
});