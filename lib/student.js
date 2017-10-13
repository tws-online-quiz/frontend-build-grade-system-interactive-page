class Student {
    constructor(name, studentNum, ethnic, klass, mandarin, mandarinScore, math, mathScore, english, englishScore, programming, programmingScore) {
        this.name = name;
        this.studentNum = studentNum;
        this.ethnic = ethnic;
        this.klass = klass;
        this.mandarin = mandarin;
        this.mandarinScore = mandarinScore;
        this.math = math;
        this.mathScore = mathScore;
        this.english = english;
        this.englishScore = englishScore;
        this.programming = programming;
        this.programmingScore = programmingScore;
    }

    static averageScore(student){
        return (Student.totalScore(student) / 4);
    }

    static totalScore(student){
        return (Number(student.mandarinScore) + Number(student.mathScore) + Number(student.englishScore) + Number(student.programmingScore));
    }

    static validateStudentString(studentString){
        const re = /^[\u4e00-\u9fa5]{1,4}, [0-9]{1,2}, [\u4e00-\u9fa5], [0-9]{1,2}, [\u4e00-\u9fa5]{1,10}: [0-9]{1,3}, [\u4e00-\u9fa5]{1,10}: [0-9]{1,3}, [\u4e00-\u9fa5]{1,10}: [0-9]{1,3}, [\u4e00-\u9fa5]{1,10}: [0-9]{1,3}$/;
        return re.test(studentString);
    }

    static initStudentFromString(studentString){
        const re = /([\u4e00-\u9fa5]{1,4}), ([0-9]{1,2}), ([\u4e00-\u9fa5]), ([0-9]{1,2}), ([\u4e00-\u9fa5]{1,10}): ([0-9]{1,3}), ([\u4e00-\u9fa5]{1,10}): ([0-9]{1,3}), ([\u4e00-\u9fa5]{1,10}): ([0-9]{1,3}), ([\u4e00-\u9fa5]{1,10}): ([0-9]{1,3})/;
        let name, studentNum, ethnic, klass, mandarin, mandarinScore, math, mathScore, english, englishScore, programming, programmingScore;
        [name, studentNum, ethnic, klass, mandarin, mandarinScore, math, mathScore, english, englishScore, programming, programmingScore] = studentString.match(re).slice(1);
        return new Student(name, studentNum, ethnic, klass, mandarin, mandarinScore, math, mathScore, english, englishScore, programming, programmingScore);
    }

    static validateQueryString(queryString){
        const re = /^[0-9]{1,2}(, [0-9]{1,2})*$/;
        return re.test(queryString);
    }

    static averageOfTotalScoreSum(students){
        if (students.length === 0){
            return 0;
        }

        return students.map((student) => {
            return Student.totalScore(student);
        }).reduce((totalScoreSum, totalScore) => {
            return totalScoreSum + totalScore;
        }) / students.length;
    }

    static medianOfTotalScoreSum(students){
        if (students.length === 0){
            return 0;
        }

        return students.map((student) => {
            return Student.totalScore(student);
        }).sort((left, right) => {
            return left - right;
        })[Math.round(students.length / 2) - 1];
    }
}
