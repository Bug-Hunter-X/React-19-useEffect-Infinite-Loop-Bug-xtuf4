# React 19 useEffect Infinite Loop Bug

This repository demonstrates a common bug in React 19 involving the `useEffect` hook.  The bug occurs when the `setCount` function is called inside `useEffect` without specifying a dependency array or with an incorrect dependency array, leading to an infinite loop.  This example showcases the bug and provides a solution.

## Bug

The `bug.js` file contains a component with an `useEffect` hook that attempts to update the state variable `count` within the effect itself.  Because `setCount` modifies state, which causes a re-render, and the `useEffect` runs again, causing a cycle. The absence of a dependency array triggers the effect after each render. This leads to the browser freezing due to the continuous re-rendering and state updates.

## Solution

The `bugSolution.js` file demonstrates the correct usage of `useEffect` by correctly defining the dependency array.  By leaving the dependency array empty `[]`, the effect runs only once after the initial render, preventing the infinite loop.  If you need the effect to run based on the value of state or props, specify those as dependencies.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the error in the console and the unexpected behavior of the counter.