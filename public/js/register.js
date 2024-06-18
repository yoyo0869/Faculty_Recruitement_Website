form.addEventListener("submit", ()=>{
    const register ={
        first_name : firstname.value,
        last_name : lastname.value,
        category : cast.value,
        email : email.value,
        password : password.value,
        retype_pass : rtpass.value
    }
    fetch("/api/register", {
        method : "POST",
        body : JSON.stringify(register),
        headers:{
            "Content-type": "application/json"
        }
    }).then(res => {
        if(res.status==200){
            window.location.href="/login"
        }
        else{
            if(res.status==401) document.getElementById("alert").innerHTML = "<strong><p style='text-align : center; color: red; border-radius: 5px 5px 5px 5px' onclick='return false'>EMAIL-ID already Registered</p></strong>"
            if(res.status==402) document.getElementById("alert").innerHTML = "<strong><p style='text-align : center; color: red; border-radius: 5px 5px 5px 5px' onclick='return false'>PASSWORDS don't MATCH</p></strong>"
            if(res.status==403) document.getElementById("alert").innerHTML = "<strong><p style='text-align : center; color: red; border-radius: 5px 5px 5px 5px' onclick='return false'>Please enter all the Details</p></strong>"
        }
    })
})