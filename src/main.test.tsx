import { test } from '@jest/globals';
import { render } from '@testing-library/react';
import { useRef, useSyncExternalStore } from 'react';

function TestComponent() {
  const refData = useRef(0);
  useSyncExternalStore(
    (onStoreChange) => {
      let isUnmount = false;
      void Promise.resolve().then(() => {
        console.log(`Promise.resolve isUnmount = ${isUnmount}`);
        if (isUnmount) {
          return;
        }
        refData.current = 1;
        onStoreChange();
      });
      return () => {
        isUnmount = true;
      };
    },
    () => refData.current,
    () => refData.current
  );
  return null;
}

test('useSyncExternalStore', () => {
  render(<TestComponent />);

  // Calling cleanup (from '@testing-library/react') here will resolve 'An update to TestComponent inside a test was not wrapped in act(...)' error
  // cleanup();
});

test('another test', () => {
  console.log('ok');
});
