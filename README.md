# React Chrome Extension Sample

Basic boilerplate for a Chrome extension built:
 - React 16.4
 - Redux 4
 - ESLint (airbnb style)
 - SASS

This boilerplate comes with a sample example that :
 - pulls sample data from github API
 - detects if the current page is a github page and shows a badge
 - have a sample option page
 - uses tabs from `react-tabs`

## Developing a new extension
1. Install [Node 8+](https://nodejs.org).
2. Clone the repository.
3. Install [yarn](https://yarnpkg.com/lang/en/docs/install/).
4. Run `yarn`.
5. Change the package's name and description on `package.json`.
6. Change the name of your extension on `src/manifest.json`.
7. Run `npm run start`
8. Load your extension on Chrome following:
    1. Access `chrome://extensions/`
    2. Check `Developer mode`
    3. Click on `Load unpacked extension`
    4. Select the `build` folder.
9. Have fun 🚀

## Structure
- src
- ├ img/* `contains all images`
- ├ scss/* `contains all stylesheets in SASS`
- ├ background.html `background html page (see javascript in /src/js/pages/background.js)`
- ├ options.html `options html page (see javascript in /src/js/pages/options.js)`
- ├ popup.html `popup html page (content generated in react, see /src/js/pages/popup.js)`
- ├ js
- ├--├ components/* `contains all React components used in this project`
- ├--├ pages/* `contains javascript files for popup/background/options`
- ├--├ state/* `contains redux state files`
- ├--├ constants.js `project constants`
- ├--├ helpers.js `shared javascript functions`

## Packing
After the development of your extension run the command

```
$ NODE_ENV=production npm run build
```
Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.

## Secrets
If you are developing an extension that talks with some API you probably are using different keys for testing and production. Is a good practice you not commit your secret keys and expose to anyone that have access to the repository.

To this task this boilerplate import the file `./secrets.<NODE_ENV>.js` on your modules through the module named as `secrets`, so you can do things like this:

_./secrets.development.js_ or _./secrets.production.js_ (already are ignored on the repository)
```
export default {
    apiKey: 'sample',
};
```

## Credits
- [Mohammed Elalj](https://www.tonoid.com)
- [Samuel Simões](https://www.github.com/samuelsimoes) (inspiration from [chrome-extension-webpack-boilerplate](https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate))