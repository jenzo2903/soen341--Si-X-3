//FOR LOGIN AND SIGN IN + CREATING ARRAY
console.log("JavaScript is loaded and running!");
// Array to hold all clients
let clients = JSON.parse(localStorage.getItem('clients')) || [];

// Function to register a new user
function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    

    // Create a new client object
    let newClient = {
        username: username,
        password: password,
        name: name,
        email: email,
        phone: phone,
        address: address
    };

    // Add the new client to the clients array
    clients.push(newClient);

    // Save the updated array in local storage
    localStorage.setItem('clients', JSON.stringify(clients));

    // Redirect to login page after registration
    window.location.href = './HomePage.html';
}

// Function to login a user
function loginUser() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    let clients = JSON.parse(localStorage.getItem('clients')) || [];
    // Find the user in the clients array
    let foundUser = clients.find(client => 
        client.username === enteredUsername && client.password === enteredPassword);
    
    if (foundUser) {
        // Redirect to the client dashboard
        localStorage.setItem('currentUser', enteredUsername);
       //not sure maybe have to put back localStorage.setItem('currentUser', JSON.stringify(foundUser));
        window.location.href = './ClientDash.html';
    } else {
        alert('Invalid username or password.');
    }
}


// to edit account (client)
function submitChanges() {
    const updatedName = document.getElementById('name').value;
    const updatedUsername = document.getElementById('username').value;
    const updatedEmail = document.getElementById('email').value;
    const updatedPhone = document.getElementById('phone').value;
    const updatedAddress = document.getElementById('address').value;

    // Get the currently logged-in user (could be stored during login)
    const currentUser = JSON.parse(localStorage.getItem('currentUser')); // Assuming you store the logged-in user here

    // Get all clients from localStorage
    let clients = JSON.parse(localStorage.getItem('clients')) || [];

    // Find the current client in the array
    let clientIndex = clients.findIndex(client => client.username === currentUser.username);

    if (clientIndex !== -1) {
        // Update the found client object with the new data
        clients[clientIndex] = {
            username: updatedUsername,
            password: clients[clientIndex].password, // Keep the same password
            name: updatedName,
            email: updatedEmail,
            phone: updatedPhone,
            address: updatedAddress
        };

        // Save the updated clients array back to localStorage
        localStorage.setItem('clients', JSON.stringify(clients));

        // Also update the currently logged-in user data
        localStorage.setItem('currentUser', JSON.stringify(clients[clientIndex]));

        // Notify the user and redirect to the dashboard
        alert('Account updated successfully!');
        window.location.href = './ClientDash.html';
    
}
}


//sign out 
function signOut() {
    // Clear user data from localStorage (or session data if you had that)
    localStorage.removeItem('currentUser');

    // Redirect to the main page after signing out
    window.location.href = 'mainpage.html';
}



//delete account 
function deleteAccount() {
    // Get the currently logged-in user
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        // Ask for user confirmation
        const confirmation = confirm('Are you sure you want to delete your account? This action cannot be undone.');

        if (confirmation) {
            // Get all clients from localStorage
            let clients = JSON.parse(localStorage.getItem('clients')) || [];

            // Find the index of the current user in the clients array
            let clientIndex = clients.findIndex(client => client.username === currentUser.username);

            if (clientIndex !== -1) {
                // Remove the client from the array
                clients.splice(clientIndex, 1);

                // Save the updated clients array back to localStorage
                localStorage.setItem('clients', JSON.stringify(clients));

                // Clear the current user data
                localStorage.removeItem('currentUser');

                // Notify the user
                alert('Your account has been deleted successfully.');

                // Redirect to the main page or login page
                window.location.href = 'mainpage.html';
            } else {
                alert('Account not found.');
            }
        }
    } else {
        alert('No user is currently logged in.');
    }
}

// Array of offered services (static, hardcoded in the frontend)
const services = [
    { id: 1, name: "Residential Cleaning", description: "Thorough cleaning of your home, including dusting, vacuuming, and sanitizing surfaces." },
    { id: 2, name: "Commercial Cleaning", description: "Professional cleaning services for offices and businesses to maintain a clean work environment." }
   
];



// Function to display the offered services dynamically
function displayOfferedServices() {
    const servicesList = document.getElementById('servicesList');
 
    servicesList.innerHTML = ''; // Clear any existing content

    // Loop through the services array and create HTML elements for each service
    services.forEach(service => {
        console.log(`Creating service for: ${service.name}`); // Debugging message

        const serviceDiv = document.createElement('div');
        serviceDiv.classList.add('service-item');

        const serviceName = document.createElement('h3');
        serviceName.textContent = service.name; // Set service name

        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description; // Set service description

        const scheduleButton = document.createElement('button');
        scheduleButton.textContent = `Select ${service.name}`; // Button label
        scheduleButton.onclick = () => selectService(service.name); // Attach click event to button

        // Append name, description, and button to the service div
        serviceDiv.appendChild(serviceName);
        serviceDiv.appendChild(serviceDescription);
        serviceDiv.appendChild(scheduleButton);

        // Append the service div to the servicesList div
        servicesList.appendChild(serviceDiv);
    });
}
//let selectedServiceName = null;
// Function to handle service selection
function selectService(serviceName) {
    console.log(`Service selected: ${serviceName}`);
    selectedServiceName = serviceName; 
    document.getElementById('selectedService').textContent = `You selected: ${serviceName}`; // Display the selected service
    document.getElementById('scheduleSection').style.display = 'block'; // Show the schedule section
}



function confirmScheduling() {
    const selectedService = document.getElementById('selectedService').textContent.replace('You selected: ', '');
    const selectedDate = document.getElementById('scheduleDate').value;

    const currentUser = localStorage.getItem('currentUser');
    if (!selectedDate) {
        alert('Please select a date.');
        return;
    }

    // Retrieve existing scheduled services or create a new array
   // const scheduledServices = JSON.parse(localStorage.getItem('scheduledServices')) || [];

    // Store both the service name and the selected date
    //scheduledServices.push({ serviceName: selectedService, date: selectedDate });

    // Save the updated array to local storage
    //localStorage.setItem('scheduledServices', JSON.stringify(scheduledServices));


//chat said to add these 2 lines
    let clientServices = JSON.parse(localStorage.getItem(`services_${currentUser}`)) || [];

    // Store both the service name and the selected date
    clientServices.push({ serviceName: selectedService, date: selectedDate });
    localStorage.setItem(`services_${currentUser}`, JSON.stringify(clientServices));

    alert(`${selectedService} successfully scheduled for ${selectedDate}!`);

    // Reset form elements
    document.getElementById('scheduleSection').style.display = 'none';
    document.getElementById('scheduleDate').value = '';
}

// Ensure the services are displayed after the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded, running displayOfferedServices...");
    displayOfferedServices();
});


document.addEventListener('DOMContentLoaded', function() {
    displayScheduledServices();
});

function displayScheduledServices() {

      //chat added these Get the logged-in user's username
      const currentUser = localStorage.getItem('currentUser');

      if (!currentUser) {
          alert('No user is currently logged in.');
          return;
      }
  
    const scheduledServices = JSON.parse(localStorage.getItem('services_${currentUser}')) || [];
    const futureServicesDiv = document.getElementById('futureServices');
    const pastServicesDiv = document.getElementById('pastServices');

    // Get the current date
    const currentDate = new Date();

    if (scheduledServices.length === 0) {
        futureServicesDiv.textContent = "No future services scheduled.";
        pastServicesDiv.textContent = "No past services.";
        return;
    }

    // Clear existing content
    futureServicesDiv.innerHTML = '';
    pastServicesDiv.innerHTML = '';

    // Loop through the scheduled services and separate past and future
    scheduledServices.forEach(service => {
        if (service.serviceName && typeof service.serviceName === 'string' && service.date) {
        const serviceDate = new Date(service.date);
        const serviceItem = document.createElement('div');
        serviceItem.textContent = `${service.serviceName} on ${service.date}`;

        if (serviceDate >= currentDate) {
            // Future service
            futureServicesDiv.appendChild(serviceItem);
        } else {
            // Past service
            pastServicesDiv.appendChild(serviceItem);
        }
    }
    });

    // If no future services
    if (!futureServicesDiv.hasChildNodes()) {
        futureServicesDiv.textContent = "No future services scheduled.";
    }

    // If no past services
    if (!pastServicesDiv.hasChildNodes()) {
        pastServicesDiv.textContent = "No past services.";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayBookedServices();
});

function displayBookedServices() {
    const currentUser = localStorage.getItem('currentUser'); 
    const bookedServices = JSON.parse(localStorage.getItem(`services_${currentUser}`)) || [];
    const cancelServicesList = document.getElementById('cancelServicesList');
    const noServicesMessage = document.getElementById('noServicesMessage');

    if (bookedServices.length === 0) {
        noServicesMessage.style.display = 'block';
        return;
    }

    cancelServicesList.innerHTML = ''; // Clear any existing content

    // Loop through booked services and create cancel buttons
    bookedServices.forEach((service, index) => {
        if (service.serviceName && service.date) {
        const serviceItem = document.createElement('div');
        serviceItem.classList.add('service-item');

        const serviceName = document.createElement('p');
        serviceName.textContent = `${service.servicesName} on ${service.date}`;

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel Service';
        cancelButton.onclick = () => confirmCancelService(index, service.serviceName); // Pass the index of the service

        serviceItem.appendChild(serviceName);
        serviceItem.appendChild(cancelButton);

        cancelServicesList.appendChild(serviceItem);
}});
}
function confirmCancelService(index, serviceName) {
    const confirmation = confirm(`Are you sure you want to cancel the service: ${serviceName}?`);

    if (confirmation) {
        cancelService(index);
    }
}
function cancelService(index) {
    const bookedServices = JSON.parse(localStorage.getItem('scheduledServices')) || [];

    // Remove the selected service from the array
    bookedServices.splice(index, 1);

    // Update local storage with the new list
    localStorage.setItem('scheduledServices', JSON.stringify(bookedServices));

    alert('Service cancelled successfully.');
    displayBookedServices();
}
