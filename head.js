// Get the current script's directory path dynamically
const scriptPath = document.currentScript.src;
const basePath = scriptPath.substring(0, scriptPath.lastIndexOf("/") + 1);

// Inject the head content dynamically
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

    // Add Google Analytics script
    const analyticsScript = document.createElement("script");
    analyticsScript.async = true;
    analyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=G-YZG2YDGNFN";
    document.head.appendChild(analyticsScript);

    // Add inline script for Google Consent Mode and Analytics
    const inlineAnalyticsScript = document.createElement("script");
    inlineAnalyticsScript.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }

        // Set default consent state for Google Consent Mode
        gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted',
            'wait_for_update': 2000
        });

        // Enable additional privacy features
        gtag('set', 'ads_data_redaction', true);
        gtag('set', 'url_passthrough', true);

        // Initialize Google Analytics
        gtag('js', new Date());
        gtag('config', 'G-YZG2YDGNFN');
    `;
    document.head.appendChild(inlineAnalyticsScript);

    // Add Google AdSense script
    const adsenseScript = document.createElement("script");
    adsenseScript.async = true;
    adsenseScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5114036939976193";
    adsenseScript.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(adsenseScript);
}

// Hide the body initially for a smooth fade-in effect
function hideBody() {
    document.body.style.visibility = "hidden";
    document.body.style.opacity = "0";
}

// Reveal the body after all resources have loaded
function revealBody() {
    document.body.style.visibility = "visible";
    document.body.style.opacity = "1";
    document.body.style.transition = "opacity 0.5s ease"; // Smooth fade-in
}

// Listen for CookieYes consent updates
function handleConsentUpdates() {
    document.addEventListener('cookieyes-consent-update', function () {
        const consentedCategories = CookieYes.consent; // Get consented categories
        if (consentedCategories.includes('analytics')) {
            // Update Google Consent Mode for granted analytics
            gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted',
                'personalization_storage': 'granted'
            });
        } else {
            // Revoke analytics consent
            gtag('consent', 'update', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'personalization_storage': 'denied'
            });
        }
    });
}

// Main execution
hideBody();
injectHeadContent();
handleConsentUpdates();
window.addEventListener("load", revealBody);
