<?php

$file = 'maillist.txt';
$name = trim($_POST['name2']); 
$email = trim($_POST['email2']); 

file_put_contents($file, 'Name: ', FILE_APPEND | LOCK_EX);
file_put_contents($file, $name, FILE_APPEND | LOCK_EX);
file_put_contents($file, ', ', FILE_APPEND | LOCK_EX);
file_put_contents($file, 'Email: ', FILE_APPEND | LOCK_EX);
file_put_contents($file, '.', FILE_APPEND | LOCK_EX);
file_put_contents($file, $email, FILE_APPEND | LOCK_EX);
file_put_contents($file, '   ', FILE_APPEND | LOCK_EX);

?>



<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta charset="UTF-8">
        <meta name="format-detection" content="telephone=no">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>You have been subscribed</title>
        <link rel='stylesheet' href='css/bootstrap.css' type='text/css' media='all'>
        <link rel="stylesheet" href="css/styles.css">
        <link rel='stylesheet' href='css/mediaQueries.css' type='text/css' media='all'>
        <link rel='stylesheet' href='fonts/stylesheet.css' type='text/css' media='all'>        
        <link rel="stylesheet" href="css/animate.css">
    </head>
    <body>
        
        <div class="row">
            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3" class="thanks">
                <h1 class="wow fadeInUp">
                    You have been succesfully subscribed to the newsletter
                </h1>
                <p class="wow fadeInUp">
                    Thank your for your subscription.
                </p>
                <p class="wow fadeInUp">
                    To ensure that the newsletter also reaches you and does not end up in the spam filter, please enter the sender address ... in your e-mail program’s address book.
                </p>
                <a href="index.html" class="wow fadeInUp">Return</a>
            </div>
        </div>
        <script src="js/wow.min.js"></script>
        <script>
            new WOW().init();
        </script>
                
    </body>
</html>

<!-- здесь будет скрипт -->
