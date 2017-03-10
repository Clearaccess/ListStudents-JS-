'use strict';

APP.view = (function (window) {

    var $table;

    var show = function (students) {
        _clearListStudent();
        _showListStudent(students);
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

    return {
        show: show
    };

})(window || {});