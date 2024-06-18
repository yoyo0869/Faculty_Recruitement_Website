form.addEventListener("submit", ()=>{
    const upd2 = {
        p_uni : college_phd.value,
        p_dept : stream.value,
        p_sup : supervisor.value,
        p_year : yoj_phd.value,
        p_def : dod_phd.value,
        p_award : doa_phd.value,
        p_title : phd_title.value,
        m_deg : pg_degree.value,
        m_uni : pg_college.value,
        m_dept : pg_subjects.value,
        m_yoj : pg_yoj.value,
        m_yoc : pg_yog.value,
        m_dur : pg_duration.value,
        m_cgpa : pg_perce.value,
        m_class : pg_rank.value,
        b_deg : ug_degree.value,
        b_uni : ug_college.value,
        b_dept : ug_subjects.value,
        b_yoj : ug_yoj.value,
        b_yoc : ug_yog.value,
        b_dur : ug_duration.value,
        b_cgpa : ug_perce.value,
        b_class : ug_rank.value,
        tw_school : school1.value,
        tw_year : passing_year1.value,
        tw_grade : s_perce1.value,
        tw_class : s_rank1.value,
        ten_school : school2.value,
        ten_year : passing_year2.value,
        ten_grade : s_perce2.value,
        ten_class : s_rank2.value
    }
    fetch("/api/upd2",{
        method : "POST",
        body : JSON.stringify(upd2),
        credentials : "include",
        headers:{
            "Content-type": "application/json"
        }
    }).then(res=>{
        if(res.status==200){
          window.location.href="/employ"
        }
    })
})