import { tabs } from "../data/certifications.js";

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="card-modern p-2">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 text-center text-sm font-medium transition-all duration-300 rounded-lg relative overflow-hidden ${
                activeTab === tab.id
                  ? 'text-primary-foreground bg-gradient-primary shadow-md transform scale-105'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/30 hover:scale-102'
              }`}
            >
              <span className="relative z-10">
                <span className="mr-2 text-base">{tab.icon}</span>
                <span className="hidden sm:inline font-medium">{tab.label}</span>
              </span>
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-gradient-primary opacity-10 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
