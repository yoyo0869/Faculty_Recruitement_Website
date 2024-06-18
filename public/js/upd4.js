form.addEventListener("submit", ()=>{
    const upd4 = {
        txt1 : txt1.value,
        txt2 : txt2.value,
        txt3 : txt3.value,
        txt4 : txt4.value,
        txt5 : txt5.value,
        txt6 : txt6.value
    }
    fetch("/api/upd4",{
        method : "POST",
        body : JSON.stringify(upd4),
        credentials : "include",
        headers:{
            "Content-type": "application/json"
        }
    }).then(res=>{
        console.log(res.status)
        if(res.status==200){
          window.location.href="/subcomp"
        }
    })
})