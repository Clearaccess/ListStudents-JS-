'use strict';

APP.model=(function(){
    
    var Student=APP.Student,
        students;
    
    var init=function(){
        students=[new Student("lastName1", "firstName1", "middleName1", "email1", new Date(2017,2,3,0,0,0,0), "male", 2),
            new Student("lastName2", "firstName2", "middleName2", "email2", new Date(2017,2,3,0,0,0,0), "female", 3),
            new Student("lastName3", "firstName3", "middleName3", "email3", new Date(2017,2,3,0,0,0,0), "male", 3)];
    };

    var getStudents=function(){
        return students;
    };

    var deleteStudent=function(index){
        students.splice(index,1);
    };

    //Format date YYYY-MM-DD
    var addStudent=function(lastName, firstName, middleName, email, dateBirthDay, sex, course){
        var student=new Student(lastName, firstName, middleName, email, _convertToDate(dateBirthDay), sex, course);
        students.push(student);
    };

    var updateStudent=function(index, lastName, firstName, middleName, email, dateBirthDay, sex, course){
        students[index].setLastName(lastName);
        students[index].setFirstName(firstName);
        students[index].setMiddleName(middleName);
        students[index].setEmail(email);
        students[index].setDateBirthDay(_convertToDate(dateBirthDay));
        students[index].setSex(sex);
        students[index].setCourse(course);
    };

    var _convertToDate=function(date){
        var part=date.split('-');
        return new Date(part[0],part[1]-1,part[2]);
    };
    
    init();

    return {
        getStudents: getStudents,
        addStudent: addStudent,
        updateStudent: updateStudent,
        deleteStudent: deleteStudent
    };
})();