import { useTimer } from "../hooks/useTimer.js";

const Timer = () => {
  const {
    isRunning,
    formattedTime,
    startTimer,
    pauseTimer,
    resetTimer,
    recordStudyTime
  } = useTimer(5130);

  return (
    <div className="bg-gradient-primary rounded-2xl p-6 text-center text-primary-foreground mb-6 shadow-xl relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-4xl font-bold mb-2" id="timer">
          {formattedTime}
        </div>
        <div className="text-sm opacity-90 mb-1 font-medium">基本情報技術者試験</div>
        <div className="text-xs opacity-75 mb-6">学習セッション</div>
        <div className="flex justify-center space-x-2">
          <button 
            onClick={isRunning ? pauseTimer : startTimer}
            className="btn-modern px-4 py-2 bg-white/20 hover:bg-white/30 text-sm"
          >
            {isRunning ? '⏸️ 停止' : '▶️ 開始'}
          </button>
          <button 
            onClick={resetTimer}
            className="btn-modern px-3 py-2 bg-white/10 hover:bg-white/20 text-sm"
          >
            🔄
          </button>
          <button 
            onClick={recordStudyTime}
            className="btn-modern px-4 py-2 bg-secondary hover:bg-secondary-dark text-sm"
          >
            💾 記録
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
