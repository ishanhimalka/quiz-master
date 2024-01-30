const apiUrl = 'https://opentdb.com/api.php?amount=40&category=18&difficulty=medium&type=multiple';


const contactForm = document.getElementById('form');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("adsa");
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            return response.json();
        })
        .then(data => {
            for (let index = 0; index < data.results.length; index++) {
                console.log(data.results[index]);
            }
         })
        .catch(error => {
            console.error('Error:', error);
        });
});