import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import loginBg from "@/assets/login-bg.jpeg";
import ippfLogoWhite from "@/assets/ippf-logo-white.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left: Banner with new background */}
      <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden">
        <img
          src={loginBg}
          alt="IPPF Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(240,50%,25%,0.7)] to-[hsl(200,60%,35%,0.5)]" />
        {/* Logo */}
        <div className="relative z-10 p-8">
          <img src={ippfLogoWhite} alt="IPPF Logo" className="h-12" />
        </div>
        {/* Tagline */}
        <div className="relative z-10 flex flex-col justify-end p-12 mt-auto">
          <h2 className="text-[28px] font-semibold text-white leading-snug">
            Empowering communities.<br />Building healthier futures.
          </h2>
          <p className="text-[15px] text-white/80 mt-3 max-w-md">
            IPPF Business Planning & Reporting Portal
          </p>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="flex flex-1 flex-col bg-background">
        {/* Language selector */}
        <div className="flex justify-end p-6">
          <Select defaultValue="en">
            <SelectTrigger className="w-[140px] border-border">
              <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Form */}
        <div className="flex flex-1 items-center justify-center px-8 pb-16">
          <div className="w-full max-w-[400px] space-y-8">
            {/* Mobile logo */}
            <div className="lg:hidden mb-4">
              <img src={ippfLogoWhite} alt="IPPF Logo" className="h-10" style={{ filter: 'brightness(0) saturate(100%) invert(22%) sepia(93%) saturate(5765%) hue-rotate(355deg) brightness(95%) contrast(92%)' }} />
            </div>

            <div className="space-y-2">
              <h1 className="text-[30px] font-semibold leading-tight text-primary">
                Business Planning<br />& Reporting Portal
              </h1>
              <p className="text-[15px] text-muted-foreground">
                Please enter details to continue
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Username</label>
                <Input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-12 rounded-lg border-border bg-secondary/50 px-4 text-[15px] placeholder:text-muted-foreground focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Password</label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 rounded-lg border-border bg-secondary/50 px-4 pr-12 text-[15px] placeholder:text-muted-foreground focus-visible:ring-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 rounded-lg text-[14px] font-medium"
                size="lg"
              >
                Log In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
