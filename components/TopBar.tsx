import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    // Removed 'hidden md:block', added mobile padding and a light background
    <div className=" bg-[#faf9f7] text-black w-full">
      {/* Added flex-wrap and justified center for mobile layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 md:py-0 md:h-10 flex flex-wrap items-center justify-center md:justify-between gap-2 md:gap-4 text-[10px] sm:text-[11px] lg:text-sm font-medium text-gray-600">
        
        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6">
          <div className="flex items-center gap-1.5 hover:text-orange-500 transition cursor-pointer">
            <Phone size={12} className="text-orange-500 sm:w-[14px] sm:h-[14px]" />
            <span>+1 (520) 256 3650</span>
          </div>

          <div className="flex items-center gap-1.5 hover:text-orange-500 transition cursor-pointer">
            <Mail size={12} className="text-orange-500 sm:w-[14px] sm:h-[14px]" />
            <span>info@bizcam24.com</span>
          </div>

         
        </div>

       

      </div>
    </div>
  );
}