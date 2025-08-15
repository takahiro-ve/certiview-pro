const ChartPlaceholder = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-card shadow-card rounded-lg p-6">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      </div>
      <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <div className="text-3xl mb-2">📈</div>
          <div className="text-sm">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ChartPlaceholder;