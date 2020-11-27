<?php

if (
    !isset($_POST["name"]) ||
    !isset($_POST["email"]) ||
    !isset($_POST["message"])) {
    echo "ERROR";
    return;
}

echo (function () {
    //get data from the URL query string and validate it
    $name = $_POST["name"];
    if (!$name || strlen($name > 70) || strLen($name < 1)) {
        return "ERROR";
    }

    $email = $_POST["email"];
    if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL) || !domainExists($email)) {
        return "ERROR";
    }

    $phone = $_POST["phone"];
    if (!$phone || strlen($phone > 17) || strLen($phone < 7)) {
        return "ERROR";
    }

    $userMessage = $_POST["message"];
    if (!$userMessage || strlen($userMessage > 500) || strLen($userMessage < 1)) {
        return "ERROR";
    }

    //url query is valid at this point build the email message
    $subject = "Formulaire de contact site internet";
    $message = '<html>
            <body>
              <h1>' . $name . '</h1>
              <h3>' . $email . '</h3>
              <h3>' . $phone . '</h3>
              <p>' . $userMessage . '</p>
            </body>
            </html>';

    // To send HTML messages, the Content-type header must be set:
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=utf-8\r\n";

    // define sender address for the default php sendmail method otherwise it's financed@rockland.dns...
    $fdSendingAdress = '-f ne-pas-repondre@finance-d.com';

    // send validation code to email address
    if (mail("alexandre_d_7@hotmail.com", $subject, $message, $headers, $fdSendingAdress)) {
        return "EMAIL_SENT";
    } else {
        return "ERROR";
    }
})();

function domainExists($emailAddress) {
    $array = explode("@", $emailAddress);
    $domain = idn_to_ascii(array_pop($array));
    return checkdnsrr($domain . ".", "MX");
}