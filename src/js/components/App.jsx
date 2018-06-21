import React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import * as Actions from '../state/actions';
import * as Aliases from '../state/aliases';

import '../../scss/components/App.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.loadDataset(Math.ceil(Math.random() * 1000));
  }

  render() {
    const {
      isLoading, dataset, tabIndex, currentUrl, updateTab,
    } = this.props;
    if (isLoading) return <div className="popup">Loading...</div>;
    const repoList = dataset
      .slice(0, 10)
      .map(r => <li key={r.id}>{r.full_name}</li>);
    return (
      <div className="popup">
        <Tabs selectedIndex={tabIndex} onSelect={i => updateTab(i)}>
          <TabList>
            <Tab>Count</Tab>
            <Tab>Repos</Tab>
          </TabList>
          <TabPanel>
            <h2>{dataset.length} repos</h2>
            <p>{currentUrl}</p>
          </TabPanel>
          <TabPanel>
            <ul>{repoList}</ul>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  dataset: state.dataset,
  currentUrl: state.currentUrl,
  tabIndex: state.tabIndex,
});

const mapDispatchToProps = dispatch => ({
  loadDataset: since =>
    dispatch({ type: Aliases.LOAD_DATASET, payload: { since } }),
  updateTab: i => dispatch(Actions.updateTab(i)),
  updateCurrentUrl: i => dispatch(Actions.updateCurrentUrl(i)),
});

const statefulApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
export default hot(module)(statefulApp);
