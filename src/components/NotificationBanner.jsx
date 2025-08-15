const NotificationBanner = () => {
  return (
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
  );
};

export default NotificationBanner;
