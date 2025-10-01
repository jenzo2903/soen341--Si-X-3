function scheduleService(serviceName) {
    const serviceDiv = document.createElement('div');
    serviceDiv.classList.add('service-item');
    serviceDiv.innerHTML = `
        <p>${serviceName}</p>
        <button onclick="cancelService(this)">Cancel Booking</button>
    `;
    document.getElementById('scheduledServicesList').appendChild(serviceDiv);

    // Hide "No services scheduled" message if a service is booked
    document.getElementById('noServicesMessage').style.display = 'none';
}

function cancelService(button) {
    button.parentNode.remove();

    // Show "No services scheduled" message if no services remain
    const scheduledServicesList = document.getElementById('scheduledServicesList');
    if (!scheduledServicesList.hasChildNodes()) {
        document.getElementById('noServicesMessage').style.display = 'block';
    }
}
