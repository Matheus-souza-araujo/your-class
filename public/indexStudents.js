const students = document.querySelectorAll('.student')

students.forEach(student =>{
    let grade = student.querySelector(".grades")

    if (Number(grade.innerHTML) <= 3){
        let tempHTML = grade.innerHTML + "º E.M."
        grade.innerHTML = tempHTML
    } else {
        grade.innerHTML = grade.innerHTML + "º E.F."
    }
})