// Get the current script's directory path dynamically
const scriptPath = document.currentScript.src;
const basePath = scriptPath.substring(0, scriptPath.lastIndexOf("/") + 1);

// Dynamically inject the <head> content with proper paths
function injectHeadContent() {
    // Create a <title> element
    const title = document.createElement("title");
    title.textContent = "DTBASE | Design and Technology Revision - Home page.";
    document.head.appendChild(title);

    // Add meta tags
    const metaCharset = document.createElement("meta");
    metaCharset.setAttribute("charset", "UTF-8");
    document.head.appendChild(metaCharset);

    const metaCompatibility = document.createElement("meta");
    metaCompatibility.setAttribute("http-equiv", "X-UA-Compatible");
    metaCompatibility.setAttribute("content", "IE=edge");
    document.head.appendChild(metaCompatibility);

    const metaViewport = document.createElement("meta");
    metaViewport.setAttribute("name", "viewport");
    metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");
    document.head.appendChild(metaViewport);

    const metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    metaDescription.setAttribute(
        "content",
        "Revise and learn GCSE/A-Level material for DT with DTBase. Find high quality notes, past paper questions, solutions, coursework examples and much more!"
    );
    document.head.appendChild(metaDescription);

    // Add favicon
    const favicon = document.createElement("link");
    favicon.setAttribute("rel", "shortcut icon");
    favicon.setAttribute("type", "image/x-icon");
    favicon.setAttribute("href", `${basePath}Favicon.png`);
    document.head.appendChild(favicon);

    // Add stylesheet
    const stylesheet = document.createElement("link");
    stylesheet.setAttribute("rel", "stylesheet");
    stylesheet.setAttribute("href", `${basePath}styles.css`);
    document.head.appendChild(stylesheet);

    // Add CookieYes script
    const cookieScript = document.createElement("script");
    cookieScript.id = "cookieyes";
    cookieScript.type = "text/javascript";
    cookieScript.src = "https://cdn-cookieyes.com/client_data/bf66d40c1470575f392ed5d8/script.js";
    document.head.appendChild(cookieScript);

    // Add Google Analytics
    const analyticsScript = document.createElement("script");
    analyticsScript.async = true;
    analyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=G-YZG2YDGNFN";
    document.head.appendChild(analyticsScript);

    const inlineAnalyticsScript = document.createElement("script");
    inlineAnalyticsScript.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YZG2YDGNFN');
        gtag('config', 'AW-11234376367');
    `;
    document.head.appendChild(inlineAnalyticsScript);

    // Add Google AdSense
    const adsenseScript = document.createElement("script");
    adsenseScript.async = true;
    adsenseScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5114036939976193";
    adsenseScript.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(adsenseScript);
}

// Hide body initially
function hideBody() {
    document.body.style.visibility = "hidden";
    document.body.style.opacity = "0";
}

// Reveal body after everything is loaded
function revealBody() {
    document.body.style.visibility = "visible";
    document.body.style.opacity = "1";
    document.body.style.transition = "opacity 0.5s ease"; // Optional: Smooth fade-in
}

// Main execution
hideBody();
injectHeadContent();
window.addEventListener("load", revealBody);
