'use strict';

APP.Student = (function () {

    var Student;

    var getLastName = function () {
        return this.lastName;
    };
    var getFirstName = function () {
        return this.firstName;
    };
    var getMiddleName = function () {
        return this.middleName;
    };
    var getEmail = function () {
        return this.email;
    };
    var getDateBirthDay = function () {
        return this.dateBirthDay;
    };
    var getSex = function () {
        return this.sex;
    };
    var getCourse = function () {
        return this.course;
    };
    var setLastName = function (lastName) {
        this.lastName=lastName;
    };
    var setFirstName = function (firstName) {
        this.firstName=firstName;
    };
    var setMiddleName = function (middleName) {
        this.middleName=middleName;
    };
    var setEmail = function (email) {
        this.email=email;
    };  
    var setDateBirthDay = function (date) {
        this.dateBirthDay=date;
    };
    var setSex = function (sex) {
        this.sex=sex;
    };
    var setCourse = function (course) {
        this.course=course;
    };

    Student = function (lastName, firstName, middleName, email, dateBirthDay, sex, course) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.email = email;
        this.dateBirthDay = dateBirthDay;
        this.sex = sex;
        this.course = course;
    };

    Student.prototype = {
        constructor: APP.Student,
        getLastName: getLastName,
        getFirstName: getFirstName,
        getMiddleName: getMiddleName,
        getEmail: getEmail,
        getDateBirthDay: getDateBirthDay,
        getSex: getSex,
        getCourse: getCourse,
        setLastName: setLastName,
        setFirstName: setFirstName,
        setMiddleName: setMiddleName,
        setEmail: setEmail,
        setDateBirthDay: setDateBirthDay,
        setSex: setSex,
        setCourse: setCourse
    };

    return Student;
})();