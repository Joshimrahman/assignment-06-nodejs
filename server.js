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
