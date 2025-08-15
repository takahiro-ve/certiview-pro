import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import NotificationBanner from "@/components/NotificationBanner";
import Dashboard from "@/components/Dashboard";
import FloatingActionButton from "@/components/FloatingActionButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <NotificationBanner />
      <Dashboard />
      <FloatingActionButton />
    </div>
  );
};

export default Index;
