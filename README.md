# What
DarkSlack is a Chrome Extension and CSS theme that can be used with your favorite flavor of CSS injection to style Slack's web interface.

![DarkSlack screenshot](https://raw.githubusercontent.com/o2dazone/DarkSlack/master/darkslack.png "DarkSlack screenshot")

# Why
When I started this project, I had recently switched away from a very customized Adium setup. Since moving to Slack, and the Adium XMPP protocol for Slack not being sufficient for me (why use Slack if you can't use it's features?), I decided to customize my Slack as much as possible to make it tolerable.

# How
## Compiling to CSS
This step is only required if you alter the CSS, or don't use DarkSlack as a Google Chrome Extension. Cd into the DarkSlack/src and run 'npm install'. After that, run 'gulp' and it will compile your assets in the proper locations. (inside the chrome-extension directory)

## Sidebar
Slack allows a user to customize the sidebar. We use this over CSS overrides because native styling > *. Go to Preferences > Sidebar Theme and click the "Customize" link at the bottom. Copy paste the contents of sidebar_customization and click "Done".

## styles/userCustom.scss
Inside userCustom are custom properties that are "customizable" by the user.

## Using It

### Chrome
DarkSlack is a Chrome Extension by default. To install, clone this repo down. Open up Chrome, and go to your Extensions. Check the box "Developer Mode" and click the button "Load unpacked extension...". Navigate to DarkSlack/chrome-extension. Enjoy!

### Firefox
[Stylish](https://addons.mozilla.org/en-US/firefox/addon/stylish/ "Stylish") is a browser extension for Firefox, and allows you to apply custom CSS per website, domain, URL or any crazy combination you can think of.

### Safari
Safari supports a native CSS file to style your page. Unfortunately this is applied to EVERY page, so it's great if you don't use Safari as your primary browser. You can use Safari as your "Slack Client", which not only lets you use the custom CSS feature, but allows you to cmd/alt + tab to it. This is what I prefer.

### Fluid
The paid version of Fluid allows you to use a custom stylesheet.
