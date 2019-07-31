# NowTV React Interview

![NowTV](./logo.png)

A simple React + Redux project to retrieve, render and manipulate data returned from an API.

## Commands

- **yarn start**: Runs the web application in developer mode
- **yarn test**: Executes Jest tests that have the `.test.js` extension

## Tasks

Feel free to create new files to help you complete these tasks. Additional dependencies can be installed, if you think they are necessary

`index.js` in src directory is your react entry point, it is connected to the redux store

`data` directory is a mocked-API which exposes methods to get message information and member information from a chat room.

It has two publicly exposed functions `getMessages` and `getMembers`. Your tasks will be to add further logic to display and manipulate the data returned from these functions, without modifying `data/index.js`

Do not modify `data.js` to achieve these tasks, and do not worry about the styling. Code addition should be unit tested.

1. Render the list of messages from the redux store

2. Display the user's email when you hover over the message (using javascript).

3. Display the avatar of the user next to the message

4. Display and format the timestamp of the message to be human readable

5. Sort the messages by time

## Submission

Please upload your solution to your github account as a public repository, and send the URL to us.

## Notes on Submission

### Overview

The test has been completed for all steps and tests added.

As optimisation was a theme of our recent discussion, relevant features are added here. Further details on these, and other points, follow.

### Structural

1.  Added `coverage` option to `package.json` scripts. This supports the use of `yarn run coverage` to see statistics.

1.  `React` (and `react-dom`) is upgraded to `16.8.6` to make hooks available. For testing these, `enzyme` and `react-test-renderer` are upgraded as well to support tests that use `shallow` on components with hooks. More details here in this [enzyme issue](https://github.com/airbnb/enzyme/issues/1938)

    NOTE: these changes led to a browser warning for `createHistory` (in `store.js`) being deprecated. The relevant lines are changed to provide and use `createBrowserHistory`.

### Tests

1. `yarn run coverage` shows **100%** for all categories for my reducers and components. As there are not tests for `mapstate/mapdispatch` functions, there is slightly less coverage for `home.js`.

1. Component tests are snapshot-based, following the initial pattern provided for `home.js`. The snapshots have been reviewed to confirm that they recording valid instances.

1. `messagesProcessor.js` and reducers are tested according to expected results.

### Code - major

1. The most fundamental issue in this application is the relationship between members and messages.

   As these items are simulated to load over a slow network, and from separate api calls, there is a decision to be made on whether to wait for both sets of items to arrive before displaying anything or to show the user information as early as possible.

   The decision made here is to show information as soon as messages arrive. The feature to show the user's email address and avatar adapts to show that this information is pending, and the app updates automatically when the data arrives.

   Following this decision and pattern, it becomes necessary not to duplicate any processing on elements as new items arrive. Specifically, a look up table is created for members and the messages information is enhanced to add readable dates and then sorted. These items are memoised so that they update only if the relevant data changes.

### Code - minor

1. The comment about styles is noted. However, some basic styling has been added, to enable an easier flow of coding and review. In a real application, `styled components` would be my choice.

1. Relevant actions added for members loading.

1. The initial state in `store.js` has been changed to match that in actual use. However, the reducers would initialise this state correctly without this change.

1. The list of items is keyed. These keys can be seen in the `devtools` React tab, and they do not appear in the Elements tab.
