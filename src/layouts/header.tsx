'use client';
import { MobileNav } from '@/layouts/mobile-nav';
import { ModeToggle } from '@/components/ui/theme-toggle';
import APP_PATHS from '@/config/path.config';
import { navbar } from '@/lib/constant/app.constant';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { ProfileMenu } from '@/components/profile-menu';
import { NavItem } from '@/components/navitem';
import Image from 'next/image';

const CompanyLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={'/main.png'}
        alt="GradJobs"
        width={30}
        height={30}
        className="rounded-full"
      />
      <h3 className="text-xl font-bold inline-flex bg-gradient-to-r from-[#63ADF7] to-[#296EE7] bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-[#63ADF7]  dark:to-[#296EE7]">
        GradJobs
      </h3>
    </div>
  );
};

const Header = () => {
  const session = useSession();

  return (
    <header className="sticky top-6 z-50 md:w-auto mx-auto w-full px-5">
      <div className="container flex h-14 max-w-screen-xl items-center md:border-2 rounded-full border-border/40 sm:bg-none sm:bg-background/60 ">
        <Link href="/" className="p-2.5 mr-4">
          <CompanyLogo />
        </Link>

        <div className="grow flex justify-end sm:justify-between items-center gap-3">
          <nav className="py-1 rounded-full max-sm:hidden">
            <ul className="flex items-center gap-4 text-sm lg:gap-6">
              {navbar.map((item) => (
                <NavItem {...item} key={item.id} />
              ))}
            </ul>
          </nav>

          <div className="max-sm:hidden flex text-sm items-center gap-3 ml-3">
            {session.status !== 'loading' && !session.data?.user && (
              <>
                <Link
                  href={APP_PATHS.SIGNIN}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  Login
                </Link>
              </>
            )}
            {session.status !== 'loading' && session.data?.user && (
              <ProfileMenu />
            )}
            <ModeToggle />
          </div>
          <div className="sm:hidden flex justify-center">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
