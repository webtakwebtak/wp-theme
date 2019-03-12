<?php
/**
 * Nothing more then a require_once document for all functions.
 */
require_once('functions/gform_mailcatcher.php');
require_once('functions/plugin/acf_add_options_page.php');
require_once('functions/setup/add-theme-support.php');
require_once('functions/setup/assets.php');
require_once('functions/view.php');

/**
 * AVG/GDPR related patches
 */
require_once('functions/gdpr/init.php');

/**
 * Security functionality
 */
require_once('functions/security/disable_xmlrpc.php');

/**
 * Optional helper files. Choose wisely. Or not.
 */
require_once('functions/helpers/str_phone.php');

/**
 * Setup
 */
require_once('functions/setup/clean_script_tag.php');
require_once('functions/setup/remove_default_description.php');

/**
 * Plugin hooks
 */
require_once('functions/plugin/acf_add_options_page.php');
require_once('functions/plugin/acf_filters.php');
