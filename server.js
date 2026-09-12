//Creating Simple HTTP server


const http = require("http");

const PORT = 5000;

const navigation = `
    <nav>
        <a href="/">Home</a> |
        <a href="/blog">Blog</a> |
        <a href="/contact">Contact</a> |
        <a href="/about">About</a>
    </nav>
`;

const server = http.createServer((req, res) => {

    let content;
    let statusCode = 200;

    //========================================================
    // Home Page section
    
    if (req.url === "/") {
        content = `
            <h1>Home Page</h1>
            <p>Welcome to our simple Node.js HTTP server.</p>
            ${navigation}
        `;
    }


     //============================================================ 
    // Blog section
    
else if (req.url === "/blog") {
        content = `
            <h1>Blog Page</h1>
            <p>Welcome to our blog. Here you can read interesting articles.</p>
            ${navigation}
        `;
    }

    //=================================================
    // Contact Section
    
else if (req.url === "/contact") {
        content = `
            <h1>Contact Page</h1>
            <p>You can contact us for more information.</p>
            ${navigation}
        `;
    }

//========================================================
    //About section

    else if (req.url === "/about") {
        content = `
            <h1>About Page</h1>
            <p>This page contains information about our website and project.</p>
            ${navigation}
        `;
    }

    //===============================================
    //404 page not found
    else {
        statusCode = 404;

        content = `
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            ${navigation}
        `;
    }

    // Send headers only ONCE
    res.writeHead(statusCode, {
        "Content-Type": "text/html"
    });
    

    
