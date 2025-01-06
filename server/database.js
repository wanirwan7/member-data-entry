const mysql = require('mysql2/promise');

// Buat pool koneksi
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // Pastikan ini adalah password yang benar
    database: 'member_data_entry'
});

// Fungsi untuk mengambil data instansi
const getInstitutions = async () => {
    let connection;
    try {
        connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT id, name FROM institutions');
        return rows;
    } catch (error) {
        console.error('Error fetching institutions:', error);
        throw error;
    } finally {
        if (connection) connection.release();
    }
};

// Fungsi untuk menyimpan data anggota
const saveMemberData = async (memberData) => {
    let connection;
    try {
        connection = await pool.getConnection();
        const query = `
            INSERT INTO members (name, tanggal_lahir, tempat_lahir, email, contact, alamat, ktp, institution_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            memberData.name,
            memberData.tanggal_lahir,
            memberData.tempat_lahir,
            memberData.email,
            memberData.contact,
            memberData.alamat,
            memberData.ktp,
            memberData.institution_id,
        ];
        await connection.query(query, values);
    } catch (error) {
        console.error('Error saving member data:', error);
        throw error;
    } finally {
        if (connection) connection.release();
    }
};

// Fungsi untuk mengambil data anggota
const getMemberData = async () => {
    let connection;
    try {
        connection = await pool.getConnection();
        const [rows] = await connection.query(`
            SELECT members.*, institutions.name as institution
            FROM members
            LEFT JOIN institutions ON members.institution_id = institutions.id
        `);
        return rows;
    } catch (error) {
        console.error('Error fetching member data:', error);
        throw error;
    } finally {
        if (connection) connection.release();
    }
};

// Fungsi untuk mengambil data instansi beserta jumlah anggotanya
const getInstitutionCounts = async () => {
    let connection;
    try {
        connection = await pool.getConnection();
        const [rows] = await connection.query(`
            SELECT institutions.name AS institution, COUNT(members.id) AS count
            FROM institutions
            LEFT JOIN members ON members.institution_id = institutions.id
            GROUP BY institutions.id
        `);
        return rows;
    } catch (error) {
        console.error('Error fetching institution counts:', error);
        throw error;
    } finally {
        if (connection) connection.release();
    }
};

// Fungsi untuk menghapus semua data anggota
const deleteAllMembers = async () => {
    let connection;
    try {
        connection = await pool.getConnection();
        await connection.query('DELETE FROM members');
    } catch (error) {
        console.error('Error deleting member data:', error);
        throw error;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = { saveMemberData, getMemberData, getInstitutionCounts, getInstitutions, deleteAllMembers };