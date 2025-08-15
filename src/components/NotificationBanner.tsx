const NotificationBanner = () => {
  return (
    <div className="mx-4 mt-4 bg-warning/10 border-l-4 border-warning rounded-r-lg p-4">
      <div className="flex items-start space-x-2">
        <span className="text-lg">🔔</span>
        <p className="text-sm text-warning-foreground/80">
          <span className="font-medium">「基本情報技術者試験」</span>まであと15日です。今週は平均2時間/日の学習を目標にしましょう！
        </p>
      </div>
    </div>
  );
};

export default NotificationBanner;