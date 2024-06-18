form.addEventListener("submit", ()=>{
    const login ={
        email : email.value,
        password : password.value
    }
    fetch("/api/login", {
        method : "POST",
        body : JSON.stringify(login),
        headers:{
            "Content-type": "application/json"
        }
    })
    .then(res=>{
        if(res.status==200){
            window.location.href="/facpanel"
        }
        else{
            if(res.status==401) document.getElementById("alert").innerHTML = "<strong><p style='text-align : center; color: red; border-radius: 5px 5px 5px 5px' onclick='return false'>WRONG CREDENTIALS</p></strong>"
            else if(res.status==500) document.getElementById("alert").innerHTML = "<strong><p style='text-align : center; color: red; border-radius: 5px 5px 5px 5px' onclick='return false'>INTERNAL SERVER ERROR</p></strong>"
        }
    })
})