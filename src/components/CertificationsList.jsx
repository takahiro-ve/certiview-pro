import { certifications } from "@/data/certifications";
import CertificationCard from "./CertificationCard";

const CertificationsList = () => {
  return (
    <div className="lg:col-span-2">
      <div className="card-modern p-6 animate-slide-up">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground text-sm">📖</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">進行中の資格</h2>
              <p className="text-xs text-muted-foreground">現在学習中の資格一覧</p>
            </div>
            <span className="badge-primary">{certifications.length}件</span>
          </div>
          <button className="btn-ghost text-sm px-3 py-1">
            すべて表示 →
          </button>
        </div>
        
        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsList;
