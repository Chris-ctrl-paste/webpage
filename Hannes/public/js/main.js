$(function () {

    if ($('textarea#ta').length) {
        CKEDITOR.replace('ta');
    }
    
    if ($('textarea#experience').length) {
        CKEDITOR.replace('experience');
    }
    if ($('textarea#education').length) {
        CKEDITOR.replace('education');
    }
    if ($('textarea#productdesc').length) {
        CKEDITOR.replace('productdesc');
    }
    if ($('textarea#productwrite').length) {
        CKEDITOR.replace('productwrite');
    }
    if ($('textarea#editwrite').length) {
        CKEDITOR.replace('editwrite');
    }
    if ($('textarea#editdesc').length) {
        CKEDITOR.replace('editdesc');
    }
    if ($('textarea#edittitle').length) {
        CKEDITOR.replace('edittitle');
    }
    if ($('textarea#addtitle').length) {
        CKEDITOR.replace('addtitle');
    }

    if ($('#editor').ckeditor({
        enterMode : CKEDITOR.ENTER_BR,
        shiftEnterMode: CKEDITOR.ENTER_BR,
        
    }));


    $('a.confirmDeletion').on('click', function () {
        if (!confirm('Confirm deletion'))
            return false;
    });
    
    if ($("[data-fancybox]").length) {
        $("[data-fancybox]").fancybox();
    }

});




