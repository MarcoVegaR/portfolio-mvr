<?php

test('renders the portfolio foundation', function () {
    $response = $this->get(route('home'));

    $response->assertOk();
    $response->assertInertia(
        fn ($page) => $page->component('portfolio/index'),
    );
});
