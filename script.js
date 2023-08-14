const subhanAllahDisplay =document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn =document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn=document.getElementById('subhanAllahDecrimentBtn');


const alhamdulillahDisplay =document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn =document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn =document.getElementById('alhamdulillahDecrimentBtn');


const allahAkberDisplay =document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn =document.getElementById('allahAkberIncrimentBtn');
const allahAkberDecrimentBtn =document.getElementById('allahAkberDecrimentBtn');


const resetBtn =document.getElementById('resetBtn');

let subhanAllahinItialValue = 0;
let alhamdulillahInitialValue =0;
let allahAkberInitialValue = 0;

subhanAllahIncrimentBtn.addEventListener('click',function(){
    if(subhanAllahinItialValue === 33){
        return alert ('you complete your tasbih')
    }
    subhanAllahinItialValue +=1;
    subhanAllahDisplay.innerText = subhanAllahinItialValue;
})
subhanAllahDecrimentBtn.addEventListener('click',function(){
    if(subhanAllahinItialValue === 0){
        return alert('you can not add a negetive number')
    }
    subhanAllahinItialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahinItialValue;
})

alhamdulillahIncrimentBtn.addEventListener('click',function(){
    if(alhamdulillahInitialValue === 33){
        return alert('alhamdulillah tasbih done')
    }
    alhamdulillahInitialValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})
alhamdulillahDecrimentBtn.addEventListener('click',function(){
    if(alhamdulillahInitialValue === 0){
        return alert('you can not add a negetive number')
    }
    alhamdulillahInitialValue -=1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue
})
allahAkberIncrimentBtn.addEventListener('click',function(){
    if(allahAkberInitialValue === 33){
        return alert('allahAkber tasbih complete')
    }
   allahAkberInitialValue += 1;
   allahAkberDisplay.innerText = allahAkberInitialValue;
})
allahAkberDecrimentBtn.addEventListener('click',function(){
    if(allahAkberInitialValue === 0){
        return alert('you can not add a negetive number')
      
    }
   allahAkberInitialValue -= 1;
   allahAkberDisplay.innerText = allahAkberInitialValue;
})

resetBtn.addEventListener('click',function(){
    subhanAllahDisplay.innerText='0'
    alhamdulillahDisplay.innerText='0'
    allahAkberDisplay.innerText ='0'
    
    subhanAllahinItialValue=0;
    alhamdulillahInitialValue=0;
    allahAkberInitialValue=0;
})

