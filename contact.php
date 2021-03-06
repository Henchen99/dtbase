<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css"/>
    <title>DTBASE</title>
</head>
<body>
    <div class="containter">  
        <header>
            <div class="Logo">
                <img class="logo" src="images/Logo.png">
            </div>
            <div class="toggle"></div>
            <div class="navigation">
                <div class="nav-link-wrapper">
                    <a href="homepg.html">Home</a>
                </div>

                <div class="nav-link-wrapper">
                    <a href="notes.html">Notes</a>
                </div>

                <div class="nav-link-wrapper">
                    <a href="exercises.html">Exercises</a>
                </div>

                <div class="nav-link-wrapper">
                    <a href="coursework.html">Coursework</a>
                </div>

                <div class="nav-link-wrapper">
                    <a href="contact.html">Contact</a>
                </div>
            </div>
        </header>

        <?php
        if($message_sent):
        ?>
        <h3>Thanks! We will be in touch!</h3>
        <?php
        else:
        ?>
        
        <div class="contact-section">
            <h3>
                We'd love to hear from ya mom!
            </h3>
            <h3>
                Please feel free to ask questions, correct our mistakes or make any suggestions
            </h3>
            <form class="contact-form" action="contactform.php" method="post" action="contactform.php">
                <input name="name" type="text" placeholder="Full name" class="contact-form-text">
                <input name="mail" type="text" placeholder="Email" class="contact-form-text">
                <textarea name="message" type="text" placeholder="Message" class="contact-form-text"></textarea>
                <button name="submit" type="submit" class="contact-form-btn">SUBMIT</button>
            </form>
        </div>

        <?php
        endif;
        ?>

        <div class="footer">
            <div class="footer-content">
               <p><strong> Email: designtechbase@gmail.com | DTBase</strong></p>
            </div>
            <div class="footer-bottom">
                &copy; DTBase.com | Designed by Henry Chen
            </div>
        </div>

        <script src="js/script.js"></script>
    </div>
</body>
</html>