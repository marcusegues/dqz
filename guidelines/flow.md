# Flow

How do we add types to our source?

## Rules

* Every file in source **must** be flow-typed.
* `// $FlowFixMe` is only allowed in exceptional cases
* Types are Capitalized (e.g. `Currencies`). Don't add `Type` if not really necessary
* Be as precise with the types as possible, example

BAD
````javascript
type Currency = string;
````

GOOD
````javascript
type Currency = 'EUR' | 'CHF';
````

* `any` type is only allowed in exceptional cases and must be followed with a TODO comment, like:

```javascript
type Dolphin = any; // TODO: find out if it is a mammal or a fish
```

* Try to use existing types (import) when possible and do not create new types unnecessarily

* Functions/consts that are exported must be typed. This is especially imported with wrapped React components:
When you have a component (with props and/or state types) and you wrap it in `translation` and/or `connect`, you must type the export! 
Examples below.

## General types

Nothing special here, see examples throughout the codebase

## React Components

That could now sound a bit scary - but you'll find many examples in the codebase. It is essentially just copy/paste.

### Unwrapped (not within a HOC like `connect` or `translate`)

Naming: 
* the component itself is a capitalized name, like `MyComponent`.
* the props-type use the same name, adding `Props`: `MyComponentProps`
* the state-type (if it has) use the same name, adding `State`: `MyComponentState`
* Wrapped components are labelled `Inner`, see below

#### Stateless

All you need to do is type the `props`:

```javascript
type StatelessCompProps = {
  foo: number,
  bar: number,
};

export const StatelessComp = ({foo, bar}: StatelessCompProps) => <Text>{foo + bar}</Text>;
```

#### Stateful

Almost the same, just type the state as well:

```javascript
type StatefulCompProps = {
  foo: number,
  bar: number,
};

type StatefulCompState = {
  baz: string,
}

export class StatefulComp extends React.Component<StatefulCompProps, StatefulCompState> {
  // ...
}
```

### Wrapped in `translate`

We will only discuss the stateless components. Stateful components just add types for the state, see above.

* The props are still the same, we do NOT add the `t` function to the props. Why? The calling component will NOT pass the `t` function
* The component to be wrapped will have a string `Inner` added
* For the inner component, we will add `& {t: TFunction}` explicitly to the props. FYI, that is an intersection type and is adding `t` to the props

In short: *we must differentiate between the `props` that are passed from outside and the `props` after wrapping with translate*

```javascript
type StatelessCompProps = {
  foo: number,
  bar: number,
};

const StatelessCompInner = ({foo, bar, t}: StatelessCompProps & {t: TFunction}) => <Text>{t('blah')}{foo + bar}</Text>;
```

To export it, we would then call:

```javascript
import type { ComponentType } from 'react';

export const StatelessComp = (translate(['namespace'])(
  StatelessCompInner
): ComponentType<StatelessCompProps>);
```

In words: we export `StatelessComp` of type `ComponentType<StatelessCompProps>`, that is the wrapped `StatelessCompInner`.

Simple, eh?

If you get any of it wrong, Flow should and will actively complain.

### Wrapped in `connect`

Essentially, that's the same as with `translate` above. This time, the export is of the form:

```javascript
export const ReduxedComp = (connect(mapStateToProps)(
  ReduxedCompInner
): ComponentType<ReduxedCompProps>);
```

Make sure you add (intersection type) the props that redux delivers, like: 

```javascript
type ReduxedCompProps = {
  foo: string,
  bar: string,
  baz: string,
}
const ReduxedCompInner = ({
    foo, 
    bar,
    baz,
    }: ReduxedCompInner & { currencyObject: CurrencyObject }) => {}
```

where `CurrencyObject` is added by redux.

### Wrapped in both `connect` and `translate`

Well, same thing again. The tricky bit is getting the parantheses in the export right. Here's an example:

```javascript
export const PaymentContainer = (connect(mapStateToProps)(
  translate(['general'])(PaymentContainerInner)
): ComponentType<PaymentContainerProps>);
```

... and obviously, you'd add `t` and all the redux props as intersection type on the `inner` component.

#### Default props

Default props are just added with `defaultProps`:

```javascript
MyComponent.defaultProps = {
  isActive: false,
}
```

NOTE: I noticed that settings the defaultProps sometimes does not work this way. If you find a case, please tell christian@ambrite.ch. 

For the type, you need to make the [field optional](https://flow.org/en/docs/types/objects/#toc-optional-object-type-properties):

```javascript
type MyComponentProps = {
  isActive?: boolean
}
```


## Links
[Flow](https://flow.org/en/)
[React with Flow](https://flow.org/en/docs/react/)
[Intersection types](https://flow.org/en/docs/types/intersections/)