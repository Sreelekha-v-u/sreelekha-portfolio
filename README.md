# DEVOPS & NETWORKING MACHINE TEST – 03
## DNS, HTTP, HTTPS & Custom Domain Deployment

### 1. Project Overview

This project demonstrates the development and deployment of a personal portfolio website using React.js, GitHub, Vercel, and a custom domain purchased from GoDaddy.

It also demonstrates practical knowledge of DNS configuration, HTTP, HTTPS, SSL/TLS certificates, DNS resolution, and network verification commands.

### 2. Student Details

- **Student Name:** Sreelekha
- 
- **Project Name:** Personal Portfolio Website
- **Domain Name:** sreelekha.in
- **Hosting Platform:** Vercel
- **Domain Provider:** GoDaddy

### 3. Live Website

- **Custom Domain:** https://sreelekha.in
- **WWW Domain:** https://www.sreelekha.in
- **Vercel Deployment URL:** [https://sreelekha-portfolio-4zzg.vercel.app]

### 4. GitHub Repository

**Repository URL:** [https://github.com/Sreelekha-v-u/sreelekha-portfolio]

### 5. Technologies Used

- React.js
- HTML5
- CSS3
- JavaScript
- Git & GitHub
- Vercel
- GoDaddy
- DNS
- HTTP / HTTPS
- SSL/TLS

### 6. Website Sections

The portfolio website contains the following sections:

1. **Home** – Introduction and welcome section.
2. **About Me** – Personal and professional information.
3. **Skills** – Technical skills and technologies.
4. **Projects** – Details of completed projects.
5. **Contact** – Contact information.

### 7. Deployment Process

1. Created a personal portfolio website using React.js.
2. Uploaded the source code to GitHub.
3. Connected the GitHub repository to Vercel.
4. Deployed the website using Vercel.
5. Purchased the custom domain `sreelekha.in` from GoDaddy.
6. Configured DNS records to connect the domain with Vercel.
7. Enabled HTTPS using an SSL/TLS certificate.
8. Verified DNS resolution and website accessibility.

### 8. DNS Configuration Summary

The domain is managed through GoDaddy DNS and connected to Vercel.

| Record Type | Host | Value |
|---|---|---|
| A | @ | 216.198.79.1 |
| CNAME | www | [sreelekha.in] |

*Note: Verify these values against the DNS configuration displayed in  Vercel dashboard .*

### 9. DNS Verification Commands

The following commands are used to verify DNS resolution and HTTPS connectivity.

**1. nslookup**

```bash
nslookup sreelekha.in
```

**2. dig**

```bash
dig sreelekha.in
```

**3. curl**

```bash
curl -I https://sreelekha.in
```

These commands help verify domain resolution, DNS records, and the HTTP response from the deployed website.

### 10. Website Request Flow

The website request follows this process:

Browser → DNS → IP Address → Web Server → HTTP/HTTPS Response → Browser Display

### 11. DNS Concepts

- **Domain Name:** A human-readable address used to access a website.
- **DNS:** Domain Name System translates domain names into IP addresses.
- **A Record:** Maps a domain name to an IPv4 address.
- **CNAME Record:** Maps one domain name to another domain name.
- **HTTP:** Hypertext Transfer Protocol used for communication between browsers and web servers.
- **HTTPS:** Secure version of HTTP that encrypts communication.
- **SSL/TLS:** Security protocols used to establish encrypted connections.
- **DNS Resolution:** Process of converting a domain name into an IP address.
- **Public IP:** An IP address accessible over the public internet.
- **Private IP:** An IP address used within a private network.

### 12. Screenshots

The following screenshots are included in the `screenshots` folder:

1. Website Running
2. Vercel Deployment Dashboard
3. Domain Purchase Details
4. DNS Records Configuration
5. HTTPS Secure Connection
6. nslookup Output
7. dig Output
8. curl Output
9. DNS Verification Success

### 13. Conclusion

This project provided practical experience in building and deploying a personal portfolio website using React.js and Vercel. It also helped demonstrate custom domain configuration, DNS management, HTTPS security, SSL/TLS certificates, and network verification commands.

The project successfully demonstrates the complete process of making a website publicly accessible using a custom domain.

---

