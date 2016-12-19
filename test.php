<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="format-detection" content="telephone=no">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Message is sent</title>
        <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link rel='stylesheet' href='css/bootstrap.min.css' type='text/css' media='all'>
        <link rel="stylesheet" href="css/styles.css">
        <link rel="stylesheet" href="css/MediaQueries.css">  
        <link rel="stylesheet" href="css/animate.css">

        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Quicksand|Rokkitt" rel="stylesheet">
        
        
        <!-- Google Analytics -->
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            
            ga('create', 'UA-83364655-1', 'auto');
            ga('send', 'pageview');
        </script>
    </head>
    <body>
        <div class="row wow fadeInUp">
            <div class=" col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
                <h2>Thank you for your message</h2>
                <p>
                    I will answer you as soon as possible
                </p>
            </div>
        </div>
        <div class="row wow fadeInUp">
            <div class="button3">
                <a href="http://www.finecoding.net/" class="button">Return</a>
            </div>
        </div>
        
        <!-- Animation -->
        <script src="js/wow.min.js"></script>
        <script>
            new WOW().init();
        </script>
        
    </body>
</html>

<?php
/**
*isset() - проверяет на наличие переменной/значения (равно NULL или нет)
*empty() - проверяет переменную на пустоту. Обращаю внимание, 0 - для нее тоже пустота!
**/
if( isset($_POST['name'],$_POST['email'],$_POST['text']) ) {
 $name = trim($_POST['name']); #убираем пробелы по краям, если они есть
 $email = trim($_POST['email']); #убираем пробелы по краям, если они есть
 $text = trim($_POST['text']); #убираем пробелы по краям, если они есть
  if(empty($name) || empty($email) || empty($text)) { //если что то не ввели
   echo 'You did not fill in all the required fields!';
  }
  else { //все поля заполнены, отправляем
   $mailto = 'goroshanska@gmail.com';
   $subject = 'Message from the website';
//формируем текст сообщения
   $message  = 'Message from the user <b>'.$name.'</b><br />';
   $message .= 'User email: <a href="mailto:' . $email . '">' . $email . '</a><br />';
   $message .= 'Text:<br />' . $text;
//формируем заголовки (кодировку только, остальное сами добавите по желанию)
   $headers = 'Content-type: text/html; charset=windows-1251';
//отправляем письмо
   $mail = mail($mailto, $subject, $message, $headers);
//проверяем отправку
    if(TRUE === $mail) echo '<h2>Success</h2>';
    else echo '<h2>You did not fill in all the required fields</h2>';
//проверку можно записать короче при помощи тернарного оператора, вот так:
//  echo (TRUE === $mail) ? 'Ваше сообщение успешно отправлено!' : 'Произошла ошибка при отправке сообщения.' ;
//тогда нужно будет раскомментировать строчку выше и закомментировать строчки выше с проверкой
  }
}
?>