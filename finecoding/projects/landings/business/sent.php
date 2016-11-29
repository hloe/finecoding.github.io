<?php
if( isset($_POST['name'],$_POST['email'],$_POST['phone']) ) {
 $name = trim($_POST['name']); 
 $email = trim($_POST['email']); 
 $phone = trim($_POST['phone']); 
  if(empty($name) || empty($email) || empty($phone)) { 
   echo 'You did not fill in all the required fields!';
  }
  else { 
   $mailto = 'goroshanska@gmail.com';
   $subject = 'Message from the website';
//формируем текст сообщения
   $message  = 'Message from the user <b>'.$name.'</b><br />';
   $message .= 'User email: <a href="mailto:' . $email . '">' . $email . '</a><br />';
   $message .= 'Phone:<br />' . $phone;
//отправляем письмо
   $mail = mail($mailto, $subject, $message);
  }
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta charset="UTF-8">
        <meta name="format-detection" content="telephone=no">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Message is sent</title>
        <link rel='stylesheet' href='css/bootstrap.css' type='text/css' media='all'>
        <link rel="stylesheet" href="css/styles.css">
        <link rel='stylesheet' href='css/mediaQueries.css' type='text/css' media='all'>
        <link rel='stylesheet' href='fonts/stylesheet.css' type='text/css' media='all'>        
        <link rel="stylesheet" href="css/animate.css">
    </head>
    <body>
        
        <div class="row">
            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3" id="thanks">
                <h1 class="wow fadeInUp">Thank you for your message</h1>
                <p class="wow fadeInUp">
                    We will answer you as soon as possible
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

<!-- скрипт переделать на сервере -->
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
//отправляем письмо
   $mail = mail($mailto, $subject, $message);
//проверяем отправку
    if(TRUE === $mail) echo '<h2>Success</h2>';
    else echo '<h2>You did not fill in all the required fields</h2>';
//проверку можно записать короче при помощи тернарного оператора, вот так:
//  echo (TRUE === $mail) ? 'Ваше сообщение успешно отправлено!' : 'Произошла ошибка при отправке сообщения.' ;
//тогда нужно будет раскомментировать строчку выше и закомментировать строчки выше с проверкой
  }
}
?>