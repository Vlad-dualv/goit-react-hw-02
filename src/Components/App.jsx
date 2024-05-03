import './App.css';

import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
// import Notification from './Notification/Notification';

const App = () => {
  return (
    <div>
      <Description />
      <Options />
      <Feedback />
      {/* <Notification /> */}
    </div>
  );
};

export default App;
