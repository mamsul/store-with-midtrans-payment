import { User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import NavCart from '../navbar/NavCart';

const Navbar = () => {
  return (
    <header className="flex w-full flex-row items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="relative border-2 border-none bg-transparent md:h-8 md:w-8">
          <Image
            alt="bag icon"
            src="/bag-3d.png"
            fill
            sizes="(max-width: 24px) 100vw, (max-width: 24px) 50vw, 33vw"
            quality={80}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <Link href={'/'}>
          <h1 className="font-serif text-3xl font-bold">Yellow Store.</h1>
        </Link>
      </div>

      <div className="flex flex-row gap-6">
        <Link href="/cart">
          <NavCart />
        </Link>
        <Link href="/user">
          <User className="h-5 w-5 cursor-pointer" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
