-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Jan 2025 pada 06.35
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `member_data_entry`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `institutions`
--

CREATE TABLE `institutions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `institutions`
--

INSERT INTO `institutions` (`id`, `name`) VALUES
(1, 'BNN'),
(2, 'POLRESTA'),
(3, 'DINAS KESEHATAN\r\n');

-- --------------------------------------------------------

--
-- Struktur dari tabel `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `tempat_lahir` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `alamat` text NOT NULL,
  `ktp` varchar(255) NOT NULL,
  `institution_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `members`
--

INSERT INTO `members` (`id`, `name`, `tanggal_lahir`, `tempat_lahir`, `email`, `contact`, `alamat`, `ktp`, `institution_id`) VALUES
(1, 'mas sony', '2024-12-23', 'Banyuwangi', 'sony@gmail.com', '08129999999999', 'Jln. Bogor', 'uploads/23b6a9ea2cc15c3f1f53b41680697b8a', 1),
(14, 'mas sandi', '2024-12-23', 'Banyuwangi', 'sandi@gmail.com', '083213411111111111', 'Jln.dr', 'uploads/8684e42efec08242d86c608aafdc0496', 1),
(16, 'bu arum', '2024-12-30', 'Banyuwangi', 'arum@gmail.com', '08129999999999', 'Jln. Bwi Selatan', 'uploads/a08d488c4b05ac0fc49b88ccbac71f5c', 2),
(17, 'asep', '2024-12-30', 'Jogja', 'asep@gmail.com', '08129999999999', 'Jln. Borubudur', 'uploads/4bcd98af77c41243199fe79f6aa85e9e', 3),
(18, 'riyan', '2024-12-30', 'Pasuruan', 'riyan@gmail.com', '081299999999998', 'Jln. Galunggung', 'uploads/3d111445a45b3c83e0bb4a50c56d8ad5', 3);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `institutions`
--
ALTER TABLE `institutions`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`),
  ADD KEY `institution_id` (`institution_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `institutions`
--
ALTER TABLE `institutions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `members`
--
ALTER TABLE `members`
  ADD CONSTRAINT `members_ibfk_1` FOREIGN KEY (`institution_id`) REFERENCES `institutions` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
