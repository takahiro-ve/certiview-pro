const CertificationCard = ({ cert, index }) => {
  return (
    <div
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
  );
};

export default CertificationCard;
