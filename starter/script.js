$(document).ready(function() {
    const now = dayjs();
    const todayDate = now.format('dddd, MMMM D, YYYY h:mm A');
    $('#currentDay').text( `${todayDate}`);
    const currentHour = dayjs().format('H');

    $('.hour').each(function() {
        const divHour = parseInt($(this).text().replace(/[^\d]/g, ''));
        if (divHour < currentHour) {
            // Past hour logic
            $(this).siblings('.description').addClass('past');
        } else if (divHour === currentHour) {
            // Current hour logic
            $(this).siblings('.description').addClass('present');
        } else {
            // Future hour logic
            $(this).siblings('.description').addClass('future');
        }
    });
  });
 

  $(document).ready(function() {
    // Save text to local storage when the save button is clicked
    $('.saveBtn').click(function() {
        const textToSave = $(this).siblings('.description').find('.task').val();
        const taskId = $(this).siblings('.description').find('.task').data('task-id');
        localStorage.setItem('savedTask_' + taskId, textToSave);
        alert('Your task is successfully saved!');
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
