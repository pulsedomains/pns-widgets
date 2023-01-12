# ENS Registration Widget

This is a React component that allows you to register .eth names on the Ethereum Name Service (ENS).

## Usage

To test the component locally, run `yarn link` in the root directory of this project. Then, in the root directory of your project, run `yarn link ens-widget`.

Now you can import the component into your project and use it like so:

```jsx
import { Widget } from 'ens-widget'

const App = () => {
  return (
    <div>
      <Widget />
    </div>
  )
}
```

## Notes

- I followed [this guide](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe) to set up the project
- I'm primarily testing the component with my [web3-starter repo](https://github.com/gskril/web3-starter)
