class Likes {
  constructor() {
    this.likes = []
  }
  addLike(id, desc) {
    const like = {id, desc};
    this.likes.push(like)
    return like;
  }

}
const myLikeModel = new Likes
let favoritesOutput = document.querySelector('.favoriesStore')



function editFood(e){
  
  let valueGrOutput= e.previousSibling.previousSibling;
  let hiddenSpanNum=e.nextSibling
  hiddenSpanNum.style.display="none"
  
  if(e.className =="fas fa-check"){
   
   let n1 = e.parentElement.lastChild.childNodes[0].innerHTML
   let n2 =e.parentElement.lastChild.childNodes[1].innerHTML
   let n3 =e.parentElement.lastChild.childNodes[2].innerHTML
   let n4 =e.parentElement.lastChild.childNodes[3].innerHTML
   let n5 = e.parentElement.lastChild.childNodes[4].innerHTML
   let n6 = e.parentElement.lastChild.childNodes[5].innerHTML
   let n7 = e.parentElement.lastChild.childNodes[6].innerHTML
   let n8 = e.parentElement.lastChild.childNodes[7].innerHTML
   let n9 = e.parentElement.lastChild.childNodes[8].innerHTML
   let n10 =e.parentElement.lastChild.childNodes[9].innerHTML

    let defaultX =hiddenSpanNum.innerHTML
    let z = valueGrOutput.innerHTML
    let res1 = (z * n1) / defaultX
    let res2 = (z * n2) / defaultX
    let res3 = (z * n3) / defaultX
    let res4 = (z * n4) / defaultX
    let res5 = (z * n5) / defaultX
    let res6 = (z * n6) / defaultX
    let res7 = (z * n7) / defaultX
    let res8 = (z * n8) / defaultX
    let res9 = (z * n9) / defaultX
    let res10 = (z * n10) / defaultX
   

    
        e.parentElement.lastChild.childNodes[0].innerHTML = res1 
        e.parentElement.lastChild.childNodes[1].innerHTML= res2
        e.parentElement.lastChild.childNodes[2].innerHTML= res3 
        e.parentElement.lastChild.childNodes[3].innerHTML= res4 
        e.parentElement.lastChild.childNodes[4].innerHTML= res5 
        e.parentElement.lastChild.childNodes[5].innerHTML= res6 
        e.parentElement.lastChild.childNodes[6].innerHTML= res7 
        e.parentElement.lastChild.childNodes[7].innerHTML= res8 
        e.parentElement.lastChild.childNodes[8].innerHTML= res9 
        e.parentElement.lastChild.childNodes[9].innerHTML= res10 
       
   
        let calculateNutrition = function () {
          let arrCholesterol = []
          let arrVitaminC = []
          let arrSodium = []
          let arrIron = []
          let arrSugars = []
          let arrCalcium = []
          let arrCarbs = []
          let arrFats = []
          let arrProtein = []
          let arrCalories = []
          foodTransportedStorage.childNodes.forEach(e => arrCholesterol.push(Number(e.childNodes[e.childNodes.length-1].children[0].innerHTML)))
          foodTransportedStorage.childNodes.forEach(e => arrVitaminC.push(Number(e.childNodes[e.childNodes.length-1].children[1].innerHTML)))
          foodTransportedStorage.childNodes.forEach(e => arrSodium.push(Number(e.childNodes[e.childNodes.length-1].children[2].innerHTML)))
          foodTransportedStorage.childNodes.forEach(e => arrIron.push(Number(e.childNodes[e.childNodes.length-1].children[3].innerHTML)))
          foodTransportedStorage.childNodes.forEach(e => arrSugars.push(Number(e.childNodes[e.childNodes.length-1].children[4].innerHTML)))
          foodTransportedStorage.childNodes.forEach(e => arrCalcium.push(Number(e.childNodes[e.childNodes.length-1].children[5].innerHTML)))
          foodTransportedStorage.childNodes.forEach(e => arrCarbs.push(Number(e.childNodes[e.childNodes.length-1].children[6].innerHTML)))
          foodTransportedStorage.childNodes.forEach(e => arrFats.push(Number(e.childNodes[e.childNodes.length-1].children[7].innerHTML)))
          foodTransportedStorage.childNodes.forEach(e => arrProtein.push(Number(e.childNodes[e.childNodes.length-1].children[8].innerHTML)))
          foodTransportedStorage.childNodes.forEach(e => arrCalories.push(Number(e.childNodes[e.childNodes.length-1].children[9].innerHTML)))
    
          let add = (a, b) => a + b
          const sumCholesterol = arrCholesterol.reduce(add)
          const sumVitaminC = arrVitaminC.reduce(add)
          const sumSodium = arrSodium.reduce(add)
          const sumIron = arrIron.reduce(add)
          const sumSugars = arrSugars.reduce(add)
          const sumCalcium = arrCalcium.reduce(add)
          const sumCarbs = arrCarbs.reduce(add)
          const sumFats = arrFats.reduce(add)
          const sumProtein = arrProtein.reduce(add)
          const sumCalories = arrCalories.reduce(add)
          document.querySelector('.Kcal').innerHTML = sumCalories.toFixed(0)
          document.querySelector('.Protein').innerHTML = sumProtein.toFixed(0)
          document.querySelector('.Fats').innerHTML = sumFats.toFixed(0)
          document.querySelector('.Carbs').innerHTML = sumCarbs.toFixed(0)
          document.querySelector('.Calcium').innerHTML = sumCalcium.toFixed(0)
          document.querySelector('.Sugars').innerHTML = sumSugars.toFixed(0)
          document.querySelector('.Iron').innerHTML = sumIron.toFixed(0)
          document.querySelector('.Sodium').innerHTML = sumSodium.toFixed(0)
          document.querySelector('.VitaminC').innerHTML = sumVitaminC.toFixed(0)
          document.querySelector('.Cholesterol').innerHTML = sumCholesterol.toFixed(0)
    
        }
        
        calculateNutrition()
        
   e.classList.remove('fa-check')
   e.classList.add('fa-pencil-alt')
   valueGrOutput.contentEditable = "false";
   valueGrOutput.style="background-color:transparent"
   valueGrOutput.style.width="6rem"
   valueGrOutput.style.color="white"
   valueGrOutput.style.textAlign="right"
 }
 
 else{

  let varInput = document.querySelectorAll('.valueGrOutput')
  varInput.forEach(e=>{
    e.addEventListener('keypress',enterVal)
    function enterVal(e){
      var key = e.which || e.keyCode;
    if (key === 13) { 
      e.preventDefault()
    }}})


  hiddenSpanNum.innerHTML=valueGrOutput.innerHTML

   valueGrOutput.contentEditable = "true";
   valueGrOutput.style="background-color:white"
   valueGrOutput.style.width="6rem"
   valueGrOutput.style.color="black"
   valueGrOutput.style.textAlign="center"
   e.classList.remove('fa-pencil-alt')
   e.classList.add('fa-check')
 
 
 }
 }
document.addEventListener("DOMContentLoaded", getLikes)

function getLikes() {
  let likes;
  if (localStorage.getItem('likes') === null) {
    likes = []
  } else {
    likes = JSON.parse(localStorage.getItem('likes'))
  }
  likes.forEach(like => {
    let firstDiv = document.createElement('div')
    firstDiv.innerHTML = `<li onclick="moveFavToInput(this)" id="${like.likesID}">${like.LikesDesc}</li><i onclick="removeFromFav(this)" class="fas fa-times"></i>`
    myFavorited.appendChild(firstDiv)
  })
  
}

function iconSet(el) {


  if (el.classList.contains('fas')) {
    el.className = "far fa-heart"
  } else if (el.classList.contains('far')) {
    el.className = "fas fa-heart"
  }
  let CurId = el.parentElement.childNodes[0].id;
  let CurDesc = el.parentElement.childNodes[0].innerHTML;
  let myCurrentClass = el.parentElement.childNodes[5].className
  let myFavsArr = []

  favoritesOutput.childNodes.forEach((el) => {

    myFavsArr.push(el.firstChild.id)
  })

  foodTransportedStorage.childNodes.forEach(e => {
    if (e.firstChild.id == CurId) {
      e.childNodes[5].className = myCurrentClass

    }
  })

  if (myFavsArr.indexOf(CurId) === -1) {
   
    myLikeModel.addLike(CurId, CurDesc)
   

    let curIndex = myLikeModel.likes.findIndex(x => x.id === CurId)
    let favoried = `<div><li onclick="moveFavToInput(this)" id="${myLikeModel.likes[curIndex].id}">${myLikeModel.likes[curIndex].desc}</li><i onclick="removeFromFav(this)" class="fas fa-times"></i></div>`
    favoritesOutput.innerHTML += favoried

    let likes;
    if (localStorage.getItem('likes') === null) {
      likes = []
      
    } else {
      likes = JSON.parse(localStorage.getItem('likes'))
      
    }
    likes.push({'likesID': myLikeModel.likes[curIndex].id,'LikesDesc': myLikeModel.likes[curIndex].desc})
    localStorage.setItem('likes', JSON.stringify(likes))
    document.querySelector(".favCounterNumbers").innerHTML=myFavorited.childNodes.length

  } else {
   
    let curIndex = myLikeModel.likes.findIndex(x => x.id === CurId)
    let likes;
    if (localStorage.getItem('likes') === null) {
      likes = []
    } else {
      likes = JSON.parse(localStorage.getItem('likes'))
    }
    let theFavIdToRemove = el.parentElement.childNodes[0].id

    likes.forEach((task, index) => {
      if (theFavIdToRemove == task.likesID) {
        likes.splice(index, 1)
      }
    })
    localStorage.setItem('likes', JSON.stringify(likes))
    myLikeModel.likes.splice(curIndex, 1)
    favoritesOutput.childNodes.forEach((el) => {
      if (el.firstChild.id == CurId) {
        el.firstChild.parentElement.remove()
      }
    })
    document.querySelector(".favCounterNumbers").innerHTML=myFavorited.childNodes.length
  }

 
}

function closeCurentFood(e) {
  e.parentElement.remove()
  if (foodTransportedStorage.childNodes.length < 1) {
    document.querySelector('.Kcal').innerHTML = 0
    document.querySelector('.Protein').innerHTML = 0
    document.querySelector('.Carbs').innerHTML = 0
    document.querySelector('.Calcium').innerHTML = 0
    document.querySelector('.Sugars').innerHTML = 0
    document.querySelector('.Iron').innerHTML = 0
    document.querySelector('.Sodium').innerHTML = 0
    document.querySelector('.VitaminC').innerHTML = 0
    document.querySelector('.Cholesterol').innerHTML = 0
    document.querySelector('.Fats').innerHTML = 0
  } else {

    let calculateNutrition = function () {
      let arrCholesterol = []
      let arrVitaminC = []
      let arrSodium = []
      let arrIron = []
      let arrSugars = []
      let arrCalcium = []
      let arrCarbs = []
      let arrFats = []
      let arrProtein = []
      let arrCalories = []
      foodTransportedStorage.childNodes.forEach(e => arrCholesterol.push(Number(e.childNodes[e.childNodes.length-1].children[0].innerHTML)))
      foodTransportedStorage.childNodes.forEach(e => arrVitaminC.push(Number(e.childNodes[e.childNodes.length-1].children[1].innerHTML)))
      foodTransportedStorage.childNodes.forEach(e => arrSodium.push(Number(e.childNodes[e.childNodes.length-1].children[2].innerHTML)))
      foodTransportedStorage.childNodes.forEach(e => arrIron.push(Number(e.childNodes[e.childNodes.length-1].children[3].innerHTML)))
      foodTransportedStorage.childNodes.forEach(e => arrSugars.push(Number(e.childNodes[e.childNodes.length-1].children[4].innerHTML)))
      foodTransportedStorage.childNodes.forEach(e => arrCalcium.push(Number(e.childNodes[e.childNodes.length-1].children[5].innerHTML)))
      foodTransportedStorage.childNodes.forEach(e => arrCarbs.push(Number(e.childNodes[e.childNodes.length-1].children[6].innerHTML)))
      foodTransportedStorage.childNodes.forEach(e => arrFats.push(Number(e.childNodes[e.childNodes.length-1].children[7].innerHTML)))
      foodTransportedStorage.childNodes.forEach(e => arrProtein.push(Number(e.childNodes[e.childNodes.length-1].children[8].innerHTML)))
      foodTransportedStorage.childNodes.forEach(e => arrCalories.push(Number(e.childNodes[e.childNodes.length-1].children[9].innerHTML)))

      let add = (a, b) => a + b
      const sumCholesterol = arrCholesterol.reduce(add)
      const sumVitaminC = arrVitaminC.reduce(add)
      const sumSodium = arrSodium.reduce(add)
      const sumIron = arrIron.reduce(add)
      const sumSugars = arrSugars.reduce(add)
      const sumCalcium = arrCalcium.reduce(add)
      const sumCarbs = arrCarbs.reduce(add)
      const sumFats = arrFats.reduce(add)
      const sumProtein = arrProtein.reduce(add)
      const sumCalories = arrCalories.reduce(add)
      document.querySelector('.Kcal').innerHTML = sumCalories.toFixed(0)
      document.querySelector('.Protein').innerHTML = sumProtein.toFixed(0)
      document.querySelector('.Fats').innerHTML = sumFats.toFixed(0)
      document.querySelector('.Carbs').innerHTML = sumCarbs.toFixed(0)
      document.querySelector('.Calcium').innerHTML = sumCalcium.toFixed(0)
      document.querySelector('.Sugars').innerHTML = sumSugars.toFixed(0)
      document.querySelector('.Iron').innerHTML = sumIron.toFixed(0)
      document.querySelector('.Sodium').innerHTML = sumSodium.toFixed(0)
      document.querySelector('.VitaminC').innerHTML = sumVitaminC.toFixed(0)
      document.querySelector('.Cholesterol').innerHTML = sumCholesterol.toFixed(0)

    }
    
    calculateNutrition()
    
  }
}

function removeFromFav(el) {
  

  let favoritesID = el.previousSibling.id


  foodTransportedStorage.childNodes.forEach((elem) => {
    if (elem.firstChild.id == favoritesID) {
      
      elem.children[5].className = 'far fa-heart'
  
    }
  })

  let likes;
  if (localStorage.getItem('likes') === null) {
    likes = []
  } else {
    likes = JSON.parse(localStorage.getItem('likes'))
  }
  let theFavIdToRemove = el.parentElement.childNodes[0].id

  likes.forEach((task, index) => {
    if (theFavIdToRemove == task.likesID) {
      likes.splice(index, 1)
    }
  })
  localStorage.setItem('likes', JSON.stringify(likes))
  el.parentElement.remove()
  document.querySelector(".favCounterNumbers").innerHTML=myFavorited.childNodes.length
  
}



document.addEventListener("DOMContentLoaded", getLikedFavs)

function getLikedFavs(){
  document.querySelector(".favCounterNumbers").innerHTML=myFavorited.childNodes.length
}