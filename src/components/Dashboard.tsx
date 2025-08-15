import CertificationCard from "./CertificationCard";
import StudyTimer from "./StudyTimer";
import ChartPlaceholder from "./ChartPlaceholder";

const Dashboard = () => {
  const certifications = [
    {
      id: "1",
      name: "基本情報技術者試験",
      icon: "📊",
      examDate: "2025年4月20日",
      targetHours: 80,
      currentHours: 52,
      progress: 65
    },
    {
      id: "2", 
      name: "AWS Solutions Architect",
      icon: "☁️",
      examDate: "2025年6月15日",
      targetHours: 100,
      currentHours: 30,
      progress: 30
    },
    {
      id: "3",
      name: "情報処理安全確保支援士",
      icon: "🔒",
      examDate: "2025年10月18日", 
      targetHours: 120,
      currentHours: 18,
      progress: 15
    }
  ];

  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Certifications List */}
        <div className="lg:col-span-2 bg-card shadow-card rounded-lg p-6">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">進行中の資格</h2>
            <span className="text-sm text-muted-foreground">{certifications.length}件</span>
          </div>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} {...cert} />
            ))}
          </div>
        </div>

        {/* Study Timer */}
        <div className="bg-card shadow-card rounded-lg p-6">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">今日の学習</h2>
          </div>
          <StudyTimer />
        </div>

        {/* Weekly Progress Chart */}
        <ChartPlaceholder 
          title="週間学習時間"
          description="Chart.js グラフ表示エリア (過去7日間の学習時間推移)"
        />
      </div>
    </div>
  );
};

export default Dashboard;