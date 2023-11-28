<?php

namespace ExitIntentPopup\Controllers;

/**
 * Setup Controller.
 * 
 */
class SetupController
{
    public function __construct()
    {
        add_action('wp_enqueue_scripts', [$this, 'public_enqueue_assets']);
    }

    /**
     * Register public assets.
     */
    public function public_enqueue_assets()
    {
        wp_enqueue_style(
            'app-css',
            PLUGIN_URL . 'assets/css/index.css',
            [],
            PLUGIN_VERSION
        );

        wp_enqueue_script(
            'app-js',
            PLUGIN_URL . 'assets/js/index.js',
            ['jquery'],
            PLUGIN_VERSION,
            true
        );

        wp_localize_script('app-js', 'app', ['api_url' => admin_url('admin-ajax.php')]);
    }
}
