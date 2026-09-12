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
