// Get the current script's directory path dynamically
const scriptPath = document.currentScript.src;
const basePath = scriptPath.substring(0, scriptPath.lastIndexOf("/") + 1);

// Determine the relative path prefix based on the location of the HTML file
const pathDepth = window.location.pathname.split("/").length - 2; // -2 because last item is the HTML filename
const relativePrefix = pathDepth === 0 ? "./" : "../".repeat(pathDepth);

// Inject the <head> content dynamically
function injectHeadContent() {
    // Create a <title> element
    const title = document.createElement("title");
    title.textContent = "DTBASE | Design and Technology Revision - Home page.";
    document.head.appendChild(title);

    // Add meta tags
    const metaTags = [
        { name: "charset", content: "UTF-8" },
        { name: "http-equiv", content: "X-UA-Compatible", value: "IE=edge" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
            name: "description",
            content:
                "Revise and learn GCSE/A-Level material for DT with DTBase. Find high quality notes, past paper questions, solutions, coursework examples and much more!",
        },
    ];
    
    metaTags.forEach((tag) => {
        const metaElement = document.createElement("meta");
        if (tag.name === "http-equiv") {
            metaElement.setAttribute("http-equiv", tag.content);
            metaElement.setAttribute("content", tag.value);
        } else {
            metaElement.setAttribute("name", tag.name);
            metaElement.setAttribute("content", tag.content);
        }
        document.head.appendChild(metaElement);
    });

    // Add favicon
    const favicon = document.createElement("link");
    favicon.setAttribute("rel", "shortcut icon");
    favicon.setAttribute("type", "image/x-icon");
    favicon.setAttribute("href", `${relativePrefix}images/Favicon.png`);
    document.head.appendChild(favicon);

    // Add stylesheet
    const stylesheet = document.createElement("link");
    stylesheet.setAttribute("rel", "stylesheet");
    stylesheet.setAttribute("href", `${relativePrefix}styles.css`);
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
            'analytics_storage': 'denied',
            'wait_for_update': 2000
        });

        // Enable privacy-friendly features
        gtag('set', 'ads_data_redaction', true);
        gtag('set', 'url_passthrough', true);

        // Initialize Google Analytics (track anonymized page views)
        gtag('js', new Date());
        gtag('config', 'G-YZG2YDGNFN', {
            'anonymize_ip': true,
            'allow_google_signals': false,
            'allow_ad_personalization_signals': false
        });
    `;
    document.head.appendChild(inlineAnalyticsScript);

    // Add Google AdSense script
    const adsenseScript = document.createElement("script");
    adsenseScript.async = true;
    adsenseScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5114036939976193";
    adsenseScript.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(adsenseScript);
}

// Inject the <header> content dynamically
function injectHeader() {
    const headerHTML = `
        <header>
            <div class="Logo">
                <img class="logo" src="${relativePrefix}images/Logo.png" alt="DesignandTechBase Logo">
            </div>
            <div class="toggle"></div>
            <div class="navigation">
                <a href="#" class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                <div class="nav-link-wrapper"><a href="${relativePrefix}index.html">Home</a></div>
                <div class="nav-link-wrapper"><a href="${relativePrefix}tutoring.html">Tutoring</a></div>
                <div class="nav-link-wrapper"><a href="${relativePrefix}notes/notes_level.html">Notes</a></div>
                <div class="nav-link-wrapper"><a href="${relativePrefix}exercises/exercises.html">Questions</a></div>
                <div class="nav-link-wrapper"><a href="${relativePrefix}pastpapers/pastpapers.html">Past Papers</a></div>
                <div class="nav-link-wrapper"><a href="${relativePrefix}coursework/coursework.html">Coursework</a></div>
                <div class="nav-link-wrapper"><a href="${relativePrefix}contact.html">Contact</a></div>
                <div class="nav-link-wrapper"><a href="${relativePrefix}about.html">About Us</a></div>
            </div>
        </header>
    `;
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
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
    document.body.style.transition = "opacity 0.5s ease";
}

// Listen for CookieYes consent updates
function handleConsentUpdates() {
    document.addEventListener('cookieyes-consent-update', function () {
        const consentedCategories = CookieYes.consent;
        if (consentedCategories.includes('analytics')) {
            gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted',
                'personalization_storage': 'granted'
            });
        } else {
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
injectHeader();
handleConsentUpdates();
window.addEventListener("load", revealBody);

