document.addEventListener("DOMContentLoaded", function () {
    console.log("Footer script running..."); // Debugging log

    // Set absolute paths (works for local and hosted environments)
    let basePath = "/";  

    let footerHTML = `
        <style>
            .footer a {
                color: rgb(185, 22, 22);
                font-weight: bold;
                text-decoration: none;
            }
            .footer a:hover {
                text-decoration: underline;
            }
        </style>
        <div class="footer">
            <div class="footer-content">
               <p><strong> Email: <a href="mailto:designtechbase@gmail.com">designtechbase@gmail.com</a> | DTBase</strong></p>
            </div>
            <div class="footer-bottom">
                <nav>
                    | <a href="${basePath}index.html">Home</a> |
                    <a href="${basePath}about.html">About</a> |
                    <a href="${basePath}contact.html">Contact</a> |
                    <a href="${basePath}terms.html">Terms & Conditions</a> |
                    <a href="${basePath}legal_notice.html">Legal Notice & Privacy Policy</a> |
                </nav>
                <br><br>
                | &copy; DTBase.com | Designed by Henry Chen and Will Stevens |
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
