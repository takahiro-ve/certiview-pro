import { Button } from "@/components/ui/button";

const FloatingActionButton = () => {
  const handleAddCertification = () => {
    // TODO: Open modal for adding new certification
    console.log("Add new certification");
  };

  return (
    <Button
      onClick={handleAddCertification}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full gradient-primary hover:scale-110 transition-all duration-200 shadow-fab hover:shadow-elevation z-40"
      size="icon"
    >
      <span className="text-2xl text-white">+</span>
    </Button>
  );
};

export default FloatingActionButton;