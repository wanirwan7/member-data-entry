function fetchInstitutions() {
    fetch('/api/institution-counts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const entriesTbody = document.getElementById('institution-entries');
            entriesTbody.innerHTML = '';
            data.forEach(institution => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${institution.institution}</td>
                    <td>${institution.count}</td>
                    <td><button onclick="fetchInstitutionDetails('${institution.institution}')">View Details</button></td>
                `;
                entriesTbody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching institutions:', error);
        });
}

function fetchInstitutionDetails(institutionName) {
    // Redirect to view-detail.html with the institution name as a query parameter
    window.location.href = `view-detail.html?name=${encodeURIComponent(institutionName)}`;
}

// Fetch institutions on page load
fetchInstitutions();