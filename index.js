function addStudent() {
    let newStudent = new Student("name", "123", "汉", "1", "语文", "1", "数学", "1", "英语", "1", "编程", "1");
    studentsDB.save(newStudent);
}

function displayStudentScores(students) {
    let studentScoresViewTemplate = `
                    <table class="table">
                        <tr>
                            <th>姓名</th>
                            <th>数学</th>
                            <th>语文</th>
                            <th>英语</th>
                            <th>编程</th>
                            <th>平均分</th>
                            <th>总分</th>
                        </tr>
                        ${ students ?
        students.map((student) => {
            return `<tr>
                                <td>${student.name}</td><td>${student.mathScore}</td><td>${student.mandarinScore}</td><td>${student.englishScore}</td><td>${student.programmingScore}</td><td>${roundAtMost1Decimal(Student.averageScore(student))}</td><td>${roundAtMost1Decimal(Student.totalScore(student))}</td>
                            </tr>`;
        }).join('') : `<tr><td>No student is found.</td></tr>`
        }
                     </table>
                     <p>全班总分平均数：${roundAtMost1Decimal(Student.averageOfTotalScoreSum(students))}</p>
                     <p>全班总分中位数：${roundAtMost1Decimal(Student.medianOfTotalScoreSum(students))}</p>
                `;
    $('#student-scores-report').html(studentScoresViewTemplate);
}

function displayAllStudentScores() {
    let students = studentsDB.all();
    displayStudentScores(students);
}

function searchStudents(queryString) {
    return studentsDB.filter(queryString);
}

