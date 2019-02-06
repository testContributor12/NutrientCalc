const searching = document.querySelector('.search__field')
const forky = new Forky
let myButton = document.getElementById('transportButton')
myButton.addEventListener('click', transport)
let foodTransportedStorage = document.querySelector('.myFoodsOutput')
let selectCurrentFood = document.querySelector('.addFoodCountainer')
searching.addEventListener('keyup', theSearch)
let myFavorited = document.querySelector(".favoriesStore")
let FoodInputResultList = document.querySelector('.results__list')
let spinner = document.querySelector('.spinner')
let numbersInputGram =document.querySelector('.numberCalculateInput')


function theSearch(e) {
  
  document.querySelector('.searchAgainErr').style="dispaly:none"
  spinner.style="dispaly:block"
  if (e.target.value == '') {
    spinner.style="dispaly:none"
    
  }


  if (spinner.style.display = "block" && !FoodInputResultList.innerHTML == '') {
    FoodInputResultList.style.display = "none"
    
  }

  setTimeout(initiateSearch, 1000)

  function initiateSearch() {
    const userInput = e.target.value
    forky.getFoodList(userInput).then(data => {

      if (!data.foodList.list == false) {
        forky.showFoods(data.foodList.list.item)
      } else if (!data.foodList.errors == false) {

          document.querySelector('.searchAgainErr').style.display = "block"
      }



    })
  }
};





function showNutritions(ele) {
  let newEle = document.createElement('li')
  selectCurrentFood.innerHTML = "";
  newEle.setAttribute('id', ele.id)
  newEle.innerHTML = ele.innerHTML
  selectCurrentFood.appendChild(newEle)
  document.querySelector('.errDifferentFood').style="display:none"
 document.querySelector('.errNoFood').style="display:none"
  

}




function moveFavToInput(e) {
  selectCurrentFood.innerHTML = `<li id="${e.getAttribute('id')}">${e.innerHTML}</li>`
}



function transport() {

  if (selectCurrentFood.childNodes.length < 1) {

    let ErrNoFood = document.querySelector('.errNoFood')
    ErrNoFood.style.display = 'block'
    setTimeout(removeErrNoFood, 2400)

    function removeErrNoFood() {
      ErrNoFood.style.display = 'none'
    }
  } else {

    myButton.disabled = true
    setTimeout(enableButton, 400)

    function enableButton() {
      myButton.disabled = false;
    }
    let foodTransporting = document.createElement('div')
    let currentFoodId = selectCurrentFood.childNodes[0].id
  
    foodTransporting.innerHTML = `${selectCurrentFood.innerHTML}<span class="valueGrOutput">${numbersInputGram.value}</span><span class="edGr">grams</span><i onclick="editFood(this)" class="fas fa-pencil-alt"></i><span></span><i onclick="iconSet(this)" class="far fa-heart "></i><i onclick="closeCurentFood(this)" class="fas fa-times"></i>`;  
   
    myFavorited.childNodes.forEach(e => {
        if (e.firstChild.id == currentFoodId) {
          foodTransporting.innerHTML = `${selectCurrentFood.innerHTML}<span class="valueGrOutput">${numbersInputGram.value}</span><span class="edGr">grams</span><i onclick="editFood(this)" class="fas fa-pencil-alt"></i><span></span><i onclick="iconSet(this)" class="fas fa-heart "></i><i onclick="closeCurentFood(this)" class="fas fa-times"></i>`;
        }
      }
    )
    
    selectCurrentFood.innerHTML=''
    forky.getValuesForCalc(currentFoodId).then(data => { 
    
  let checkIfOkCalories=data.getValues.foods[0].food.nutrients.findIndex(x=>x.nutrient_id=="208")
  let checkIfOkProtein=data.getValues.foods[0].food.nutrients.findIndex(x=>x.nutrient_id=="203")
  let checkIfOkFats=data.getValues.foods[0].food.nutrients.findIndex(x=>x.nutrient_id=="204")
  let checkIfOkCarbs=data.getValues.foods[0].food.nutrients.findIndex(x=>x.nutrient_id=="205")
  let checkIfOkCalcium=data.getValues.foods[0].food.nutrients.findIndex(x=>x.nutrient_id=="301")
  let checkIfOkSugars=data.getValues.foods[0].food.nutrients.findIndex(x=>x.nutrient_id=="269")
  let checkIfOkIron=data.getValues.foods[0].food.nutrients.findIndex(x=>x.nutrient_id=="303")
  let checkIfOkSodium=data.getValues.foods[0].food.nutrients.findIndex(x=>x.nutrient_id=="307")
  let checkIfOkVitaminC=data.getValues.foods[0].food.nutrients.findIndex(x=>x.nutrient_id=="401")
  let checkIfOkCholesterol=data.getValues.foods[0].food.nutrients.findIndex(x=>x.nutrient_id=="601")

  
      if(checkIfOkCalories == -1||checkIfOkProtein ==-1||checkIfOkFats ==-1||checkIfOkCarbs ==-1||checkIfOkCalcium ==-1||checkIfOkSugars ==-1||checkIfOkIron ==-1||checkIfOkSodium ==-1||checkIfOkVitaminC ==-1||checkIfOkCholesterol==-1){
     document.querySelector('.errDifferentFood').style="display:block"
   setTimeout(hideErr,3000)
   function hideErr(){
    document.querySelector('.errDifferentFood').style="display:none"
   }
      }
      else if(numbersInputGram.value==""){
        document.querySelector('.errNoInput').style.display="block"
        setTimeout(errNoInputHide,1500)
        function errNoInputHide(){
          document.querySelector('.errNoInput').style.display="none"
        }
      }
      else{
        foodTransportedStorage.appendChild(foodTransporting)
        forky.theCombinator(data.getValues.foods[0].food,numbersInputGram.value)
     
     
      }
    
    })

    

  }
}





