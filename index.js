function displayStudentScores(students) {
    let studentScoresViewTemplate = `
                    <table class="table">
                        <tr>
                            <th>姓名</th>
                            <th>学号</th>
                            <th>数学</th>
                            <th>语文</th>
                            <th>英语</th>
                            <th>编程</th>
                            <th>平均分</th>
                            <th>总分</th>
                        </tr>
                        ${ (students.length > 0) ?
        students.map((student) => {
            return `<tr>
                                <td>${student.name}</td><td>${student.studentNum}</td><td>${student.mathScore}</td><td>${student.mandarinScore}</td><td>${student.englishScore}</td><td>${student.programmingScore}</td><td>${roundAtMost1Decimal(Student.averageScore(student))}</td><td>${roundAtMost1Decimal(Student.totalScore(student))}</td>
                            </tr>`;
        }).join('') : `<tr><td>学生不存在。</td></tr>`
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
    if(Student.validateQueryString(queryString)){
        $('#message').html('');
        return studentsDB.filter(queryString);
    } else {
        $('#message').html('<span style="color: red;">请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按Search提交：</span>');
        return [];
    }
}

