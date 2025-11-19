Simple Blog Website
Project Overview

This project is a simple blog website built using HTML and CSS. The website includes a homepage (index.html) showcasing recent posts and a blog post page (post.html) displaying the full content of a blog article. The project demonstrates semantic HTML structure, CSS styling, and responsive layout practices.

Features
Homepage (index.html)

Header: Displays a prominent page title (<h1>).

Navigation Menu: Links to the homepage and the blog post page, implemented using <nav> and <ul>.

Recent Posts Section: Contains at least two blog post summaries, each wrapped in an <article> element. Each summary links to the full blog post page.

Footer: Fixed at the bottom of the page with copyright information.

Blog Post Page (post.html)

Header: Prominent blog title (<h1>).

Navigation Menu: Links back to the homepage and other blog posts.

Blog Content: Full article content displayed with <article> and <p> elements.

Footer: Consistent with the homepage footer, providing copyright information.

Design & Visual Requirements

Color Palette:

Background: #f4f4f4

Headers & Footer: #333 (dark gray)

Text: #333 (headings), #666 (paragraphs)

Font: Arial, sans-serif

Blog Cards: Each post summary and full article is displayed in a white card (<article>), featuring:

Rounded corners (border-radius)

Subtle shadow effect (box-shadow)

Links: Navigation and blog links are clearly visible and do not change color when visited.

Technical Details

HTML5: Semantic structure using <header>, <nav>, <article>, <footer>.

CSS3: Styling includes flexbox for layout, card styling for posts, and responsive design for multiple screen sizes.

Responsive Layout: The website adapts to desktop and mobile viewports.

/project-folder
│── index.html       # Homepage with recent posts
│── post.html        # Full blog post page
│── styles.css       # CSS styles for layout and design
│── img/             # Folder containing blog images


Usage Instructions

Open index.html in any modern web browser to view the homepage.

Click on a blog post title or "Read more" link to navigate to post.html.

All styling and layout are handled by styles.css; no external dependencies are required.

Additional Notes

The project demonstrates best practices for semantic HTML and CSS layout.

The footer is consistently positioned at the bottom of the viewport using flexbox layout.

Blog cards provide a visually appealing design while maintaining readability.

Links are styled to match the overall theme and do not alter color when visited, preserving visual consistency.