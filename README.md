# SRM Recruitment Agency Website

This is the official website for **SRM Recruitment Agency SRL**, built for international job placement services.  
The site is designed to be mobile-friendly and fully **installable as a Progressive Web App (PWA)** on iPhone and Android devices.

## Features
- Full website with pages: Home, About, Services, Job Seekers, Employers, Blog, Contact, Thank You.
- **PWA Support**: Add to Home Screen, offline caching via service worker.
- Integrated placeholder for **Flutterwave payment** (€1200 processing fee).
- Mobile-responsive and fast-loading design.
- Ready for deployment on **Netlify** (free hosting).

## Folder Structure
srm_site_ready/
├─ index.html
├─ about.html
├─ services.html
├─ countries.html
├─ jobseekers.html
├─ employers.html
├─ blog.html
├─ contact.html
├─ thank-you.html
├─ manifest.json
├─ sw.js
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  └─ main.js
│  └─ img/
│     └─ logo.png
## Deployment
1. Sign up on [Netlify](https://www.netlify.com/)  
2. Click **Add new site → Deploy manually**  
3. Drag & drop the contents of this repository (or ZIP)  
4. Set a clean subdomain (e.g., `srmagency.netlify.app`)  
5. Test on mobile and add to Home Screen for PWA functionality

## Notes
- Replace placeholder logo (`assets/img/logo.png`) with the official SRM red bird logo.  
- Ensure payment integration points are configured correctly before going live.  

## License
This project is proprietary to **SRM Recruitment Agency SRL**.
