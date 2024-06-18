form.addEventListener("submit", ()=>{
    const upd3 = {
        e_pos : pres_emp_position.value,
        e_org : pres_emp_employer.value,
        e_status : pres_status.value,
        e_doj : pres_emp_doj.value,
        e_dol : pres_emp_dol.value,
        e_dur : pres_emp_duration.value,
        be_pos : position1.value,
        be_org : employer.value,
        be_doj : doj.value,
        be_dol : dol.value,
        be_dur : duration.value,
        area_sp : areaofsp.value,
        area_res : areaofres.value
    }
    fetch("/api/upd3",{
        method : "POST",
        body : JSON.stringify(upd3),
        credentials : "include",
        headers:{
            "Content-type": "application/json"
        }
    }).then(res=>{
        if(res.status==200){
          window.location.href="/publish"
        }
    })
})