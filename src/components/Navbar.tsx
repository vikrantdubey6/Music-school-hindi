'use client';
import React, {useState} from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from 'next/link';

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>

        <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item='Home'>
                    </MenuItem>
                </Link>

                  <MenuItem setActive={setActive} active={active} item='Services'>
                  <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">courses</HoveredLink>
                        <HoveredLink href="/contact">Contact us</HoveredLink>
                        <HoveredLink href="/landingpage">Branding</HoveredLink>
                  </div>
                    </MenuItem>

                      <MenuItem setActive={setActive} active={active} item='Product'>
                      <div className='text-sm grid grid-cols-2 gap-10 p-4'>
                             <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before"/>
            
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project" />
              
                      </div>
                    </MenuItem>
        </Menu>

    </div>
  )
}

export default Navbar