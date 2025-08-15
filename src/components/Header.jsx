const Header = () => {
  return (
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
  );
};

export default Header;
