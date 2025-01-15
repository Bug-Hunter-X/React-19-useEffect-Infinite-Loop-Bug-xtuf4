```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: effect runs only once after the initial render
    console.log('useEffect ran');
  }, []);

  return <div>Count: {count}</div>;
}
```