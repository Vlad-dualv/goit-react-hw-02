import './App.css';
import { useState, useEffect } from 'react';

import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

function App() {
  const initCount = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [count, setCount] = useState(() => {
    const savedCount = window.localStorage.getItem('saved-count');
    if (savedCount !== null) {
      return JSON.parse(savedCount);
    } else {
      return initCount;
    }
  });

  useEffect(() => {
    window.localStorage.setItem('saved-count', JSON.stringify(count));
  }, [count]);

  const updateFeedback = feedbackType => {
    setCount(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = count.good + count.neutral + count.bad;
  const positiveFeedback = Math.round((count.good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options
        onUpdate={updateFeedback}
        total={totalFeedback}
        toReset={setCount}
        initCount={initCount}
      />
      {totalFeedback > 0 ? (
        <Feedback
          value={count}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
