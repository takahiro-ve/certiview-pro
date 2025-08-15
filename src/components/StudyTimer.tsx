import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const StudyTimer = () => {
  const [seconds, setSeconds] = useState(5130); // 1時間25分30秒
  const [isRunning, setIsRunning] = useState(false);
  const [selectedCert, setSelectedCert] = useState("基本情報技術者試験");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
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

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleRecord = () => {
    setIsRunning(false);
    // TODO: Save study session to database
    console.log(`Study session recorded: ${formatTime(seconds)} for ${selectedCert}`);
  };

  return (
    <div className="space-y-4">
      <div className="gradient-primary text-white p-6 rounded-lg text-center">
        <div className="text-3xl font-bold mb-2">{formatTime(seconds)}</div>
        <div className="text-sm opacity-90 mb-4">{selectedCert}</div>
        <div className="flex gap-2 justify-center">
          <Button 
            variant="secondary" 
            size="sm"
            onClick={handleStart}
            disabled={isRunning}
            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          >
            開始
          </Button>
          <Button 
            variant="secondary" 
            size="sm"
            onClick={handlePause}
            disabled={!isRunning}
            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          >
            一時停止
          </Button>
          <Button 
            variant="secondary" 
            size="sm"
            onClick={handleRecord}
            className="bg-accent hover:bg-accent/90 text-white border-accent/30"
          >
            記録
          </Button>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">今日の実績</h3>
        <div className="text-sm text-muted-foreground space-y-1">
          <div className="flex justify-between">
            <span>• 基本情報:</span>
            <span>1時間25分</span>
          </div>
          <div className="flex justify-between">
            <span>• AWS:</span>
            <span>30分</span>
          </div>
          <div className="flex justify-between font-medium text-foreground border-t border-border pt-1 mt-2">
            <span>合計:</span>
            <span>1時間55分</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyTimer;