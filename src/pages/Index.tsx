import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [timer, setTimer] = useState(5130);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
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

  const tabs = [
    { id: "dashboard", label: "ダッシュボード", icon: "🏠" },
    { id: "analytics", label: "進捗分析", icon: "📈" },
    { id: "goals", label: "目標設定", icon: "🎯" },
    { id: "settings", label: "設定", icon: "⚙️" }
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
      <div className="animate-fade-in">
        {/* ヘッダー */}
        <header className="card-modern border-b border-border/50 sticky top-0 z-50 backdrop-blur-md bg-card/80">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md">
                  📚
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gradient-primary">IT資格進捗管理</h1>
                  <p className="text-xs text-muted-foreground">学習の進捗を効率的に管理</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground hidden sm:block font-medium">田中太郎さん</span>
                <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-105">
                  <span className="text-sm">👤</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ナビゲーション */}
        <nav className="container mx-auto px-4 py-4">
          <div className="card-modern p-2">
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 px-4 text-center text-sm font-medium transition-all duration-300 rounded-lg relative overflow-hidden ${
                    activeTab === tab.id
                      ? 'text-primary-foreground bg-gradient-primary shadow-md transform scale-105'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/30 hover:scale-102'
                  }`}
                >
                  <span className="relative z-10">
                    <span className="mr-2 text-base">{tab.icon}</span>
                    <span className="hidden sm:inline font-medium">{tab.label}</span>
                  </span>
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-gradient-primary opacity-10 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* 通知エリア */}
        <div className="container mx-auto px-4 mb-6">
          <div className="notification-modern animate-fade-in">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center mr-4 shadow-md">
                <span className="text-accent-foreground text-lg">🔔</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground">
                  <strong className="text-accent">「基本情報技術者試験」</strong>まであと
                  <span className="text-accent font-bold">15日</span>です
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  今週は平均2時間/日の学習を目標にしましょう！
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* メインコンテンツ */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* 進行中の資格一覧 */}
            <div className="lg:col-span-2">
              <div className="card-modern p-6 animate-slide-up">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground text-sm">📖</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">進行中の資格</h2>
                      <p className="text-xs text-muted-foreground">現在学習中の資格一覧</p>
                    </div>
                    <span className="badge-primary">3件</span>
                  </div>
                  <button className="btn-ghost text-sm px-3 py-1">
                    すべて表示 →
                  </button>
                </div>
                
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={cert.id}
                      className="group p-4 border border-border/50 rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer bg-gradient-to-r from-transparent to-primary/5 hover:to-primary/10 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {cert.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {cert.name}
                            </h3>
                            <div className="text-sm text-muted-foreground mt-1 space-y-1">
                              <div>📅 試験日: <span className="text-accent font-medium">{cert.examDate}</span></div>
                              <div>🎯 目標: <span className="text-secondary font-medium">{cert.targetHours}時間</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right space-y-2">
                          <div className="progress-modern w-32">
                            <div 
                              className="progress-fill shadow-glow-secondary"
                              style={{ width: `${cert.progress}%` }}
                            />
                          </div>
                          <div className="text-sm">
                            <div className="font-semibold text-foreground">
                              {cert.currentHours}/{cert.targetHours}時間
                            </div>
                            <div className="text-xs text-muted-foreground">
                              完了率 <span className="text-secondary font-medium">{cert.progress}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 今日の学習とチャート */}
            <div className="space-y-6">
              {/* 今日の学習 */}
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
                
                <div className="bg-gradient-primary rounded-2xl p-6 text-center text-primary-foreground mb-6 shadow-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="text-4xl font-bold mb-2" id="timer">
                      {formatTime(timer)}
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

                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground text-sm">今日の実績</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 bg-muted/30 rounded-lg">
                      <span>基本情報</span>
                      <span className="text-primary font-semibold">1時間25分</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/30 rounded-lg">
                      <span>AWS</span>
                      <span className="text-accent font-semibold">30分</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>合計</span>
                      <span className="text-gradient-secondary">1時間55分</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 週間進捗チャート */}
              <div className="card-modern p-6 animate-fade-in">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground text-sm">📈</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">週間学習時間</h2>
                    <p className="text-xs text-muted-foreground">過去7日間の進捗</p>
                  </div>
                </div>
                <div className="h-40 bg-gradient-to-br from-muted/20 to-muted/10 rounded-xl flex items-center justify-center border border-border/30">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📊</div>
                    <div className="text-sm text-muted-foreground">Chart.js表示予定</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 資格追加ボタン */}
        <button 
          onClick={() => alert('新しい資格を追加する機能を実装予定')}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-primary text-primary-foreground rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center text-2xl font-bold z-50 group"
          aria-label="新しい資格を追加"
        >
          <span className="transition-transform duration-300 group-hover:rotate-90">+</span>
        </button>
      </div>
    </div>
  );
};

export default Index;