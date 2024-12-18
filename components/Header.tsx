import Link from "next/link";
import { logoLetters } from "@/consts/data";
import { Logo } from "@/components/Logo";

export const Header = () => {
  return (
    <header className="sticky -top-[10px] py-4 flex items-center justify-between w-full bg-white/50 backdrop-blur-lg rounded-b-2xl z-20">
      <Link href="/" className="text-5xl flex items-end justify-center">
        {logoLetters.map((letter) => (
          <Logo key={letter.id} letter={letter} />
        ))}
      </Link>
      {/*<div className="flex items-center justify-between gap-x-4">*/}
      {/*  <div className="flex items-center justify-center gap-x-2 border border-customBlue w-28 h-12 rounded-2xl">*/}
      {/*    <UserRound />*/}
      {/*    Войти*/}
      {/*  </div>*/}
      {/*  <div className="flex items-center justify-center border border-customBlue w-12 h-12 rounded-2xl">*/}
      {/*    <ShoppingCart />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </header>
  );
};
