const summaryContainer = document.querySelector('#summary');

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.rentals);
    displayVehicles(data.rentals);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
 
getData();

function createSummaryCard(rentalCategory) {
    const div = document.createElement('div');
    div.classList.add('summary-card');
  
    // Create a header to represent the rental type
    const h3 = document.createElement('h3');
    h3.textContent = rentalCategory.rentalType;
  
    const scooterehicle = rentalCategory.vehicles[0];
  
    if (scooterVehicle) {
      const image = document.createElement('img');
      image.src = scooter.webp;
      image.alt = `${scooter.vehicle} Image`;
      image.loading = 'lazy';
      image.width = '300';
      image.height = '200';
  
      const summary = document.createElement('p');
      summary.textContent = scooterVehicle.summary;

  
      div.appendChild(h3);
      div.appendChild(image);
      div.appendChild(summary);
  
      return div;
    }
  }

function displayVehicles(rentals) {
    summaryContainer.innerHTML = ''; 
    rentals.forEach(rentalCategory => {
      const vehicleCard = createSummaryCard(rentalCategory);
      if (vehicleCard) {
        summaryContainer.appendChild(vehicleCard);
      }
    });
  }
    
      