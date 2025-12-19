import { Button } from "@/components/ui/button";
import { FiClock } from "react-icons/fi";

const ComingSoon = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-4 text-accent">Coming Soon</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          We are working hard to bring you an amazing experience. Stay tuned for updates!
        </p>
        <Button variant="outline" size="lg" className="flex items-center gap-2">
          <FiClock className="text-xl" />
          <span>Stay Updated</span>
        </Button>
      </div>
    </section>
  );
};

export default ComingSoon;




