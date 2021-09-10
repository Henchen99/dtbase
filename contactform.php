<?php

if (isset($_POST['submit'])){

    if(filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL)){

        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $mailFrom = $_POST['mail'];
        $message = $_POST['message'];
    
    
        $mailTo = "designtechbase@gmail.com";
        $headers = "From: ".$mailFrom;
        $txt = "you have received an email from ".$name.".\n\n".$message;
    
    
        mail($mailTo,$subject,$txt,$headers);
        header("Location: index.php?mailsend");
   
    }


}