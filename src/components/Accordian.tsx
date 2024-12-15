import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getInvolved, Publications } from "./NavLink"
import Link from "next/link"

export function CustomAccordian() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-semibold text-xl">Publications</AccordionTrigger>
        <AccordionContent className="grid grid-rows-2 gap-4 px-3">
          {Publications.map((el)=>(
            <Link href={el.href} key={el.title} className="hover:text-blue-800">{el.title}</Link>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-semibold text-xl">Get Involved</AccordionTrigger>
        <AccordionContent className="grid grid-rows-4 gap-4 px-3">
          {getInvolved.map((el)=>(
            <Link href={el.href} key={el.title} className="hover:text-blue-800">{el.title}</Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
