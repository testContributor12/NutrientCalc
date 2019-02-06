let KcalProgess = document.querySelector('.Kcal')
let ProteinProgess=document.querySelector('.Protein')
let FatsProgess=document.querySelector('.Fats') 
let CarbsProgess=document.querySelector('.Carbs') 
let CalciumProgess=document.querySelector('.Calcium') 
let SugarsProgess=document.querySelector('.Sugars') 
let IronProgess=document.querySelector('.Iron') 
let SodiumProgess=document.querySelector('.Sodium') 
let VitaminCProgess=document.querySelector('.VitaminC') 
let CholesterolProgess=document.querySelector('.Cholesterol') 

let KcalProgessMax = document.querySelector('.KcalMax')
let ProteinProgessMax=document.querySelector('.ProteinMax')
let FatsProgessMax=document.querySelector('.FatsMax') 
let CarbsProgessMax=document.querySelector('.CarbsMax') 
let CalciumProgessMax=document.querySelector('.CalciumMax') 
let SugarsProgessMax=document.querySelector('.SugarsMax') 
let IronProgessMax=document.querySelector('.IronMax') 
let SodiumProgessMax=document.querySelector('.SodiumMax') 
let VitaminCProgessMax=document.querySelector('.VitaminCMax') 
let CholesterolProgessMax=document.querySelector('.CholesterolMax') 

let KcalProgressBar = document.querySelector(".determinateKcal")
let ProteinProgressBar = document.querySelector(".determinateProtein")
let CarbsProgressBar = document.querySelector(".determinateCarbs")
let FatsProgressBar = document.querySelector(".determinateFats")
let CalciumProgressBar = document.querySelector(".determinateCalcium")
let SugarsProgressBar = document.querySelector(".determinateSugars")
let IronProgressBar = document.querySelector(".determinateIron")
let SodiumProgressBar = document.querySelector(".determinateSodium")
let VitaminCProgressBar = document.querySelector(".determinateVitaminC")
let CholesterolProgressBar = document.querySelector(".determinateCholesterol")


let enterBeh = document.querySelectorAll('.enterBehaviour')
let hintTab = document.querySelector('.editDesc')


enterBeh.forEach(e=>{
    e.addEventListener('keydown',checkIfEnter)
    function checkIfEnter(e){
        if (13 == e.keyCode) {
            click2Edit.classList.remove("fa-check")
            click2Edit.classList.add("fa-edit")
            hintTab.style.display="none"
   KcalProgessMax.contentEditable = "false"
   ProteinProgessMax.contentEditable = "false"
   FatsProgessMax.contentEditable = "false"
   CarbsProgessMax.contentEditable = "false"
   CalciumProgessMax.contentEditable = "false"
   SugarsProgessMax.contentEditable = "false"
   IronProgessMax.contentEditable = "false"
   SodiumProgessMax.contentEditable = "false"
   VitaminCProgessMax.contentEditable = "false"
   CholesterolProgessMax.contentEditable = "false"
   
   KcalProgessMax.style.backgroundColor="transparent"
   KcalProgessMax.style.backgroundColor="transparent"
   ProteinProgessMax.style.backgroundColor="transparent"
   FatsProgessMax.style.backgroundColor="transparent"
   CarbsProgessMax.style.backgroundColor="transparent"
   CalciumProgessMax.style.backgroundColor="transparent"
   SugarsProgessMax.style.backgroundColor="transparent"
   IronProgessMax.style.backgroundColor="transparent"
   SodiumProgessMax.style.backgroundColor="transparent"
   VitaminCProgessMax.style.backgroundColor="transparent"
   CholesterolProgessMax.style.backgroundColor="transparent"

         }
        
    }
    
})



var config = { attributes: true, childList: true, subtree: true };
var callback = function(mutationsList, observer) {
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
            console.log("change")
            let KcalPercentage =(KcalProgess.innerHTML/KcalProgessMax.innerHTML)*100
            let ProteinPercentage =(ProteinProgess.innerHTML/ProteinProgessMax.innerHTML)*100
            let FatsPercentage =(FatsProgess.innerHTML/FatsProgessMax.innerHTML)*100
            let CarbsPercentage =(CarbsProgess.innerHTML/CarbsProgessMax.innerHTML)*100
            let CalciumPercentage =(CalciumProgess.innerHTML/CalciumProgessMax.innerHTML)*100
            let SugarsPercentage =(SugarsProgess.innerHTML/SugarsProgessMax.innerHTML)*100
            let IronPercentage =(IronProgess.innerHTML/IronProgessMax.innerHTML)*100
            let SodiumPercentage =(SodiumProgess.innerHTML/SodiumProgessMax.innerHTML)*100
            let VitaminCPercentage =(VitaminCProgess.innerHTML/VitaminCProgessMax.innerHTML)*100
            let CholesterolPercentage =(CholesterolProgess.innerHTML/CholesterolProgessMax.innerHTML)*100

           KcalProgressBar.style.width=`${KcalPercentage}%`
           ProteinProgressBar.style.width=`${ProteinPercentage}%`
           CarbsProgressBar.style.width=`${CarbsPercentage}%`
           FatsProgressBar.style.width=`${FatsPercentage}%`
           CalciumProgressBar.style.width=`${CalciumPercentage}%`
           SugarsProgressBar.style.width=`${SugarsPercentage}%`
           IronProgressBar.style.width=`${IronPercentage}%`
           SodiumProgressBar.style.width=`${SodiumPercentage}%`
           VitaminCProgressBar.style.width=`${VitaminCPercentage}%`
           CholesterolProgressBar.style.width=`${CholesterolPercentage}%`

           let allProgressBars =document.querySelectorAll(".determinate")
           allProgressBars.forEach(e=>{
            let max =parseFloat(e.style.width)
            if(max > 100){
             e.style.width="100%"
             e.style.backgroundColor="rgb(5, 252, 25)"
        }else if(max>0 && max<=30){
            e.style.backgroundColor="rgb(241, 79, 14)"
        }
        else if(max >30 &&max<=50){
            e.style.backgroundColor="rgb(233, 113, 14)"
        }else if(max>50 &&max<70)
        e.style.backgroundColor="rgb(180, 241, 14)"
        else if(max>70 && max<=100){
            e.style.backgroundColor="rgb(5, 252, 25)"
        }
        })
           allProgressBars.forEach(e=>{
               let max =parseFloat(e.style.width)
               if(max > 100){
                e.style.width="100%"
           }
        }
           
           )
        
        }
        else if (mutation.type == 'attributes') {


            let KcalPercentage =(KcalProgess.innerHTML/KcalProgessMax.innerHTML)*100
            let ProteinPercentage =(ProteinProgess.innerHTML/ProteinProgessMax.innerHTML)*100
            let FatsPercentage =(FatsProgess.innerHTML/FatsProgessMax.innerHTML)*100
            let CarbsPercentage =(CarbsProgess.innerHTML/CarbsProgessMax.innerHTML)*100
            let CalciumPercentage =(CalciumProgess.innerHTML/CalciumProgessMax.innerHTML)*100
            let SugarsPercentage =(SugarsProgess.innerHTML/SugarsProgessMax.innerHTML)*100
            let IronPercentage =(IronProgess.innerHTML/IronProgessMax.innerHTML)*100
            let SodiumPercentage =(SodiumProgess.innerHTML/SodiumProgessMax.innerHTML)*100
            let VitaminCPercentage =(VitaminCProgess.innerHTML/VitaminCProgessMax.innerHTML)*100
            let CholesterolPercentage =(CholesterolProgess.innerHTML/CholesterolProgessMax.innerHTML)*100

           KcalProgressBar.style.width=`${KcalPercentage}%`
           ProteinProgressBar.style.width=`${ProteinPercentage}%`
           CarbsProgressBar.style.width=`${CarbsPercentage}%`
           FatsProgressBar.style.width=`${FatsPercentage}%`
           CalciumProgressBar.style.width=`${CalciumPercentage}%`
           SugarsProgressBar.style.width=`${SugarsPercentage}%`
           IronProgressBar.style.width=`${IronPercentage}%`
           SodiumProgressBar.style.width=`${SodiumPercentage}%`
           VitaminCProgressBar.style.width=`${VitaminCPercentage}%`
           CholesterolProgressBar.style.width=`${CholesterolPercentage}%`

           let allProgressBars =document.querySelectorAll(".determinate")
           allProgressBars.forEach(e=>{
            let max =parseFloat(e.style.width)
            if(max > 100){
             e.style.width="100%"
             e.style.backgroundColor="rgb(5, 252, 25)"
        }else if(max>0 && max<=30){
            e.style.backgroundColor="rgb(241, 79, 14)"
        }
        else if(max >30 &&max<=50){
            e.style.backgroundColor="rgb(233, 113, 14)"
        }else if(max>50 &&max<70)
        e.style.backgroundColor="rgb(180, 241, 14)"
        else if(max>70 && max<=100){
            e.style.backgroundColor="rgb(5, 252, 25)"
        }
        })
           allProgressBars.forEach(e=>{
               let max =parseFloat(e.style.width)
               if(max > 100){
                e.style.width="100%"
           }
        }
           
           )

            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
    
};
var observer = new MutationObserver(callback);
observer.observe(KcalProgess, config);
observer.observe(ProteinProgess, config);
observer.observe(FatsProgess, config);
observer.observe(CarbsProgess, config);
observer.observe(CalciumProgess, config);
observer.observe(SugarsProgess, config);
observer.observe(IronProgess, config);
observer.observe(SodiumProgess, config);
observer.observe(VitaminCProgess, config);
observer.observe(CholesterolProgess, config);

observer.observe(KcalProgessMax , config);
observer.observe(ProteinProgessMax , config);
observer.observe(FatsProgessMax , config);
observer.observe(CarbsProgessMax , config);
observer.observe(CalciumProgessMax , config);
observer.observe(SugarsProgessMax , config);
observer.observe(IronProgessMax , config);
observer.observe(SodiumProgessMax , config);
observer.observe(VitaminCProgessMax , config);
observer.observe(CholesterolProgessMax , config);


let click2Edit =document.querySelector('.fa-edit')
click2Edit.addEventListener('click',editable)

function editable(e){


    if(click2Edit.classList.contains("fa-edit")){
        click2Edit.classList.remove("fa-edit")
        click2Edit.classList.add("fa-check")

        hintTab.style.display="block"

        KcalProgessMax.contentEditable = "true"
        ProteinProgessMax.contentEditable = "true"
        FatsProgessMax.contentEditable = "true"
        CarbsProgessMax.contentEditable = "true"
        CalciumProgessMax.contentEditable = "true"
        SugarsProgessMax.contentEditable = "true"
        IronProgessMax.contentEditable = "true"
        SodiumProgessMax.contentEditable = "true"
        VitaminCProgessMax.contentEditable = "true"
        CholesterolProgessMax.contentEditable = "true"
        
     
        KcalProgessMax.style.backgroundColor="white"
        ProteinProgessMax.style.backgroundColor="white"
        FatsProgessMax.style.backgroundColor="white"
        CarbsProgessMax.style.backgroundColor="white"
        CalciumProgessMax.style.backgroundColor="white"
        SugarsProgessMax.style.backgroundColor="white"
        IronProgessMax.style.backgroundColor="white"
        SodiumProgessMax.style.backgroundColor="white"
        VitaminCProgessMax.style.backgroundColor="white"
        CholesterolProgessMax.style.backgroundColor="white"
          
      
        
    }
    else{
        click2Edit.classList.remove("fa-check")
        click2Edit.classList.add("fa-edit")

      hintTab.style.display="none"

        KcalProgessMax.contentEditable = "false"
        ProteinProgessMax.contentEditable = "false"
        FatsProgessMax.contentEditable = "false"
        CarbsProgessMax.contentEditable = "false"
        CalciumProgessMax.contentEditable = "false"
        SugarsProgessMax.contentEditable = "false"
        IronProgessMax.contentEditable = "false"
        SodiumProgessMax.contentEditable = "false"
        VitaminCProgessMax.contentEditable = "false"
        CholesterolProgessMax.contentEditable = "false"
        
        KcalProgessMax.style.backgroundColor="transparent"
        KcalProgessMax.style.backgroundColor="transparent"
        ProteinProgessMax.style.backgroundColor="transparent"
        FatsProgessMax.style.backgroundColor="transparent"
        CarbsProgessMax.style.backgroundColor="transparent"
        CalciumProgessMax.style.backgroundColor="transparent"
        SugarsProgessMax.style.backgroundColor="transparent"
        IronProgessMax.style.backgroundColor="transparent"
        SodiumProgessMax.style.backgroundColor="transparent"
        VitaminCProgessMax.style.backgroundColor="transparent"
        CholesterolProgessMax.style.backgroundColor="transparent"

          
      

    }
    
     
      
}

