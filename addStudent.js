function addStudent(studentString) {
    let message = "";
    if(Student.validateStudentString(studentString)){
        let student = Student.initStudentFromString(studentString);
        studentsDB.save(student);
        message = `<span style="color: green;">学生${student.name}的成绩被添加</span>`;
    } else {
        message = `<span style="color: red;">请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）</span>`;
    }
    $('#message').html(message);
}
