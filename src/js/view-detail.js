document.addEventListener('DOMContentLoaded', function() {
 const urlParams = new URLSearchParams(window.location.search);
 const institutionName = urlParams.get('name');
 
 if (institutionName) {
     fetchMembersByInstitutionName(institutionName);
 } else {
     console.error('No institution name provided in query parameters.');
 }
});

function fetchMembersByInstitutionName(institutionName) {
 fetch(`/api/members?institution_name=${encodeURIComponent(institutionName)}`)
     .then(response => {
         if (!response.ok) {
             throw new Error('Network response was not ok ' + response.statusText);
         }
         return response.json();
     })
     .then(data => {
         const entriesTbody = document.getElementById('guestbook-entries');
         if (!entriesTbody) {
             throw new Error('Element with ID "guestbook-entries" not found');
         }
         entriesTbody.innerHTML = '';
         data.forEach(member => {
             const row = document.createElement('tr');
             const date = new Date(member.tanggal_lahir);
             const formattedtanggal_lahir = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
             row.innerHTML = `
                 <td>${member.name}</td>
                 <td>${formattedtanggal_lahir}</td>
                 <td>${member.tempat_lahir}</td>
                 <td>${member.email}</td>
                 <td>${member.contact}</td>
                 <td>${member.alamat}</td>
                 <td>${member.institution}</td>
                 <td><img src="${member.ktp.replace(/\\/g, '/')}" alt="KTP" width="50"></td>
             `;
             entriesTbody.appendChild(row);
         });
     })
     .catch(error => {
         console.error('Error fetching members:', error);
         alert('Error fetching members: ' + error.message);
     });
}