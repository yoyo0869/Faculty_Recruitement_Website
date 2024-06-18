form.addEventListener("submit", ()=>{
    const upd = {
        adv_num : adv_num.value,
        app_num : ref_num.value,
        post : post.value,
        dept : dept.value,
        doa : doa.value,
        nationality : nationality.value,
        gender : gender.value,
        mar_status : mstatus.value,
        dob : dob.value,
        mid_name : mname.value,
        id_proof : id_proof.value,
        fat_name : father_name.value,
        c_city : cadd1.value,
        c_state : cadd2.value,
        c_country : cadd3.value,
        c_pin : cadd4.value,
        p_city : padd1.value,
        p_state : padd2.value,
        p_country : padd3.value,
        p_pin : padd4.value,
        mob : mobile.value,
        mob2 : mobile_2.value, 
        email2 : email_2.value,
        land_mob : landline.value
    }
    fetch("/api/upd",{
        method : "POST",
        body : JSON.stringify(upd),
        credentials : "include",
        headers:{
            "Content-type": "application/json"
        }
    }).then(res=>{
        if(res.status==200){
          window.location.href="/acde"
        }
    })
})

form2.addEventListener("submit", ()=>{
    const chg={
        c_pass : cr_password.value,
        n_pass : n_password.value,
        cn_pass : cn_password.value
    }
    fetch("/api/chg",{
        method : "POST",
        body : JSON.stringify(chg),
        credentials : "include",
        headers:{
            "Content-type": "application/json"
        }
    }).then(res=>{
        if(res.status==200){
            window.location.href="/login"
        }
        else{
            if(res.status==401) document.getElementById("alert").innerHTML = "<strong><p style='text-align : center; color: red; border-radius: 5px 5px 5px 5px' onclick='return false'>WRONG CREDENTIALS</p></strong>"
            if(res.status==402) document.getElementById("alert").innerHTML = "<strong><p style='text-align : center; color: red; border-radius: 5px 5px 5px 5px' onclick='return false'>Passwords don't match</p></strong>"
        }
    })
})