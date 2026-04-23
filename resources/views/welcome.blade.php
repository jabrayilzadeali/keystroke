<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    <!-- Styles / Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="h-dvh flex gap-5">
    <div data-words class="h-full center text-5xl flex">
        <letter data-word="0" data-letter="0">h</letter>
        <letter data-word="0" data-letter="1">e</letter>
        <letter data-word="0" data-letter="2">l</letter>
        <letter data-word="0" data-letter="3">l</letter>
        <letter data-word="0" data-letter="4">o</letter>
    </div>
    <div data-words class="h-full center text-5xl flex">
        <letter data-word="1" data-letter="0">w</letter>
        <letter data-word="1" data-letter="1">o</letter>
        <letter data-word="1" data-letter="2">r</letter>
        <letter data-word="1" data-letter="3">l</letter>
        <letter data-word="1" data-letter="4">d</letter>
    </div>
</body>

</html>
