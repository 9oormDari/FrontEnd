import cn from "../lib/cn.ts";

export default function LogoBox() {
  return (
    <div className="flex items-center space-x-4">
        <div className={cn(
          "w-[216px] h-[80px] bg-black px-6 py-2 font-bold text-lg",
          "text-white flex items-center justify-center"
          )}
        >
          로고
        </div>
      </div>
  );
}