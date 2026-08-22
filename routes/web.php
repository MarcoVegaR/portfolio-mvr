<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

Route::get('/', function (): Response {
    return Inertia::render('portfolio/index', [
        'resumeHref' => is_file(public_path('cv/curriculum.pdf'))
            ? '/cv/curriculum.pdf'
            : null,
    ]);
})->name('home');
