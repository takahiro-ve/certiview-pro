interface CertificationCardProps {
  id: string;
  name: string;
  icon: string;
  examDate: string;
  targetHours: number;
  currentHours: number;
  progress: number;
}

const CertificationCard = ({
  name,
  icon,
  examDate,
  targetHours,
  currentHours,
  progress
}: CertificationCardProps) => {
  return (
    <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-all duration-200 hover:shadow-elevation">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 gradient-cert rounded-lg flex items-center justify-center text-white text-xl">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">
            試験日: {examDate} • 目標: {targetHours}時間
          </p>
        </div>
      </div>
      
      <div className="text-right">
        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden mb-1">
          <div 
            className="h-full gradient-accent transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-muted-foreground">
          {currentHours}/{targetHours}時間 ({progress}%)
        </p>
      </div>
    </div>
  );
};

export default CertificationCard;