//Humberger Menu
$(".humberger__open").on('click', function () {
  $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
  $(".humberger__menu__overlay").addClass("active");
  $("body").addClass("over_hid");
});

$(".humberger__menu__overlay").on('click', function () {
  $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
  $(".humberger__menu__overlay").removeClass("active");
  $("body").removeClass("over_hid");
});

/*------------------
    Navigation
--------------------*/
$(".mobile-menu").slicknav({
  prependTo: '#mobile-menu-wrap',
  allowParentLinks: true
});


// 
$(window).scroll(function () {
  if ($(window).scrollTop() > 10) {
    $('#navBar').addClass('floatingNav');
  } else {
    $('#navBar').removeClass('floatingNav');
  }
});

$(document).ready(function () {
  $("#sidebar-collapse").on('click', function () {
    $('#sidebar').toggleClass('active');
    $('#content').toggleClass('active');
  });

  $(".more-button,.body-overlay").on('click', function () {
    $('#sidebar,.body-overlay').toggleClass('show-nav');
  });

});

//preview
var loadFile = function(event) {
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
  }
};

//ckeditor5
// ClassicEditor
//     .create( document.querySelector( '#editor' ), {

//         toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' , 'insertTable', 'undo', 'redo'],
//         heading: {
//             options: [
//                 { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
//                 { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
//                 { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
//             ]
//         }
//     } )
//     .catch( error => {
//         console.log( error );
//     } );

// document.querySelectorAll('.ckeditor').forEach(e => {
//   ClassicEditor
//     .create(e)
//     .then(editor => {
//       editor.model.document.on('change:data', () => {
//         e.value = editor.getData();
//       });
//     })
//     .catch(error => {
//       console.error(error);
//     });
// })

