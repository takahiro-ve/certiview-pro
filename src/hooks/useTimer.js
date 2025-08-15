import { useState, useEffect } from "react";
import { formatTime } from "@/utils/timeUtils";

export const useTimer = (initialTime = 0) => {
  const [timer, setTimer] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimer(0);
  };
  const recordStudyTime = () => {
    alert(`学習時間 ${formatTime(timer)} を記録しました！`);
    resetTimer();
  };

  return {
    timer,
    isRunning,
    formattedTime: formatTime(timer),
    startTimer,
    pauseTimer,
    resetTimer,
    recordStudyTime
  };
};
