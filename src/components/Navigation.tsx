import { useState } from "react";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  const tabs = [
    { id: "dashboard", label: "ダッシュボード" },
    { id: "analytics", label: "進捗分析" },
    { id: "goals", label: "目標設定" },
    { id: "settings", label: "設定" }
  ];
  
  return (
    <nav className="bg-card shadow-card rounded-lg mx-4 mt-4">
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? "text-primary border-b-2 border-primary bg-primary/5"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;