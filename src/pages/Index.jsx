import Header from "../components/Header.jsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            IT資格進捗管理
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-card-foreground mb-4">進行中の資格</h2>
              <p className="text-muted-foreground">基本情報技術者試験</p>
              <div className="mt-4 bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">65% 完了</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-card-foreground mb-4">今日の学習</h2>
              <div className="text-3xl font-bold text-primary mb-2">01:25:30</div>
              <p className="text-muted-foreground">学習時間</p>
              <div className="mt-4 space-y-2">
                <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90">
                  学習開始
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-foreground">アプリケーションが正常に動作しています！</p>
            <p className="text-muted-foreground">現在時刻: {new Date().toLocaleString('ja-JP')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
