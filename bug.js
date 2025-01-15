```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: calling setCount inside useEffect without dependencies leads to an infinite loop
    setCount(count + 1);
  }, []); // Missing dependency array

  return <div>Count: {count}</div>;
}
```