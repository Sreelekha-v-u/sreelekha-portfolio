1. Domain Name
A domain name is a human-readable address used to access a website on the internet. It is easier to remember than an IP address.

Example: sreelekha.in

2. DNS (Domain Name System)
DNS stands for Domain Name System. It translates domain names into IP addresses so that browsers can locate the correct servers.

Example: DNS helps resolve sreelekha.in to its associated IP address.

3. A Record
An A Record is a DNS record that maps a domain name to an IPv4 address.

Example:
Type: A
Host: @
Value: 216.198.79.1
The value above is an example of the A record configured for this project; it should match the current value shown in the Vercel and GoDaddy dashboards.

4. CNAME Record
A CNAME (Canonical Name) Record maps one domain name or subdomain to another domain name.

Example:
Type: CNAME
Host: www
Value: [Vercel-provided CNAME target]
It is commonly used to point a www subdomain to a hosting provider's domain.

5. HTTP (Hypertext Transfer Protocol)
HTTP is a communication protocol used to transfer data between a web browser and a web server. Standard HTTP traffic is not encrypted.

Default Port: 80


6. HTTPS (Hypertext Transfer Protocol Secure)
HTTPS is the secure version of HTTP. It uses TLS encryption to protect data exchanged between a browser and a web server.

Default Port: 443


7. SSL/TLS
SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols used to secure communication over a network. Modern HTTPS connections use TLS.

TLS helps provide encryption, data integrity, and server authentication.


8. DNS Resolution
DNS resolution is the process of finding the IP address associated with a domain name. A DNS resolver looks up the required DNS records and returns the result to the client.

Example: When a user visits sreelekha.in, DNS resolution helps the browser find the server hosting the website.

9. Public IP Address
A public IP address is an address that is globally reachable over the internet, subject to network and firewall rules. It is used to identify a network interface or service on the public internet.

Example: A hosting provider may use public IP addresses to make websites accessible online.

10. Private IP Address
A private IP address is used inside a private network, such as a home, school, or office network. It is not directly routable over the public internet.

Private IPv4 ranges:
- 10.0.0.0 – 10.255.255.255
- 172.16.0.0 – 172.31.255.255
- 192.168.0.0 – 192.168.255.255
Example: 192.168.1.10

Conclusion
DNS helps users access websites through easy-to-remember domain names. HTTP and HTTPS define how browsers and servers communicate, while TLS protects HTTPS connections. Understanding these concepts helps explain how a custom-domain website is made available securely on the internet.