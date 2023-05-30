# bunnylol

Implementation of Facebook/Meta's bunnylol, running on `https://kev-inc.github.io/bunnylol/#/?search=`

## Commands available
Command | Name | URL
--- | --- | ---
g | Google | https://google.com/
g [query] | Google | https://www.google.com/search?q=[query]
fb | Facebook | https://facebook.com/
fb [query] | Facebook | https://www.facebook.com/search/top/?q=[query]
wa | WhatsApp | https://web.whatsapp.com/
ig | Instagram | https://instagram.com/
gm | Gmail | https://mail.google.com/mail/u/0
gd | Google Drive | https://drive.google.com/drive/u/0
cal | Google Calendar | https://calendar.google.com/calendar/r
maps | Google Maps | https://www.google.com/maps/
maps [query] | Google Maps | https://www.google.com/maps/search/[query]
yt | YouTube | https://youtube.com/
yt [query] | YouTube | https://www.youtube.com/results?search_query=[query]
gh | GitHub | https://github.com/
gh [query] | GitHub | https://www.github.com/search?q=[query]
l | LinkedIn | https://linkedin.com/
DEFAULT | Default - Google Search | https://google.com/

The full list of commands can be found in `src/Commands.js`

## How to use
1. In chrome, open 'Settings' and navigate to 'Search engine', and click on 'Manage search engines and site search'
2. Under the site search settings, click on 'Add' and enter the following:
```
Search engine - bunnylol
Shortcut - b
URL with %s in place of query - https://kev-inc.github.io/bunnylol/#/?search=%s
```
3. Click save, and set as the default search engine for your browser

## Forking your own
1. Clone the repository
2. Update the `homepage` in `package.json` to your own GitHub pages URL (format: `https://[github-username].github.io/[repo-name]`)
3. To run locally, run `npm start`
4. To deploy, run `npm run deploy`
5. Your instance of bunnylol should be running in `https://[github-username].github.io/[repo-name]`, make sure to add `https://[github-username].github.io/[repo-name]/#/?search=%s` to your chrome search engine settings