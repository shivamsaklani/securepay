"use client"
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Shield, CreditCard, CheckCircle, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

const Index = () => {
  const router= useRouter();
  const observerRefs = useRef<(Element | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure Transactions",
      description: "Bank-grade encryption for all your payments",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Multiple Payment Methods",
      description: "Accept cards, wallets, and more",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Instant Verification",
      description: "Real-time payment confirmation",
    },
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: "Fraud Protection",
      description: "Advanced security measures",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-secondary from-accent/50 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto fade-in">
            <span className="px-4 py-2 rounded-full bg-accent/10 text-white text-sm font-medium mb-8 inline-block">
              Secure Payment Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6  ">
              Seamless Payments for the Modern World
            </h1>
            <p className="text-lg text-accent mb-8 max-w-2xl mx-auto">
              Transform your business with our secure, fast, and reliable payment processing platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" onClick={()=>{router.push("/signin")}}  className="hover-scale">
               Create Account
              </Button>
            
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl font-bold mb-4">Why Choose SecurePay</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the future of payments with our comprehensive suite of features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-lg fade-in hover-scale"
                
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 fade-in">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Bank-Grade Security</h2>
                <p className="text-muted-foreground mb-6">
                  Your security is our top priority. We use advanced encryption and security measures to protect your transactions.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-5 h-5" />
                    <span>End-to-end encryption</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-5 h-5" />
                    <span>PCI DSS compliant</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-5 h-5" />
                    <span>24/7 fraud monitoring</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                <Shield className="w-48 h-48 text-primary animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto fade-in">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of businesses that trust SecurePay for their payment needs
            </p>
            <Button size="lg" onClick={()=>{router.push("/signin")}} className="hover-scale">
              Create Free Account
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Features</li>
                <li>Pricing</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Blog</li>
                <li>Documentation</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 SecurePay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;