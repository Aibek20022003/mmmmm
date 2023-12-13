// const search=document.querySelector('search')
// const input=document.querySelector('input')

// const _baseUrl='https://restcountries.com/v3.1/all'
// const searchCountry='https://restcountries.com/v3.1/name/'

// function getName(){
//     fetch(_baseUrl)
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data);
//         showC(data)
//     })
// }
// getName()
// function searchCountry(name){
//     fetch(searchCountry+name)
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data);
//         showName(data)


// })
// }
// input.onchange=()=>{
//     searchCountry(input.value)
// }


// function showName(arr){
//             for (const user of arr) {
//                 ulTAG.innerHTML+=`
//  <li>Олконун аты: ${user.name.common}-Борбору: 
//  ${user.capital}- Калкынын саны: ${user.population}
//            <img  width='50px'src=
//            '${user.flags.png}'</>   
//                 </li>`
                
//             }
//         }


const ulTAG=document.querySelector('ul')

const url='https://api.sampleapis.com/simpsons/episodes'

function getsimpsone(name){
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            showName(data)
    
    
    })
    }
    getsimpsone()
    function showName(arr){
                    for (const user of arr) {
                        ulTAG.innerHTML+=`
         <li> ${user.name} ${user.description} 
         <img width='50px' src='${user.thumbnailUrl}'</> 
                        </li>`
                        
                    }
                }

   
    




        
        
        
        
    

    

