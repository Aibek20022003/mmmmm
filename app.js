



 
 const btns=document.querySelectorAll('button') 
 const ulTAG=document.querySelector('ul')
 
 
 const url='https://api.sampleapis.com/movies/'
 function getGraphQL(){
    fetch(url+'GraphQL') 
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showName(data)
    })
}

 
 function getactionadventure(){
        fetch(url+'action-adventure') 
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            showName(data)
        })
 }
 function getanimation(){
    fetch(url+'animation')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showName(data)
    })
 }
function getclassic(){
    fetch(url+'classic')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showName(data)
    })
    
}
function getcomedy(){
    fetch(url+'comedy')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showName(data)
    })
}
function getdrama(){
    fetch(url+'drama')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showName(data)
    })
    
}
function gethorror(){
    fetch(url+'horror')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showName(data)
    })
}
function getfamily(){
    fetch(url+'family')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showName(data)
    })
}
function getmystery(){
    fetch(url+'mystery')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showName(data)
    })
}
function getscififantasy(){
    fetch(url+'scififantasy')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showName(data)
    })
}
function getwestern(){
    fetch(url+'western')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showName(data)
    })
}
btns[0].onclick=()=>{
    getGraphQL()
   }     

   btns[1].onclick=()=>{
   getactionadventure()
   } 
   btns[2].onclick=()=>{
    getanimation()
   }
   
   btns[3].onclick=()=>{
    getclassic()
   }
   btns[4].onclick=()=>{
    getcomedy()
   }
   btns[5].onclick=()=>{
    getdrama()
   }
   btns[6].onclick=()=>{
    gethorror()
   }
   btns[7].onclick=()=>{
    getfamily()
   }
   btns[8].onclick=()=>{
    getmystery()
   }
   btns[9].onclick=()=>{
    getscififantasy()
   }
   btns[10].onclick=()=>{
    getwestern()
   }
   
   function showName(arr){
 for (const user of arr) {
         ulTAG.innerHTML+=`
             <li>  ${user.title}
             
                            </li>`
                            
                        }
                    }
    
        
        
        
    

    

