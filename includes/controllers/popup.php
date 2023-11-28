<?php

namespace ExitIntentPopup\Controllers;

/**
 * Pop up Controller.
 * 
 */
class PopupController
{
    public function __construct()
    {
        add_action('wp_footer', [$this, 'show_popup']);
    }

    public function show_popup()
    {
        ob_start();
        require PLUGIN_PATH . 'includes/views/popup.php';
        $html = ob_get_clean();

        echo $html;
    }
}
