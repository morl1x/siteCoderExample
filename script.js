document.addEventListener('DOMContentLoaded', () => {
    const servicesContainer = document.getElementById('services-container');

    fetch('services.json')
        .then(response => response.json())
        .then(data => {
            data.services.forEach(service => {
                const serviceElement = createServiceElement(service);
                servicesContainer.appendChild(serviceElement);
            });
        })
        .catch(error => {
            console.error('Ошибка загрузки данных:', error);
        });

    function createServiceElement(service) {
        const { title, description } = service;

        const serviceDiv = document.createElement('div');
        serviceDiv.classList.add('service');

        const titleElement = document.createElement('h2');
        titleElement.textContent = title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;

        serviceDiv.appendChild(titleElement);
        serviceDiv.appendChild(descriptionElement);

        return serviceDiv;
    }
});
