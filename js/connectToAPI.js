class Forky {
  constructor() {
    this.secret_key = "bjzitooXQ2gFVL7zxCcDJxVqTGYg3Nd3yA4EGFZ2";
  }

  async getFoodList(pUserInput) {
    const xD = await fetch(
      `https://api.nal.usda.gov/ndb/search/?format=json&q=${pUserInput}&sort=n&max=50&offset=0&api_key=${
        this.secret_key
      } `
    );
    const foodList = await xD.json();
    return {
      foodList
    };
  }
  async getValuesForCalc(pFoodID) {
    const gettingValues = await fetch(
      `https://api.nal.usda.gov/ndb/V2/reports?ndbno=${pFoodID}&type=b&format=json&api_key=${
        this.secret_key
      }`
    );
    const getValues = await gettingValues.json();
    return {
      getValues
    };
  }

  showFoods(fork) {
    let output = "";
    fork.forEach(function(fore) {
      const re = /(, UPC:).*$|(, GTIN).*$/;
      const result = fore.name.replace(re, "");

      const requiredOutput = (title, limit = 70) => {
        const newTitle = [];
        if (title.length > limit) {
          title.split("").reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
              newTitle.push(cur);
            }
            return acc + cur.length;
          }, 0);
          return `${newTitle.join("")}...`;
        } else {
          return title;
        }
      };

      output += `<li id="${
        fore.ndbno
      }" onclick="showNutritions(this)" class='theList'>${requiredOutput(
        result
      )}</li> `;
    });
    document.querySelector(".results__list").innerHTML = output;
    let spinner = document.querySelector(".spinner");

    if (!FoodInputResultList.innerHTML == "") {
      spinner.style.display = "none";
      FoodInputResultList.style.display = "block";
    }
    const searching = document.querySelector(".search__field");
    if (searching.value == "") {
      FoodInputResultList.innerHTML = "";
    }
  }

  theCombinator(fork, gramAmount) {
    let nutrientsLoop = fork.nutrients;

    let output = [];

    let indexFindCalories = nutrientsLoop.findIndex(
      x => x.nutrient_id == "208"
    );
    let indexFindProtein = nutrientsLoop.findIndex(x => x.nutrient_id == "203");
    let indexFindFats = nutrientsLoop.findIndex(x => x.nutrient_id == "204");
    let indexFindCarbs = nutrientsLoop.findIndex(x => x.nutrient_id == "205");
    let indexFindCalcium = nutrientsLoop.findIndex(x => x.nutrient_id == "301");
    let indexFindSugars = nutrientsLoop.findIndex(x => x.nutrient_id == "269");
    let indexFindIron = nutrientsLoop.findIndex(x => x.nutrient_id == "303");
    let indexFindSodium = nutrientsLoop.findIndex(x => x.nutrient_id == "307");
    let indexFindVitaminC = nutrientsLoop.findIndex(
      x => x.nutrient_id == "401"
    );
    let indexFindCholesterol = nutrientsLoop.findIndex(
      x => x.nutrient_id == "601"
    );

    output[1] = fork.nutrients[indexFindCalories].value;
    output[2] = fork.nutrients[indexFindProtein].value;
    output[3] = fork.nutrients[indexFindFats].value;
    output[4] = fork.nutrients[indexFindCarbs].value;
    output[5] = fork.nutrients[indexFindCalcium].value;
    output[6] = fork.nutrients[indexFindSugars].value;
    output[7] = fork.nutrients[indexFindIron].value;
    output[8] = fork.nutrients[indexFindSodium].value;
    output[9] = fork.nutrients[indexFindVitaminC].value;
    output[10] = fork.nutrients[indexFindCholesterol].value;

    let defaultX = 100;
    let y1 = output[1];
    let y2 = output[2];
    let y3 = output[3];
    let y4 = output[4];
    let y5 = output[5];
    let y6 = output[6];
    let y7 = output[7];
    let y8 = output[8];
    let y9 = output[9];
    let y10 = output[10];

    let z = gramAmount;
    let res1 = (z * y1) / defaultX;
    let res2 = (z * y2) / defaultX;
    let res3 = (z * y3) / defaultX;
    let res4 = (z * y4) / defaultX;
    let res5 = (z * y5) / defaultX;
    let res6 = (z * y6) / defaultX;
    let res7 = (z * y7) / defaultX;
    let res8 = (z * y8) / defaultX;
    let res9 = (z * y9) / defaultX;
    let res10 = (z * y10) / defaultX;

    for (var x = 1; x < 11; x++) {
      if (output[x] == "--") {
        output[x] = 0;
      }
      ``;
    }

    let spanCalories = document.createElement("span");
    spanCalories.className = "spanCalories";
    const outputText1 = document.createTextNode(res1);
    spanCalories.appendChild(outputText1);

    let spanProtein = document.createElement("span");
    spanProtein.className = "spanProtein";
    const outputText2 = document.createTextNode(res2);
    spanProtein.appendChild(outputText2);

    let spanFats = document.createElement("span");
    spanFats.className = "spanFats";
    const outputText3 = document.createTextNode(res3);
    spanFats.appendChild(outputText3);

    let spanCarbs = document.createElement("span");
    spanCarbs.className = "spanCarbs";
    const outputText4 = document.createTextNode(res4);
    spanCarbs.appendChild(outputText4);

    let spanCalcium = document.createElement("span");
    spanCalcium.className = "spanCalcium";
    const outputText5 = document.createTextNode(res5);
    spanCalcium.appendChild(outputText5);

    let spanSugars = document.createElement("span");
    spanSugars.className = "spanSugars";
    const outputText6 = document.createTextNode(res6);
    spanSugars.appendChild(outputText6);

    let spanIron = document.createElement("span");
    spanIron.className = "spanIron";
    const outputText7 = document.createTextNode(res7);
    spanIron.appendChild(outputText7);

    let spanSodium = document.createElement("span");
    spanSodium.className = "spanSodium";
    const outputText8 = document.createTextNode(res8);
    spanSodium.appendChild(outputText8);

    let spanVitaminC = document.createElement("span");
    spanVitaminC.className = "spanVitaminC";
    const outputText9 = document.createTextNode(res9);
    spanVitaminC.appendChild(outputText9);

    let spanCholesterol = document.createElement("span");
    spanCholesterol.className = "spanCholesterol";
    const outputText10 = document.createTextNode(res10);
    spanCholesterol.appendChild(outputText10);

    let li = document.createElement("li");
    li.className = "storeNutrientsForCalc";
    li.append(
      spanCholesterol,
      spanVitaminC,
      spanSodium,
      spanIron,
      spanSugars,
      spanCalcium,
      spanCarbs,
      spanFats,
      spanProtein,
      spanCalories
    );
    foodTransportedStorage.append(li);

    foodTransportedStorage.childNodes.forEach(e => {
      if (e.tagName == "DIV") {
        if (e.nextSibling.tagName == "LI") {
          e.appendChild(e.nextSibling);
        }
      } else {
        console.log("ако виждате това,значи не съм оправил бъговете...");
      }
    });

    let calculateNutrition = function() {
      let arrCholesterol = [];
      let arrVitaminC = [];
      let arrSodium = [];
      let arrIron = [];
      let arrSugars = [];
      let arrCalcium = [];
      let arrCarbs = [];
      let arrFats = [];
      let arrProtein = [];
      let arrCalories = [];
      // let last =e.lastChild

      // [e.length-1]
      foodTransportedStorage.childNodes.forEach(e =>
        arrCholesterol.push(
          Number(e.childNodes[e.childNodes.length - 1].children[0].innerHTML)
        )
      );
      foodTransportedStorage.childNodes.forEach(e =>
        arrVitaminC.push(
          Number(e.childNodes[e.childNodes.length - 1].children[1].innerHTML)
        )
      );
      foodTransportedStorage.childNodes.forEach(e =>
        arrSodium.push(
          Number(e.childNodes[e.childNodes.length - 1].children[2].innerHTML)
        )
      );
      foodTransportedStorage.childNodes.forEach(e =>
        arrIron.push(
          Number(e.childNodes[e.childNodes.length - 1].children[3].innerHTML)
        )
      );
      foodTransportedStorage.childNodes.forEach(e =>
        arrSugars.push(
          Number(e.childNodes[e.childNodes.length - 1].children[4].innerHTML)
        )
      );
      foodTransportedStorage.childNodes.forEach(e =>
        arrCalcium.push(
          Number(e.childNodes[e.childNodes.length - 1].children[5].innerHTML)
        )
      );
      foodTransportedStorage.childNodes.forEach(e =>
        arrCarbs.push(
          Number(e.childNodes[e.childNodes.length - 1].children[6].innerHTML)
        )
      );
      foodTransportedStorage.childNodes.forEach(e =>
        arrFats.push(
          Number(e.childNodes[e.childNodes.length - 1].children[7].innerHTML)
        )
      );
      foodTransportedStorage.childNodes.forEach(e =>
        arrProtein.push(
          Number(e.childNodes[e.childNodes.length - 1].children[8].innerHTML)
        )
      );
      foodTransportedStorage.childNodes.forEach(e =>
        arrCalories.push(
          Number(e.childNodes[e.childNodes.length - 1].children[9].innerHTML)
        )
      );

      let add = (a, b) => a + b;
      const sumCholesterol = arrCholesterol.reduce(add);
      const sumVitaminC = arrVitaminC.reduce(add);
      const sumSodium = arrSodium.reduce(add);
      const sumIron = arrIron.reduce(add);
      const sumSugars = arrSugars.reduce(add);
      const sumCalcium = arrCalcium.reduce(add);
      const sumCarbs = arrCarbs.reduce(add);
      const sumFats = arrFats.reduce(add);
      const sumProtein = arrProtein.reduce(add);
      const sumCalories = arrCalories.reduce(add);
      document.querySelector(".Kcal").innerHTML = sumCalories.toFixed(0);
      document.querySelector(".Protein").innerHTML = sumProtein.toFixed(0);
      document.querySelector(".Fats").innerHTML = sumFats.toFixed(0);
      document.querySelector(".Carbs").innerHTML = sumCarbs.toFixed(0);
      document.querySelector(".Calcium").innerHTML = sumCalcium.toFixed(0);
      document.querySelector(".Sugars").innerHTML = sumSugars.toFixed(0);
      document.querySelector(".Iron").innerHTML = sumIron.toFixed(0);
      document.querySelector(".Sodium").innerHTML = sumSodium.toFixed(0);
      document.querySelector(".VitaminC").innerHTML = sumVitaminC.toFixed(0);
      document.querySelector(".Cholesterol").innerHTML = sumCholesterol.toFixed(
        0
      );
    };
    calculateNutrition();
  }
}

let forkExtend = new Forky();
