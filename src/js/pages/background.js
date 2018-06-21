import { wrapStore } from 'react-chrome-redux';

import { REDUX_PORT_NAME } from '../constants';
import store from '../state/store';
import * as Actions from '../state/actions';

/* Preload images */
import '../../img/icon-128.png';
import '../../img/icon-34.png';

/* Wrap Redux store */
wrapStore(store, {
  portName: REDUX_PORT_NAME,
});

/* Update Badge */
function updateBadge(text) {
  chrome.browserAction.setBadgeBackgroundColor({
    color: '#3ABA9D',
  });
  chrome.browserAction.setBadgeText({
    text,
  });
}

function onUrlChange() {
  chrome.tabs.query(
    {
      currentWindow: true,
      active: true,
    },
    (tabArray) => {
      const currentUrl =
        tabArray[0] && String(tabArray[0].url).startsWith('http') ?
          tabArray[0].url :
          null;
      const isGithub = String(currentUrl).includes('github.com');

      updateBadge(isGithub ? ' ' : '');
      store.dispatch(Actions.updateCurrentUrl(currentUrl));
    },
  );
}

/* URL Change triggers */
chrome.tabs.onUpdated.addListener(onUrlChange);
chrome.tabs.onSelectionChanged.addListener(onUrlChange);
chrome.tabs.onRemoved.addListener(onUrlChange);
onUrlChange();
