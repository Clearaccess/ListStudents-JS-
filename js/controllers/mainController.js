'use strict';

APP.controller = (function (model, view, validator) {
    var _model=model,
        _view=view,
        _validator=validator,
        NAME_TITLE_ADD="Add New Student",
        NAME_TITLE_EDIT="Edit Information of Student",
        NAME_BUTTON_ADD="Add",
        NAME_BUTTON_UPDATE="Update";

    var init=function(){
        var students=_model.getStudents();
        _subscribeEvents();
        _view.show(students);
    };
    
    var _subscribeEvents=function(){
        $('#modal').on('show.bs.modal', _handOpenModal);
        $('#modal').on('hidden.bs.modal', _handCloseModal);
        $('#actButton').on('click', _handActButton);
        $('#modalDel').on('show.bs.modal', _handOpenModalDel);
        $('#modalDel').on('hidden.bs.modal', _handCloseModalDel);
        $('#actButtonDel').on('click', _handDeleteStudent);
    };

    var _handOpenModal=function(event){
        var button = $(event.relatedTarget),
            indexElement = button.data('index'),
            modal = $(this);

        if(button.attr('id')=='edit'){
            modal.find('#modalLabel').text(NAME_TITLE_EDIT);
            modal.find('#actButton').text(NAME_BUTTON_UPDATE);
            modal.find('#actButton');
            _fillModal(modal,indexElement);
        } else if(button.attr('id')=='add'){
            modal.find('#modalLabel').text(NAME_TITLE_ADD);
            modal.find('#actButton').text(NAME_BUTTON_ADD);
        }
    };



    var _handCloseModal=function(event){
        var modal = $(this),
            students=_model.getStudents();

        _clearModal(modal);
        _view.show(students);
    };

    var _handDeleteStudent=function(event){
        var button = $(event.target),
            indexElement = button.data('index');

        _deleteStudent(indexElement);
        $('#modalDel').modal('hide');
    };

    var _handOpenModalDel=function(event){
        var button = $(event.relatedTarget),
            indexElement = button.data('index'),
            modal = $(this);

        modal.find('#actButtonDel').attr('data-index',indexElement);
    };

    var _handCloseModalDel=function(event){
        var modal = $(this),
            students=_model.getStudents();

        modal.find('#actButtonDel').removeAttr('data-index');
        _view.show(students);
    };

    var _deleteStudent=function(index){
        _model.deleteStudent(index);
    };

    var _handActButton=function(event){
        var button = $(event.target),
            indexElement = button.data('index');

        if(indexElement===undefined){
            _addStudent();
        }else{
            _updateStudent(indexElement);
        }

        $('#modal').modal('hide');
    };

    var _addStudent=function(){
        var lastName=$('#lastName').val(),
        firstName=$('#firstName').val(),
        middleName=$('#middleName').val(),
        email=$('#email').val(),
        dateBirthday=$('#dateBirthday').val(),
        sex=$('#sex').val(),
        course=$('#course').val();

        _model.addStudent(lastName,firstName,middleName,email,dateBirthday,sex,course);
    };

    var _updateStudent=function(index){
        var lastName=$('#lastName').val(),
            firstName=$('#firstName').val(),
            middleName=$('#middleName').val(),
            email=$('#email').val(),
            dateBirthday=$('#dateBirthday').val(),
            sex=$('#sex').val(),
            course=$('#course').val();

        _model.updateStudent(index,lastName,firstName,middleName,email,dateBirthday,sex,course);
    };

    var _fillModal=function(modal,index){
        var students=_model.getStudents();

        modal.find('#lastName').val(students[index].getLastName());
        modal.find('#firstName').val(students[index].getFirstName());
        modal.find('#middleName').val(students[index].getMiddleName());
        modal.find('#email').val(students[index].getEmail());
        modal.find('#dateBirthday').val(_fillDate(students[index].getDateBirthDay()));
        modal.find('#sex').val(students[index].getSex());
        modal.find('#course').val(students[index].getCourse());
        modal.find('#actButton').attr('data-index',index);

    };

    var _clearModal=function(modal){
        modal.find('#lastName').val('');
        modal.find('#firstName').val('');
        modal.find('#middleName').val('');
        modal.find('#email').val('');
        modal.find('#dateBirthday').val('');
        modal.find('#sex').val('male');
        modal.find('#course').val('');
        modal.find('#actButton').removeAttr('data-index');
    };

    var _fillDate=function(date){
        var day = ("0" + date.getDate()).slice(-2),
            month = ("0" + (date.getMonth() + 1)).slice(-2),
            year=date.getFullYear();

        return year+"-"+month+"-"+day;
    };

    init();

    return {
        init: init
    };
})(APP.model || {}, APP.view || {}, APP.validator || {});