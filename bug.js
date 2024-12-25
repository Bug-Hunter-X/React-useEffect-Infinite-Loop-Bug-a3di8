```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic causing infinite loop
    setCount(count + 1);
  }, [count]); // Dependency on count creates an infinite loop

  return <div>Count: {count}</div>;
}
```