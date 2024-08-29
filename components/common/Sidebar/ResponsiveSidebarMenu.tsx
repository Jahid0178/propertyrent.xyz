"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationMenus } from "@/data/data";
import { cn } from "@/lib/utils";
import { FaBars } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import authStore from "@/store/authStore";

const ResponsiveSidebarMenu = () => {
  const { user, logout } = authStore((state) => state);
  return (
    <Sheet>
      <SheetTrigger asChild className="flex lg:hidden">
        <Button variant="outline" size="icon">
          <FaBars size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-5">
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>

        {user ? (
          <div className="mb-4">
            <SheetClose asChild>
              <Button asChild className="w-full">
                <Link href={`${user?.role}/dashboard`}>Go To Dashboard</Link>
              </Button>
            </SheetClose>
          </div>
        ) : (
          <Button asChild className="w-full mb-4">
            <Link href="/login">Login</Link>
          </Button>
        )}
        <ul className="space-y-4">
          {navigationMenus.map((navMenu) => {
            return (
              <li key={navMenu.id}>
                {navMenu.children ? (
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b-0">
                      <AccordionTrigger
                        className={cn(
                          buttonVariants({
                            variant: "link",
                          }),
                          "justify-between"
                        )}
                      >
                        {navMenu.name}
                      </AccordionTrigger>
                      {navMenu.children.map((navSubMenu) => (
                        <AccordionContent key={navSubMenu.id}>
                          <SheetClose className="w-full block" asChild>
                            <Link href={navSubMenu.href}>
                              <Button
                                variant="link"
                                className={cn("w-full justify-start")}
                              >
                                {navSubMenu.name}
                              </Button>
                            </Link>
                          </SheetClose>
                        </AccordionContent>
                      ))}
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <SheetClose className="w-full block" asChild>
                    <Link href={navMenu.href ?? ""}>
                      <Button
                        className={cn("w-full justify-start")}
                        variant="link"
                      >
                        {navMenu.name}
                      </Button>
                    </Link>
                  </SheetClose>
                )}
              </li>
            );
          })}
        </ul>
        <SheetFooter>
          {user && (
            <Button onClick={logout} variant="destructive" className="mt-4">
              Logout
            </Button>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveSidebarMenu;
