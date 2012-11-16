explainr
========

This is a template for building a slide-based visual explainer with built-in tooltip and jQuery interactivity. 

<strong>WHAT IS EXPLAINR?</strong>

I'm calling it Explainr, because I think it can be best used in that storytelling format. For those outside of journo culture, an explainer is a story that is basically a primer on any given topic, person, or issue. They're usually pretty straightforward and informative. 

This template is great for someone, particularly a journalist, to build a slide-based visual explainer with built-in tooltip and jQuery interactivity. There is a CSS, JS, and HTML file loaded with pre-established IDs and CLASSES; they're also commented heavily.

All you have to do is download the files and plug in your HTML content within the SECTIONS in the HTML template that represent each slide. You can have as many slides as you want, or as little. Minor manipulation of the CSS and JS files may be required. 

  
<strong>USING TOOLTIP</strong>

I modifed the Queness simple tooltip. I ditched the image backgrounds and created my own out of CSS. I also modified the code to detect proximity to the borders of the project (a bit wonky on the Y Axis tho). 

To create an interactive tooltip:
  1. surround the image in an a tag 
  2. Add rel="tooltip" to the a tag
  3. Add whatever you want the tooltip to display in the title attribute in the a tag. It can be styled to a degree to give paragraph breaks, bullets, or bold/italics.
  4. Add the .selectable class as an attribute in the IMG tag to give the image "interactivity" - basically changes opacity to 0.7 on hover over and restores it when it leaves. 
  5. PRESTO!

<strong>BACKGROUND</strong>

Seven UC Berkeley Journalism Grad students build a project called <strong>Gimme Props!</strong> for the 2012 election season. The project, <a href="http://www.gimmeprops.us">which can be found here</a>, was the first major coding endeavor I have done to date. As a journalism-turning-hacker, it was exciting to create something from relative scratch using javascript. 

In short, the goal of the project was to create an <strong>interactive explainer</strong> on all of the 11 California ballot measures. I never really liked how ballot measures are covered and find the articles to be realitively dry, even for a politics lover like myself. Considering how important these often-confusing and self-interested props are, we tried something different. 

I was tasked with creating a template to show all the content on the various props. Now that the project is finished, I realized this template could easily be reproduced for other stories or uses. Like I said before, I'm a coding noob, so the code might not be a clean or as concise as it could be. 

<strong>ACKNOWLEGEMENTS</strong>

Thanks to all my colleagues who slaved away for close to two months on every aspect of the Gimme Props! project, from research to design to coding. In no particular order: 

<ul>
    <li><a href="https://github.com/BrittLynnS">Brittany Schell</a></li>
    <li><a href="https://github.com/ckhickey">CK Hickey</a></li>
    <li><a href="https://github.com/erikreyna">Erik Reyna</a></li>
    <li><a href="https://twitter.com/skscoop">Stacey Kennelly</a></li>
    <li><a href="https://twitter.com/christykhoshaba">Christy Khoshoba</a></li>
    <li><a href="https://twitter.com/evelyn_pi">Evelyn Pi</a></li>
</ul>

Thanks to Jeremy Rue for helping us out when we hit a wall, and for believing we could do this project. Also, thanks to <a href="https://twitter.com/pgrabowicz">Paul Grabowicz</a> and <a href="https://twitter.com/koci">Koci Hernandez</a> for all your valuable input and direction. 

And thanks to Queness for developing a simple and easy-to-use tooltip and <a href="http://thenounproject.com/jamison">Jamison Wieser</a>, who made the arrows.

The following is a list of all the IDs and CLASSES and what they do:

<table>
  <tr><td><strong>ID/CLASS</strong></td><td><strong>INFO</strong></tr>
  <tr><td>.slides</td><td>Creates a consistent size for all the slides</td></tr>
  <tr><td>.selectable</td><td>Place inside an IMG tag to give it an interactive effect, basically drops its opacity on hover over</td></tr>
  <tr><td>.right_arrow</td><td>Style for the right arrow image to transition between slides</td></tr>
  <tr><td>.left_arrow</td><td>Style for the left arrow image to transition between slides</td></tr>
  <tr><td>left_arrow and right_arrow</td><td>IDs used to "clean" arrows from 1st/last slide</td></tr>
  <tr><td>slide_X</td><td>IDs for individual slides. Required in HTML and CSS for DISPLAY toggle</td></tr>
  <tr><td>tooltip</td><td>IDs for tooltip style</td></tr>
