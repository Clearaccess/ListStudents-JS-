'use strict';

APP.model=(function(){
    
    var Student=APP.Student,
        orderOfColumn=[1,1,1,1,1,1,1],
        students;
    
    var init=function(){
        students=[new Student("lastNameA", "firstNameA", "middleNameA", "email@1", new Date(2017,2,3,0,0,0,0), "male", 2),
            new Student("lastNameB", "firstNameB", "middleNameB", "email@2", new Date(2017,2,3,0,0,0,0), "female", 3),
            new Student("lastNameC", "firstNameC", "middleNameC", "email@3", new Date(2017,2,3,0,0,0,0), "male", 3)];
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

    var sortListByColumn=function(cellIndex){
        var compare=_defineCompare(cellIndex);
        
        students.sort(compare);
    };

    var _defineCompare=function(cellIndex){
        var compare;
        
        switch (cellIndex) {
            case 0:
                compare = function(a, b) {
                    return (a.getLastName()>b.getLastName())? orderOfColumn[cellIndex]:(-1)*orderOfColumn[cellIndex];
                };
                break;
            case 1:
                compare = function(a, b) {
                    return (a.getFirstName()>b.getFirstName())? orderOfColumn[cellIndex]:(-1)*orderOfColumn[cellIndex];
                };
                break;
            case 2:
                compare = function(a, b) {
                    return (a.getMiddleName()>b.getMiddleName())? orderOfColumn[cellIndex]:(-1)*orderOfColumn[cellIndex];
                };
                break;
            case 3:
                compare = function(a, b) {
                    return (a.getEmail()>b.getEmail())? orderOfColumn[cellIndex]:(-1)*orderOfColumn[cellIndex];
                };
                break;
            case 4:
                compare = function(a, b) {
                    if(+a.getDateBirthDay().getFullYear()>+b.getDateBirthDay().getFullYear()){
                        return orderOfColumn[cellIndex];
                    } else if(+a.getDateBirthDay().getFullYear()<+b.getDateBirthDay().getFullYear()){
                        return (-1)*orderOfColumn[cellIndex];
                    }

                    if(+a.getDateBirthDay().getMonth()>+b.getDateBirthDay().getMonth()){
                        return orderOfColumn[cellIndex];
                    } else if(+a.getDateBirthDay().getMonth()<+b.getDateBirthDay().getMonth()){
                        return (-1)*orderOfColumn[cellIndex];
                    }

                    if(+a.getDateBirthDay().getDate()>+b.getDateBirthDay().getDate()){
                        return orderOfColumn[cellIndex];
                    } else if(+a.getDateBirthDay().getDate()<+b.getDateBirthDay().getDate()){
                        return (-1)*orderOfColumn[cellIndex];
                    }

                    return 0;
                };
                break;
            case 5:
                compare = function(a, b) {
                    return (a.getSex()>b.getSex())? orderOfColumn[cellIndex]:(-1)*orderOfColumn[cellIndex];
                };
                break;
            case 6:
                compare = function(a, b) {
                    return (+a.getCourse()>+b.getCourse())? orderOfColumn[cellIndex]:(-1)*orderOfColumn[cellIndex];
                };
                break;
        }
        
        orderOfColumn[cellIndex]*=-1;
        return compare;
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
        deleteStudent: deleteStudent,
        sortListByColumn: sortListByColumn
    };
})();