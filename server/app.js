const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { saveMemberData, getMemberData, getInstitutionCounts, getInstitutions, deleteAllMembers } = require('./database');

const app = express();
const PORT = process.env.PORT || 4000;

const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));
app.use('/uploads', express.static('uploads'));

app.post('/api/member', upload.single('ktp'), (req, res) => {
    console.log('Received request:', JSON.stringify(req.body), req.file);

    const memberData = {
        ...req.body,
        ktp: req.file ? req.file.path.replace(/\\/g, '/') : null, // Pastikan path menggunakan garis miring jika file diunggah
        institution_id: req.body.institution_id // Pastikan institution_id diambil dari body request
    };

    saveMemberData(memberData)
        .then(() => res.status(201).send('Member data saved successfully.'))
        .catch((error) => {
            console.error('Error saving member data:', error);
            res.status(500).send('Error saving member data: ' + error.message);
        });
});

app.get('/api/members', (req, res) => {
    getMemberData()
        .then((data) => res.status(200).json(data))
        .catch((error) => {
            console.error('Error fetching member data:', error);
            res.status(500).send('Error fetching member data: ' + error.message);
        });
});

app.get('/api/institutions', (req, res) => {
    getInstitutions()
        .then((data) => res.status(200).json(data))
        .catch((error) => {
            console.error('Error fetching institutions:', error);
            res.status(500).send('Error fetching institutions: ' + error.message);
        });
});

app.get('/api/members?institution_id', (req, res) => {
    getInstitutions()
        .then((data) => res.status(200).json(data))
        .catch((error) => {
            console.error('Error fetching institutions:', error);
            res.status(500).send('Error fetching institutions: ' + error.message);
        });
});

app.get('/api/institution-counts', (req, res) => {
    getInstitutionCounts()
        .then((data) => res.status(200).json(data))
        .catch((error) => {
            console.error('Error fetching institution counts:', error);
            res.status(500).send('Error fetching institution counts: ' + error.message);
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});