import { useState, useEffect } from 'react';

// Helper function to format time
const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

// Define the type for the props
type CountdownTimerProps = {
  targetDate: Date; // Expecting targetDate to be a Date object
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const timeLeft = targetDate.getTime() - now.getTime(); // Get time in milliseconds

    if (timeLeft <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-black text-yellow-500 px-6 py-12 shadow-lg text-center">
      <div className="flex justify-center space-x-4">
        <div className="bg-yellow-500 text-black p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{formatTime(timeLeft.days)}</h3>
          <p className="text-sm">Days</p>
        </div>
        <div className="bg-yellow-500 text-black p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{formatTime(timeLeft.hours)}</h3>
          <p className="text-sm">Hours</p>
        </div>
        <div className="bg-yellow-500 text-black p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{formatTime(timeLeft.minutes)}</h3>
          <p className="text-sm">Minutes</p>
        </div>
        <div className="bg-yellow-500 text-black p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{formatTime(timeLeft.seconds)}</h3>
          <p className="text-sm">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
