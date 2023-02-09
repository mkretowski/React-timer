import Timer from './components/Timer/Timer';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import { useState, useEffect } from 'react';
const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    clearInterval(timer); // code that runs once at the start
    return () => {
      if (timer) clearInterval(timer); // code that runs once at the end
    };
  }, []);

  const start = () => {
    if (!timer)
      setTimer(
        setInterval(() => {
          setTime((time) => time + 100);
        }, 100)
      );
  };

  const stop = () => {
    setTimer(clearInterval(timer));
  };

  const reset = () => {
    setTimer(clearInterval(timer));
    setTime(0);
  };

  return (
    <div>
      <Container>
        <Timer time={time} />
        <div>
          <Button action={start}>Start</Button>
          <Button action={stop}>Stop</Button>
          <Button action={reset}>Reset</Button>
        </div>
      </Container>
    </div>
  );
};

export default App;
