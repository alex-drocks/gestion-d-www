<?php

echo (function () {
    if ($_SERVER["REQUEST_METHOD"] !== "POST") {
        return "Error: REQUEST_METHOD";
    }


    // form person's name
    $client_name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $client_name = urldecode($client_name);
    if (!$client_name) {
        return "Error: name empty";
    }


    // form person's email address
    $client_email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
    $client_email = urldecode($client_email);
    if (!$client_email) {
        return "Error: email empty after sanitizing";
    }
    if (!filter_var($client_email, FILTER_VALIDATE_EMAIL)) {
        return "Error: email format failed";
    }
    if (!domainExists($client_email)) {
        return "Error: email domain " . $client_email . " does not exist.";
    }


    // form person's phone number
    $client_phone = filter_input(INPUT_POST, "phone", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $client_phone = urldecode($client_phone);


    // form person's subject
    $client_subject = filter_input(INPUT_POST, "subject", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $client_subject = urldecode($client_subject);
    if (!$client_subject) {
        return "Error: subject empty";
    }


    // form person's message
    $client_message = filter_input(INPUT_POST, "message", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $client_message = urldecode($client_message);
    if (!$client_message) {
        return "Error: message empty";
    }


    $htmlMsg = '<html lang="fr-CA">
            <body>
              <h1>Formulaire de contact gestiondesroches.com</h1>
              <p>Vous avez reçu un message via le formulaire de contact https://gestiondesroches.com/contact/</p>
              <br>
              <h3>Nom: ' . $client_name . '</h3>
              <p>Courriel: ' . $client_email . '</p>
              <p>Téléphone: ' . $client_phone . '</p>
              <p>Sujet: ' . $client_subject . '</p>
              <h3>Message: ' . $client_message . '</h3>
              <br>
              <br>
              <pre>Note : Il est possible de répondre directement dans ce message.</pre>
            </body>
            </html>';


    //Get send to address from env variable
    $send_to_email_address = getenv("CONTACT_FORM_SEND_TO_EMAIL");
    //Get CC address from env variable
    $cc_email_address = getenv("CONTACT_FORM_CC_EMAIL");


    //Assign proper Headers for this email
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=utf-8\r\n";
    $headers .= "From: formulaire@gestiondesroches.com" . "\r\n";
    $headers .= "Reply-To: " . $client_email . "\r\n";
    $headers .= "CC: " . $cc_email_address . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";


    //Send the email and return response
    if (mail($send_to_email_address, "GestionDesroches.com — Formulaire de contact", $htmlMsg, $headers)) {
        return "EMAIL_SENT_SUCCESSFULLY";
    } else {
        return "ERROR";
    }

})();


function domainExists($emailAddress) {
    $array = explode("@", $emailAddress);
    $domain = idn_to_ascii(array_pop($array));
    return checkdnsrr($domain . ".", "MX");
}