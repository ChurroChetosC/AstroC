import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting} C x A </h3>
      <button onClick={() => setGreeting(randomMessage())}>
        Una vez mas...
      </button>
    </div>
  );
}