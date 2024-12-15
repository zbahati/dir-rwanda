"use client"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import {Menu } from "lucide-react"
import Link from "next/link"
import { CustomAccordian } from "./Accordian"

const MobileNav =()=> {
return (
  <div className="md:hidden">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" >
            <Menu/>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="grid gap-4 py-4 place-items-start">
            <div className="grid grid-cols-1 items-center">
              <Link href="/" className="hover:text-blue-800 font-semibold text-xl">About us</Link>
            </div>
            <div className="grid grid-cols-1 items-center">
              <Link href="/interventions" className="hover:text-blue-800 font-semibold text-xl" >Interventions</Link>
            </div>
            <div className="grid grid-cols-1 items-center">
              <Link href="/where-we-work" className="hover:text-blue-800 font-semibold text-xl">Where we work</Link>
            </div>
            <CustomAccordian />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="button"  className="bg-blue-600 w-full" size={"lg"}>Donation</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
  )
}


export default MobileNav