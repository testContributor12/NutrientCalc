let your_favorites = document.querySelector('.tabFavorites')
let find_foods = document.querySelector('.tabMain')


let favsToShow = document.querySelector('#favsToShow')
let findFoodsToShow = document.querySelector('#findFoodsToShow')

your_favorites.addEventListener('click',showYour_favorites)
find_foods.addEventListener('click',showFind_foods)


var underlineAnime = document.querySelector('.theUnderline');


function showYour_favorites(){
    underlineAnime.classList.remove('moveUnderlineToLeft')
    underlineAnime.classList.add('moveUnderlineToRight')

    if(findFoodsToShow.style="display:block"){
        findFoodsToShow.style="display:none"
        favsToShow.style="display:block"
        your_favorites.style='color:rgba(209, 7, 13, 0.7)'
        find_foods.style='color:rgba(212, 104, 108, 0.7)'
    }
}

function showFind_foods(){
    
    underlineAnime.classList.remove('moveUnderlineToRight')
    underlineAnime.classList.add('moveUnderlineToLeft')
    

    if(favsToShow.style="display:block"){
        favsToShow.style="display:none"
        findFoodsToShow.style="display:block"
        find_foods.style='color:rgba(209, 7, 13, 0.7)'
        your_favorites.style='color:rgba(212, 104, 108, 0.7)'
    }
}



