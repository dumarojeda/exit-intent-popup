<?php

/**
 * Plugin Name:   Exit Intent Popup
 * Plugin URI:    https://github.com/dumarojeda/exit-intent-popup
 * Description:   This is a plugin will emulate an ‘exit intent’ popup on all pages of the website. This is a popup that will appear when the user is about to leave the webpage.
 * Author:        Dumar Ojeda
 * Author URI:    https://gitlab.com/dumarojeda/
 * Version:       1.0.0
 * Text Domain:   exit_intent_popup
 */


/* Exit if accessed directly. */

if (!defined('ABSPATH')) {
    exit;
}

/* Plugin constants. */

define('PLUGIN_PATH', plugin_dir_path(__FILE__));
define('PLUGIN_URL', plugin_dir_url(__FILE__));
define('PLUGIN_VERSION', '1.0.0');

/* Load Controllers. */
require PLUGIN_PATH . 'includes/controllers/setup.php';
require PLUGIN_PATH . 'includes/controllers/popup.php';

/* Initialize Controllers. */
new ExitIntentPopup\Controllers\SetupController;
new ExitIntentPopup\Controllers\PopupController;
