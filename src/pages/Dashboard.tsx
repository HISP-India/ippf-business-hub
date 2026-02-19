const Dashboard = () => {
  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      <header className="h-16 bg-primary flex items-center px-6">
        <span className="text-lg font-semibold text-primary-foreground tracking-wide">
          IPPF — Business Planning Portal
        </span>
      </header>
      <main className="flex flex-1 items-center justify-center">
        <div className="text-center space-y-3">
          <h1 className="text-[30px] font-semibold text-foreground">Dashboard</h1>
          <p className="text-lg text-muted-foreground">Coming Soon</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
