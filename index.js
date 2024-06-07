document.addEventListener('DOMContentLoaded', function(){
    getCars();
});

function getCars() {
    fetch('http://localhost:3000/cars')
    .then(res => res.json())
    .then(cars => {
        cars.forEach(DisplayCars);
    });
}

function DisplayCars(car) {
    // Create a container for each car 
    const carItem = document.createElement('div');
    carItem.classList.add('car-item');

    // Create and append the image
    const carImage = document.createElement('img');
    carImage.src = car.image;
    carImage.alt = car.title;
    carItem.appendChild(carImage);

    // Create and append the title
    const carTitle = document.createElement('h2');
    carTitle.textContent = car.title;
    carItem.appendChild(carTitle);

    // Create and append the brand 
    const carBrand = document.createElement('p');
    carBrand.textContent = `Brand: ${car.car_brand}`;
    carItem.appendChild(carBrand);

    // Create and append the price
    const carPrice = document.createElement('p');
    carPrice.textContent = `Price: ${car.price}`;
    carItem.appendChild(carPrice);

    // Create and append the manufactured year
    const carYear = document.createElement('p');
    carYear.textContent = `Manufactured Year: ${car.manufactured_year}`;
    carItem.appendChild(carYear);

    // Create and append the Buy button
    const buyButton = document.createElement('button');
    buyButton.textContent = 'Buy';
    buyButton.classList.add('buy-button'); // Add a class for styling if needed
    carItem.appendChild(buyButton);

    // Append the car item to the car list container
    document.getElementById('carList').appendChild(carItem);
}

// Add event listener to search button
// document.getElementById('searchButton').addEventListener('click', function() {
//     const carName = document.getElementById('carTitle').value;
//     searchCar(carName);
// });

// function searchCar(name) {
//     fetch('http://localhost:3000/cars')
//         .then(res => res.json())
//         .then(cars => {
//             const results = cars.filter(car => car.title.toLowerCase().includes(name.toLowerCase()));
//             displayResults(results);
//         });
// }

// function displayResults(results) {
//     const resultsContainer = document.getElementById('carList');
//     resultsContainer.innerHTML = ''; // Clear previous results

//     if (results.length === 0) {
//         resultsContainer.innerHTML = '<p>No cars found.</p>';
//         return;
//     }

//     results.forEach(DisplayCars);
// }
