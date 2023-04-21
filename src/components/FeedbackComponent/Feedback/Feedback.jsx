import { Section } from 'components/Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Container } from 'components/App.styled';
import { Notification } from '../Notification/Notification';
import { useState } from 'react';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleBtnClick = event => {
    const value = event.target.value;

    if (value === 'good') {
      setGood(state => state + 1);
    }

    if (value === 'neutral') {
      setNeutral(state => state + 1);
    }

    if (value === 'bad') {
      setBad(state => state + 1);
    }
  };

  const countTotalFeedbacks = () => {
    const totalCount = good + neutral + bad;
    return totalCount;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round((good / countTotalFeedbacks()) * 100);
    return positivePercentage;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleBtnClick} />
      </Section>

      {countTotalFeedbacks() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedbacks()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </Container>
  );
};