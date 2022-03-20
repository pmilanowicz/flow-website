<?php

$handle = fopen('roster.csv', 'r');

$players = [];

while (($line = fgetcsv($handle)) !== false) {
    $name = trim($line[1]);
    $surname = trim($line[2]);
    $dob = (int) $line[4];
    $position = trim(strtolower($line[6]));
    $number = (int) $line[5];
    $years = (int) $line[9];

    if ($number < 1) {
        continue;
    }

    $players[] = [
        "name" =>  "$name $surname",
        "position" => $position,
        "number" =>  $number,
        "yearOfJoining" => $years,
        "yearOfBirth" => $dob,
        "imgSrc" => "$number.jpeg"
    ];
}

echo json_encode(['players' => $players]);
