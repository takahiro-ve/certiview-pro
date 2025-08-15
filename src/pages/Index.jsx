import { useState } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import NotificationBanner from "@/components/NotificationBanner";
import CertificationsList from "@/components/CertificationsList";
import StudyTimer from "@/components/StudyTimer";
import WeeklyChart from "@/components/WeeklyChart";
import AddCertificationButton from "@/components/AddCertificationButton";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      <div className="animate-fade-in">
        <Header />
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <NotificationBanner />

        {/* メインコンテンツ */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <CertificationsList />
            
            {/* 今日の学習とチャート */}
            <div className="space-y-6">
              <StudyTimer />
              <WeeklyChart />
            </div>
          </div>
        </div>

        <AddCertificationButton />
      </div>
    </div>
  );
};

export default Index;
