const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 relative">
      <div className="max-w-md text-center">
        {/* Abstract Pattern */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          {[...Array(12)].map((_, i) => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            const randomSize = Math.random() * 30 + 10;
            const randomRotation = Math.random() * 360;
            return (
              <div
                key={i}
                className="absolute bg-primary/10 rounded-full animate-ping"
                style={{
                  width: `${randomSize}px`,
                  height: `${randomSize}px`,
                  top: `${randomY}%`,
                  left: `${randomX}%`,
                  transform: `rotate(${randomRotation}deg)`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            );
          })}
        </div>

        {/* Floating Shapes */}
        <div className="grid grid-cols-5 gap-3 mb-8">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl ${
                i % 3 === 0 ? "bg-primary/20 animate-bounce" : "bg-primary/5 animate-spin"
              }`}
              style={{
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random()}s`,
              }}
            />
          ))}
        </div>

        {/* Text Content */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
