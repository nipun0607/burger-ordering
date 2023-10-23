function getRandomTime(){
    return Math.floor(Math.random()*5000)+2000;
}

function getRandomOrderId(){
    return Math.floor(Math.random()*1000)+100;
}

document.querySelector("#order_food").addEventListener("click",function(){
    let seleectedfood=[];
    let data=document.getElementsByName("food");
    data.forEach(function(checkbox){
        if(checkbox.checked){
            seleectedfood.push(checkbox.value);
        }
    });
    if (seleectedfood.length===0){
        alert("You have to select food first");
        return 
    }
    let order_btn=document.querySelector("#order_food");
    order_btn.disabled=true;

    let foodImg=document.querySelector("#foodimage");
    let orderId=document.querySelector("#orderID");
    let idValue=document.querySelector("#orderIdValue");
    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },getRandomTime())
    })
        promise.then(function(){
            let orderID=getRandomOrderId();
            idValue.textContent = orderID;
            orderId.style.display ="block";

            let foodToShow=seleectedfood[Math.floor(Math.random()*seleectedfood.length)];
            switch(foodToShow){
                case 'Burger':
                    foodImg.src='https://img.freepik.com/free-photo/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-splash-sauce_90220-1266.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1697932800&semt=sph'
                    break;
                case 'Fries':
                    foodImg.src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/french-fries-recipe.jpg"
                    break;
                case 'Drinks':
                    foodImg.src="https://www.marthastewart.com/thmb/GgdicKu0IoRTNjFqDDhlLNk1fiQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/90s-cocktails-are-back-in-a-big-way-heres-what-well-all-be-drinking-in-2023-according-to-bartenders-1-0123-2000-a4afedaaac5d483bb41d24ca179bed80.jpg"
                    break;
                default:
                    foodImg.src="https://t3.ftcdn.net/jpg/01/31/50/68/360_F_131506836_ldsCMQhM3exQW5YApw9FKMe14uhQJ5sv.jpg";

                }
                foodImg.style.display='block';
                order_btn.disabled=false;



        })
})
