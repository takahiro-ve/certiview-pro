import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [seconds, setSeconds] = useState(5130);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const tabs = [
    { id: "dashboard", label: "ダッシュボード" },
    { id: "analytics", label: "進捗分析" },
    { id: "goals", label: "目標設定" },
    { id: "settings", label: "設定" }
  ];

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-card sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">📚</span>
              <h1 className="text-xl font-semibold text-primary">
                IT資格進捗管理
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground hidden sm:block">
                田中太郎さん
              </span>
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground">田</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card shadow-card rounded-lg mx-4 mt-4">
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "text-primary border-b-2 border-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Notification */}
      <div className="mx-4 mt-4 bg-warning/10 border-l-4 border-warning rounded-r-lg p-4">
        <div className="flex items-start space-x-2">
          <span className="text-lg">🔔</span>
          <p className="text-sm text-warning-foreground/80">
            <span className="font-medium">「基本情報技術者試験」</span>まであと15日です。今週は平均2時間/日の学習を目標にしましょう！
          </p>
        </div>
      </div>

      {/* Main Content */}
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
                <div key={cert.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-all duration-200 hover:shadow-elevation">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-cert rounded-lg flex items-center justify-center text-white text-xl">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        試験日: {cert.examDate} • 目標: {cert.targetHours}時間
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden mb-1">
                      <div 
                        className="h-full gradient-accent transition-all duration-300"
                        style={{ width: `${cert.progress}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {cert.currentHours}/{cert.targetHours}時間 ({cert.progress}%)
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Study Timer */}
          <div className="bg-card shadow-card rounded-lg p-6">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">今日の学習</h2>
            </div>
            
            <div className="space-y-4">
              <div className="gradient-primary text-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold mb-2">{formatTime(seconds)}</div>
                <div className="text-sm opacity-90 mb-4">基本情報技術者試験</div>
                <div className="flex gap-2 justify-center">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => setIsRunning(true)}
                    disabled={isRunning}
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    開始
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => setIsRunning(false)}
                    disabled={!isRunning}
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    一時停止
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => setIsRunning(false)}
                    className="bg-accent hover:bg-accent/90 text-white border-accent/30"
                  >
                    記録
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">今日の実績</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div className="flex justify-between">
                    <span>• 基本情報:</span>
                    <span>1時間25分</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• AWS:</span>
                    <span>30分</span>
                  </div>
                  <div className="flex justify-between font-medium text-foreground border-t border-border pt-1 mt-2">
                    <span>合計:</span>
                    <span>1時間55分</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Progress Chart */}
          <div className="bg-card shadow-card rounded-lg p-6">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">週間学習時間</h2>
            </div>
            <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="text-3xl mb-2">📈</div>
                <div className="text-sm">Chart.js グラフ表示エリア<br />(過去7日間の学習時間推移)</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Floating Action Button */}
      <Button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full gradient-primary hover:scale-110 transition-all duration-200 shadow-fab hover:shadow-elevation z-40"
        size="icon"
      >
        <span className="text-2xl text-white">+</span>
      </Button>
    </div>
  );
};

export default Index;
