```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic, effect runs only once on mount
    console.log('Effect runs only once');
  }, []); // Empty dependency array prevents infinite loops

  return <div>Count: {count}</div>;
}
```