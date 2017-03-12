'use strict';

APP.validator = (function (win) {

    $.validator.addMethod("goodString", function(value, element, params) {
        var i=0,
            len=value.length,
            space=0,
            reg=/[a-zA-Z ]/;

        for(i=0;i<len;i++){
            if(value[i]==' '){
                space++;
            }

            if(!reg.test(value[i])){
                return false;
            }
        }

        return space!=len;
    }, "Please enter string keep letters");

    var init=function(){

        $('#editForm').validate({
            rules: {
                firstName: {
                    rangelength: [1,15],
                    goodString: true,
                    required: true
                },
                lastName: {
                    rangelength: [1,15],
                    goodString: true,
                    required: true
                },
                middleName: {
                    rangelength: [1,15],
                    goodString: true,
                    required: true
                },
                email: {
                    email: true,
                    required: true
                },
                dateBirthday: {
                    required: true
                },
                sex: {
                    required: true
                },
                course: {
                    required: true,
                    range: [1,6]
                }
            }
        });
    };

    init();
})(window || {});