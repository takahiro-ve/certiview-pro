const WeeklyChart = () => {
  return (
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
  );
};

export default WeeklyChart;
