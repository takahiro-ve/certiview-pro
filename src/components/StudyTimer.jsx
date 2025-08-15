import Timer from "./Timer";
import TodayAchievements from "./TodayAchievements";

const StudyTimer = () => {
  return (
    <div className="card-modern p-6 animate-scale-in">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
          <span className="text-secondary-foreground text-sm">⏱️</span>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">今日の学習</h2>
          <p className="text-xs text-muted-foreground">学習時間を記録</p>
        </div>
      </div>
      
      <Timer />
      <TodayAchievements />
    </div>
  );
};

export default StudyTimer;
