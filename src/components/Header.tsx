const Header = () => {
  return (
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
  );
};

export default Header;