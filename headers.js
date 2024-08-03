function fetchHeaders() {
    // Make a request to a URL
    fetch('https://perse-22.github.io/test/') // Example URL; replace with your own endpoint if needed
        .then(response => {
            // Get all headers from the response
            const headers = response.headers;
            let headersText = '';

            // Iterate over all headers
            headers.forEach((value, key) => {
                headersText += `${key}: ${value}\n`;
            });

            // Display headers in <pre> element
            document.getElementById('headersResult').textContent = headersText;
        })
        .catch(error => {
            console.error('Error fetching headers:', error);
            document.getElementById('headersResult').textContent = 'Failed to fetch headers.';
        });
}
