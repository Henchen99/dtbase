// Get the current script's directory path dynamically
const scriptPath = document.currentScript.src;
const basePath = scriptPath.substring(0, scriptPath.lastIndexOf("/") + 1);

// Dynamically inject the <head> content with proper paths
document.head.innerHTML = `
    <title>DTBASE | Design and Technology Revision - Home page.</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Revise and learn GCSE/A-Level material for DT with DTBase. 
    Find high quality notes, past paper questions, solutions, coursework examples and much more!">
    <link rel="shortcut icon" type="image/x-icon" href="${basePath}Favicon.png">
    <link rel="stylesheet" href="${basePath}styles.css">
    <!-- Start CookieYes Banner -->
    <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/bf66d40c1470575f392ed5d8/script.js"></script>
    <!-- End CookieYes Banner -->
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-YZG2YDGNFN"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YZG2YDGNFN');
        gtag('config', 'AW-11234376367');
    </script>
    <!-- Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5114036939976193" crossorigin="anonymous"></script>
`;

// Hide body initially
document.body.style.visibility = "hidden";
document.body.style.opacity = "0";

// Reveal body after the head is fully injected
window.addEventListener("load", () => {
    document.body.style.visibility = "visible";
    document.body.style.opacity = "1";
    document.body.style.transition = "opacity 0.5s ease"; // Optional: Smooth fade-in
});
