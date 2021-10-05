

async function display(){
    try{
        brands=["samsung","apple"]
        for(i=0;i<brands.length;i++){
            a=brands[i]
           
        let url = await fetch(`${a}.json`)
        let data= await url.json()
        for(j=0;j<4;j++){
       
        particular_phone=data.data[j]
        
         names= particular_phone.phone_name
         date=particular_phone.release_date
         dim=particular_phone.dimension
         os=particular_phone.os
         image_url=particular_phone.thumbnail
         storage=particular_phone.storage
         display=particular_phone.specifications[3].specs[0].val[0]
       
        
       

        let first=document.createElement("div")
        first.className="p-2 bd-highlight"
        let second=document.createElement("div")
        second.className="card "
        second.style="width: 18rem"
        let image=document.createElement("img")
        image.id="img"
        image.src=`${image_url}`
        
         let third=document.createElement("div")
         third.className="card-body "
         cardtitle="gcgjg"
         third.innerHTML=`<h5 class="card-title">${names}</h5>
         <br>
         <p class="card-text"><b>Storage:</b> ${storage}<br>
         <b>OS:</b> ${os}<br>
         <b>Dimension:</b> ${dim}<br>
         <b>Release Date:</b> ${date}<br>
         <b>Display:</b> ${display}<br>
         </p>
         <br>
         <a href="#" class="btn btn-block btn-outline-success ">Buy</a>`
        
     
        
        
        
        second.appendChild(image)
        second.appendChild(third)
        first.appendChild(second)
        let s=document.getElementById("id")
        s.appendChild(first)
        }
    }


    }catch(err){
        console.log(err);

    }
    
}

display()

