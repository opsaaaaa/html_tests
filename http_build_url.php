
<?php


$data = array(
    'include' => array(
        'signatures',
        'invoiceItems'
    )
);

echo http_build_query($data, 'flags_');