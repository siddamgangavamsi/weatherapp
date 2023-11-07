const ApiKey = '61656369188826b436d353e87de005e2'


// accessing all html elements
const input = document.getElementById('inputval')
const btnEle = document.getElementById('btn')
const Tempele = document.getElementById('temp')
const Discription = document.getElementById('description')
const Location = document.getElementById('location')
// const img = document.getElementById('image')



// adding to eventlisteners to the function  button ele
  btnEle.addEventListener('click',(e) =>{
    
    // condition checking weather enterd location 
    if(input.value==""){
        alert('enter the location')

    }else{
    // store the location enter by user
      
     let loc=input.value
    

    // api url
    
     url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${ApiKey}`
    // fetch method to fetch the url the loctaion weather details
    fetch(url)
    .then((data)=>data.json())
    // .then(da=>console.log(da.main))
    .then(da=>{
        console.log(da)

        // object distructuring
        const {name}=da;
        const {feels_like}=da.main;
        const {description}=da.weather[0]



        // assiging the values to html elements
        Location.innerText=name
        Tempele.innerText=Math.round(feels_like-273)
        Discription.innerText=description
    })
     .catch(()=>{
        alert('plz enter valid location')
     })
    }

});
