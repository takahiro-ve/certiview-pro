export const formatTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const calculateTotalTime = (achievements) => {
  return achievements.reduce((total, achievement) => {
    const [hours, minutes] = achievement.time.split('時間');
    const totalMinutes = parseInt(hours) * 60 + parseInt(minutes || 0);
    return total + totalMinutes;
  }, 0);
};

export const formatTotalTime = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}時間${minutes}分`;
};
