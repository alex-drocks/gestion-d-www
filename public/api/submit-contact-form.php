<?php

echo (function () {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        return "Error: REQUEST_METHOD";
    }

    // form person's name
    $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    if (!$name) {
        return "Error: name empty";
    }


    // form person's email address
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return "Error: email format failed";
    }
    if (!domainExists($email)) {
        return "Error: email domain does not exist";
    }


    // form person's phone number
    $phone = filter_input(INPUT_POST, "phone", FILTER_SANITIZE_FULL_SPECIAL_CHARS);


    // form person's subject
    $subject = filter_input(INPUT_POST, "subject", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    if (!$subject) {
        return "Error: subject empty";
    }
    $subject = cleanInput($_POST["subject"]);


    // form person's message
    $message = filter_input(INPUT_POST, "message", FILTER_SANITIZE_FULL_SPECIAL_CHARS);;
    if (!$message) {
        return "Error: messahe empty";
    }


    $htmlMsg = '<html lang="fr-CA">
            <body>
              <h1>Formulaire de contact gestiondesroches.com</h1>
              <h2>' . $name . '</h2>
              <p>' . $email . '</p>
              <p>' . $phone . '</p>
              <p>' . $subject . '</p>
              <h3>' . $message . '</h3>
            </body>
            </html>';

    // To send HTML messages, the Content-type header must be set:
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=utf-8\r\n";

    // define sender address for the default php sendmail method otherwise it's financed@rockland.dns...
    $fdSendingAdress = '-f ne-pas-repondre@finance-d.com';

    // send validation code to email address
    if (mail(
        "alexandre_d_7@hotmail.com",
        "GestionDesroches.com - Formulaire de contact",
        $htmlMsg, $headers, $fdSendingAdress)
    ) {
        return "EMAIL_SENT";
    }
    return "ERROR";

})();


function domainExists($emailAddress) {
    $array = explode("@", $emailAddress);
    $domain = idn_to_ascii(array_pop($array));
    return checkdnsrr($domain . ".", "MX");
}