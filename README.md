<h1 align="center">📑 CV Application</h1>

![](https://i.imgur.com/lhRJvY6.png)
<p align="center">
  CV Creator built with React
</p>

An React SPA to create a CV with. You can add, edit and delete input fields to put your data in. All of these changes are adopted by the preview CV in real-time. Once you are happy with the result, you can save and download your CV to your local machine via a simple button click. Also comes with a functionality to autofill all fields and look at what the CV would look like if you filled it out by hand.

## 🔴 Demo
🖥 [Live Demo](https://gianlucajahn.github.io/CV-Application/)

## 🎥 Showcase
You can see a GIF of my application below. I am using the autofill functionality to preview an automatically filled CV. <br /> <br />
![](https://github.com/gianlucajahn/cvApps/blob/main/CVshowcase.gif?raw=true)

## Performance
I let [Google Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=de) run over my application to check for it's **performance, accessibility, use of best practices and SEO optimization**. You can view the results right below this paragraph.

![Google Lighthouse Performance Results](https://i.ibb.co/ngkMJdN/results.png)

## Motivation
My motivation in building this project was to further solidify my understanding of how React handles state. For me at the time, a CV application that needs to handle all user data in state seemed like a reasonable approach to it. Furthermore, I created CVs for all my friends for some years now and felt like some automation to speed up that process wouldn't do no harm.

## What I learned
- mapping over arrays in state to make sure the selected elements receive changes on user interactions with the site
- using conditional class assignments to either render a desktop or a mobile view for the application, depending on screen width
- using external libraries within my application to enable the user to download and save their CV

## Features
- Autofill Functionality
- Desktop & Mobile-friendly UIs
- Saves CV as PDF and downloads it
- Real-time adoption of changes
- Clean UI/UX

## Technologies Used
- React
- CSS (CSS Modules)
- Photoshop
- NPM

### Libraries Used:
- html2Canvas
- uniqid
- jsPDF
