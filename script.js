document.getElementById('toggleButton').addEventListener('click', function() {
    var image = document.getElementById('myImage');
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
});
