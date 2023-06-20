fetch(' https://api.escuelajs.co/api/v1/products')
            .then(res=>res.json())
            .then(ahbab=>{
                let a = ""
                for(let j in ahbab){
                    a += `<div class="card text-center" style="width: 18rem; ">
                    <img src="${ahbab[j].images}" class="card-img-top" alt="">
                    <div class="card-body">
                      <p class="card-text">${ahbab[j].title}</p>
                      <p class="card-text">${ahbab[j].price}</p>
                    </div>
                  </div>`
                }
                document.getElementById('container').innerHTML = a;
            })
            function see(){
            let form = document.getElementById('form')
            form.style.display = "block"
            
            }