# 📑 CV Application

An SPA to create a CV with. You can add, edit and delete input fields to put your data in. All of these changes are adopted by the preview CV in real-time. Once you are happy with the result, you can save and download your CV to your local machine via a simple button click. Also comes with a functionality to autofill all fields and look at what the CV would look like if you filled it out by hand.

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

## Problems and how I solved them

❓ **Problem:** Recolor specific buttons on hover

❕ **Solution:** While mapping over the current array containing the user's work experience or skills, all buttons get unique ID's through uniqid() and an onMouseEnter + onMouseLeave property. A function from App.js is handed down into these properties and maps over the experience or skill array, changing the "fill:" attribute for the SVG in the button whose ID matches the button that held said onMouseEnter/onMouseLeave property. 



❓ **Problem:** Being unable to render the form and preview on mobile reasonably

❕ **Solution:** Giving both components conditional class assignments that relied on a piece of state. Said state holds information about which of both components is to be rendered at a time.



❓ **Problem:** Requiering the user to be able to download their CV

❕ **Solution:** Utilizing both the 'html2canvas' and 'jsPDF' libraries. First, I selected the component that is to be printed into a PDF. Said component is converted into an image (png) by the html2canvas toDataURL method. Afterwards, a new jsPDF() const is created, proportions of the image are being aligned with proportions of the PDF and the .png image is being added and saved to the PDF.

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
