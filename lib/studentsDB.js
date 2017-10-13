class StudentsDB {
    constructor(){
        let students = localStorage.getItem("students");
        if (!students){
            localStorage.setItem("students", JSON.stringify([]));
        }
    }

    save(student){
        let students = this.all();
        students.push(student);
        localStorage.setItem("students", JSON.stringify(students));
    }

    filter(queryString){
        let students = JSON.parse(localStorage.getItem("students"));
        return students.filter((student) => {
            return queryString.split(', ').includes(student.studentNum);
        });
    }

    all(){
        return JSON.parse(localStorage.getItem("students"));
    }
}
