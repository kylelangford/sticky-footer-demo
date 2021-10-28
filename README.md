# Sticky Footer Example


### Demo

Run the index.html in a browser window. 

This is a basic example of a sticky footer. When the sticky footer is closed a session variable 'sticky-footer' is set so the sticky footer will not appear untill a new browser session is started. The script will also add the height of the sticky footer to the body bottom margin. This way the sticky footer will not cover any content at the bottom of the page. This part can be removed. 


### Compile SaSS

```bash

$ sass --watch src/sass/sticky-footer.scss:src/css/sticky-footer.css

```