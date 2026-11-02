+---------+
| Browser |
+---------+
     |
     | 1. User enters https://sreelekha.in
     v
+-----+
| DNS |
+-----+
     |
     | 2. DNS resolves the domain name
     |    into an IP address
     v
+------------+
| IP Address |
+------------+
     |
     | 3. Browser connects to the hosting
     |    server using the resolved address
     v
+------------+
| Web Server |
+------------+
     |
     | 4. Server processes the request and
     |    sends an HTTP/HTTPS response
     v
+----------------------+
| HTTP/HTTPS Response  |
+----------------------+
     |
     | 5. Browser receives and renders
     |    the website content
     v
+----------------+
| Browser Display|
+----------------+

Step-by-Step Explanation
1. Browser: The user enters the website URL, such as https://sreelekha.in, in a web browser.
2. DNS: The browser needs the IP address associated with the domain name. DNS (Domain Name System) helps find that address.
3. IP Address: DNS returns the appropriate IP address for the requested domain.
4. Web Server: The browser connects to the hosting server (Vercel in this project) and requests the website.
5. HTTP/HTTPS Response: The server sends a response. When HTTPS is used, communication is encrypted using TLS.
6. Browser Display: The browser receives the response, processes the website files, and displays the portfolio website.