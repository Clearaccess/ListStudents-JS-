'use strict';

APP.view = (function (window) {

    var $table;

    var show = function (students) {
        _clearListStudent();
        _showListStudent(students);
    };

    var showByCriteria = function (students, substring, field) {
        _clearListStudent();
        _showListStudentsByCriteria(students,substring, field);
    };

    var _showListStudent = function (students) {
        $table = $('#table');
        var i = 0,
            len = students.length,
            newEl;

        for (i = 0; i < len; i++) {
            newEl = _addStudent(students[i], i);
            $table.append(newEl);
        }
    };

    var _showListStudentsByCriteria=function(students, substring, field){
        $table = $('#table');
        var i = 0,
            len = students.length,
            newEl;

        for (i = 0; i < len; i++) {
            if(_checkComply(students[i],substring,field)) {
                newEl = _addStudent(students[i], i);
                $table.append(newEl);
            }
        }
    };

    var _checkComply=function(student,substring,field){
        var reg=new RegExp(substring.toLowerCase(),"g");
        if(field==0){
            return reg.test(student.getLastName().toLowerCase());
        }

        if(field==1){
            return reg.test(student.getFirstName().toLowerCase());
        }

        if(field==2){
            return reg.test(student.getMiddleName().toLowerCase());
        }

        return true;
    };

    var _clearListStudent = function () {
        $table = $('#table');
        $table.children().remove();
    };

    var _addStudent = function (student, index) {
        var std = "<tr ";
        std = std.concat("data-index=", index, ">", "<td>", student.getLastName(), "</td>", "<td>", student.getFirstName(), "</td>", "<td>", student.getMiddleName(), "</td>", "<td>", student.getEmail(), "</td>", "<td>", _addDate(student.getDateBirthDay()), "</td>", "<td>", student.getSex(), "</td>", "<td>", student.getCourse(), "</td>", "<td>", _addActiveElements(index), "</td>");
        return std.concat("</tr>")
    };

    var _addActiveElements = function (index) {
        var ae = "<button id='edit' type='button' class='btn btn-default btn-sm' data-index=" +
            index +
            " data-toggle=\"modal\" data-target=\"#modal\">Edit </button>" +
            "<button id=\"delete\" type=\"button\" class=\"btn btn-default btn-sm\" data-target=\"#modalDel\" data-toggle=\"modal\" data-index=" +
            index +
            "> Delete\ </button>";
        return ae;
    };

    var _addDate = function (date) {
        var day = ("0" + date.getDate()).slice(-2),
            month = ("0" + (date.getMonth() + 1)).slice(-2),
            year = date.getFullYear();

        return day + "." + month + "." + year;
    };
    
    var toggleIndicateOrder=function(cellIndex){
        if($('#nameColumn th:eq('+cellIndex+') span').hasClass('glyphicon-triangle-bottom')){
            $('#nameColumn th:eq('+cellIndex+') span').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
        } else {
            $('#nameColumn th:eq('+cellIndex+') span').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
        }
    };

    return {
        show: show,
        toggleIndicateOrder: toggleIndicateOrder,
        showByCriteria: showByCriteria
    };

})(window || {});