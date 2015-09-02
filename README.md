# What
DarkSlack is a Chrome Extension that tweaks the layout and colors of the Slack web UI.

![DarkSlack screenshot](https://raw.githubusercontent.com/o2dazone/DarkSlack/master/darkslack.png "DarkSlack screenshot")

# Why
While Slack is an awesome application, I feel a lot of the UI elements take up too much space. Becuase of this, there's less space for the more important stuff (cat pix).

# Usage

## Extension
Clone this repo down. Open up Chrome, and go to your Extensions. Check the box "Developer Mode" and click the button "Load unpacked extension...". Navigate to DarkSlack/chrome-extension. Enjoy!

## Sidebar
Slack allows a user to customize the sidebar. We use this over CSS overrides because native styling > *. Go to Preferences > Sidebar Theme and click the "Customize" link at the bottom. Copy paste the contents of sidebar_customization and click "Done".

# Building/Developing
This step is only required if you change any of the source. Cd into the DarkSlack/src and run 'npm install'. After that, run 'gulp watch' and it will compile your assets in the proper locations. (inside the chrome-extension directory). I use [Reload Extensions](https://chrome.google.com/webstore/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid?hl=en) plugin to aid in refreshing the Extension during development.


