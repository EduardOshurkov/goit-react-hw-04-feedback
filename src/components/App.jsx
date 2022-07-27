import Feedback from "./Feedback/FeedbackBlock"

export const App = () => {
  return (
    <div>
      <Feedback good={0} neutral={0} bad={0}  />
    </div>
  );
};
