<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "events_board";

$conn = mysqli_connect($host, $user, $password, $database);

if (!$conn) {
    die("Помилка підключення: " . mysqli_connect_error());
}

?>