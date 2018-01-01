# Testing

Why we test and what we test.

## Motivation

In this file, we will only discuss automated testing (code level), so **unit** tests and **integration** tests.

With unit tests, we can test single methods or code blocks (the units of our code), and with integration test, we can test the interoperability of these blocks.

Testing is very important to build a stable app and allow for quick refactors.

Here, we will discuss how to set up tests and mock components (translation, redux state).

## Unit tests

### Stack

We are using `jest` as a test-runner and `enzyme` for rendering of react-native components.

### Where

Unit tests should be close to the code, as if it was a module. Example: 
we have `./src/model`, and in there, we create a folder `./src/model/__tests__` to keep all the tests.

### Structure of the test-file

The first two lines of almost any test file are as follows:

```javascript
// @flow
/* global expect, test, describe */
```

The first line, obviouly, activates flow in the test file.
Well, yes, we can leave it away, but it is good practice to use it in tests too (and gives another layer of stability/tests).

The second line tells ESLint that we are going to use `expect`, `test` and `describe` from jest. 
These functions are all globally defined, so we have to tell ESLint just that.

Having that set up, we could essentially write the tests, e.g.:

```javascript
describe('The basket / quantites: ', () => {
  test('defaults to 0 quantity', () => {
    categoriesArray.forEach(c =>
      expect(getTotalQuantity(emptyBasket, c)).toBe(0)
    );
  })
})
```

### Mocking Translation

Some of our components are wrapped in `translation`, to enable i18n.

As we do not want to explicitly export the "unwrapped" component solely for testing, we mock the translate function on `react-i18next` with:

```javascript
jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));
```

That means that whenever `translate` is called, the function in the mock is returned (wrapping the component with a `t` function that is simply: `() => ''`).
That way, all calls to `t` return an empty string. Obviously, other implementations for `t` could be used.

To use it, we actually do not have to do anything specific, we simply import the component and `jest` will do the rest.

For an example, see `OnBoardingTaxScreen`.

### Mocking navigation

To completely mock the navigation, all you need to do is pass a `jest.fn()` as `navigation` props.
Example:

````javascript
const navMock = jest.fn();
const component = shallow(
  <OnBoardingTaxScreen navigation={{ navigate: navMock }} />
).dive();
````

Using that handle (`navMock`), you can simulate a button press and check if it has been called properly:

````javascript
component.find('DoneButton').forEach(child => {
  child.simulate('press');
});
expect(navMock).toBeCalledWith('MainMenu');
````

No special magic here.

### Mocking Redux store
tbd, example coming.

Along those lines: [gist](https://gist.githubusercontent.com/jasongaare/6aadb9d1b99075b42c99a2ef4538e262/raw/f6fa67aae8b3a496ef772f5963f984be3d358e7d/CameraSettings.test.js)

Taken here: [jest in RN](https://medium.com/react-native-training/learning-to-test-react-native-with-jest-part-1-f782c4e30101)

### Testing React Components

To test React-Native components, we can use Enzyme. 
Most of the UI testing can be done using snapshots (see if anything has changed).

Then, you can simulate press etc., see [Jest in ReactNative (4 Parts)](https://medium.com/react-native-training/learning-to-test-react-native-with-jest-part-1-f782c4e30101) or the [official documentation](http://airbnb.io/enzyme/).

An example for our case is `OnBoardingTaxScreen`.

## Integration Testing
tbd

## Links
[Jest](https://facebook.github.io/jest/)
[Testing React](https://facebook.github.io/jest/docs/en/tutorial-react.html)
[Jest in ReactNative (4 Parts)](https://medium.com/react-native-training/learning-to-test-react-native-with-jest-part-1-f782c4e30101)