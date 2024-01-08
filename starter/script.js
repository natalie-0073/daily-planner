$(document).ready(function() {
    const now = dayjs();
    const todayDate = now.format('dddd, MMMM D, YYYY h:mm A');
    $('#currentDay').text( `${todayDate}`);
  });
  $(document).ready(function() {
    // Save text to local storage when the save button is clicked
    $('.saveBtn').click(function() {
        const textToSave = $(this).siblings('.description').find('.task').val();
        const taskId = $(this).siblings('.description').find('.task').data('task-id');
        localStorage.setItem('savedTask_' + taskId, textToSave);
        alert('Task saved to local storage!');
    });

    // Load any existing text from local storage on page load
    $('.task').each(function() {
        const taskId = $(this).data('task-id');
        const savedText = localStorage.getItem('savedTask_' + taskId);
        if (savedText) {
            $(this).val(savedText);
        }
    });
});




// $(document).ready(function() {
//     // Save text to local storage when a .saveBtn inside the body is clicked
//     $('body').on('click', '.saveBtn', function() {
//         const textToSave = $('.task').val();
//         localStorage.setItem('savedTask', textToSave);
//         console.log(textToSave);
//         alert('Task saved to local storage!');
//     });

//     // Load any existing text from local storage on page load
//     const savedText = localStorage.getItem('savedTask');
//     console.log(savedText);
//     if (savedText) {
//         $('.task').val(savedText);
//     }
// });
