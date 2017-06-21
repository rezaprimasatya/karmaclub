function findmax(array) {
    var max = 0;
    var a = array.length;
    for (counter = 0; counter < a; counter++) {
        if (array[counter] > max) {
            max = array[counter];
        }
    }
    return max;
}
$( window ).resize(function() {
    $("#benefits-blocks .ccm-layout-column-wrapper").each(function () {
        var max_h = [];
        $(this).children('.ccm-layout-column').each(function () {
            max_h.push($(this).height());
        })
        var max_val = 0;
        max_val = findmax(max_h)
        $(this).children('.ccm-layout-column').each(function () {
            $(this).children('.ccm-layout-column-inner').css('min-height', max_val + 'px')
        });
    })
})

$(document).ready(function () {

    $("#form-287").validate();

    $(".chosen-select").chosen();

    if ($("#miniSurveyView445 .alert-success").length > 0) {
       $("#miniSurveyView445 .fields").hide();
       $("#miniSurveyView445 .form-actions").hide();
    } else {
        $("#miniSurveyView445 .fields").show();
        $("#miniSurveyView445 .form-actions").show();
    }


    $("#benefits-blocks .ccm-layout-column-wrapper").each(function () {
        var max_h = [];
        $(this).children('.ccm-layout-column').each(function () {
            max_h.push($(this).height());
        })
        var max_val = 0;
        max_val = findmax(max_h)
        $(this).children('.ccm-layout-column').each(function () {
            $(this).children('.ccm-layout-column-inner').css('min-height', max_val + 'px')
        });
    })

    $("#karma-packs .ccm-layout-column-wrapper .ccm-layout-column").addClass('animate-opacity');
    $("#karma-packs .ccm-layout-column-wrapper .ccm-layout-column .ccm-layout-column-inner").addClass('pack__item');

    $("#karma-packs .ccm-layout-column-wrapper .ccm-layout-column .ccm-layout-column-inner picture").replaceWith(function () {
        return $('<div/>', {
            html: $(this).html()
        });
    });
    $("#karma-packs .ccm-layout-column-wrapper .ccm-layout-column .ccm-layout-column-inner div").addClass('thumb');
    $("#karma-packs .ccm-layout-column-wrapper .ccm-layout-column .ccm-layout-column-inner h4").each(function () {
        $(this).after('<span></span>')

        var text = $(this).html();
        text = text.replace("/", "<br />");
        $(this).html(text);
    });


    var curr_nav= $("#curr_nav").val();
    $(".menu a").removeClass('current-menu-item');
    $(".menu a").each(function() {
        var s_nav = $(this).attr('href');
        if (s_nav == curr_nav) {
            $(this).addClass('current-menu-item');
        }
    })

    $(".ccm-block-type-form").addClass('form__wrapper');
    $(".ccm-block-type-form label").each(function() {
        $(this).children('span').remove();
        var label_txt = $(this).html();
        label_txt = $.trim(label_txt)
        $(this).next().attr('placeholder', label_txt).addClass('form-control')
        $(this).next().after('<span class="border"></span>')
        $(this).hide()
    })
    $(".ccm-block-type-form input[type=submit]").replaceWith(function () {
        return $('<button/>', {
            html: $(this).html()
        });
    });
    $(".ccm-block-type-form select").each(function() {
        $(this).addClass('selectpicker')
        $(this).select2({minimumResultsForSearch: 1 / 0})
    })
    $(".ccm-block-type-form  button").attr('type','submit').addClass('btn btn-default').html('Send <i class="fa fa-send"></i>')
    $(".newsletter__wrapper button").attr('type','submit').addClass('btn btn-primary').html('Sign Up')
})