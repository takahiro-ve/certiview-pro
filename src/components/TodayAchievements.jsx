import { todayAchievements } from "@/data/certifications";
import { calculateTotalTime as calcTotal, formatTotalTime as formatTotal } from "@/utils/timeUtils";

const TodayAchievements = () => {
  const totalMinutes = calcTotal(todayAchievements);
  const totalTime = formatTotal(totalMinutes);

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-foreground text-sm">今日の実績</h3>
      <div className="space-y-2 text-sm">
        {todayAchievements.map((achievement, index) => (
          <div key={index} className="flex justify-between p-2 bg-muted/30 rounded-lg">
            <span>{achievement.name}</span>
            <span className={`font-semibold ${achievement.color}`}>{achievement.time}</span>
          </div>
        ))}
        <div className="border-t pt-2 flex justify-between font-semibold">
          <span>合計</span>
          <span className="text-gradient-secondary">{totalTime}</span>
        </div>
      </div>
    </div>
  );
};

export default TodayAchievements;
