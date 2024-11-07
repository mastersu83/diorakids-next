import { ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-36 flex items-center justify-between w-full border-b border-b-customBlue mb-7">
      <Link href="/" className="text-5xl">
        <span className="text-customRed [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]">
          DIORA
        </span>
        <span className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]">KIDS</span>
      </Link>
      <div className="flex items-center justify-between gap-x-4">
        <div className="flex items-center justify-center gap-x-2 border border-customBlue w-28 h-12 rounded-2xl">
          <UserRound />
          Войти
        </div>
        <div className="flex items-center justify-center border border-customBlue w-12 h-12 rounded-2xl">
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
};
