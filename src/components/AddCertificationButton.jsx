const AddCertificationButton = () => {
  const handleAddCertification = () => {
    alert('新しい資格を追加する機能を実装予定');
  };

  return (
    <button 
      onClick={handleAddCertification}
      className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-primary text-primary-foreground rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center text-2xl font-bold z-50 group"
      aria-label="新しい資格を追加"
    >
      <span className="transition-transform duration-300 group-hover:rotate-90">+</span>
    </button>
  );
};

export default AddCertificationButton;
