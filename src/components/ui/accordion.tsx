"use client"

import { createContext, useContext, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionContextValue {
  openItems: string[]
  toggleItem: (value: string) => void
  type: "single" | "multiple"
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

function useAccordion() {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error("Accordion components must be used within an Accordion")
  return ctx
}

interface AccordionProps {
  type?: "single" | "multiple"
  defaultValue?: string[]
  value?: string[]
  onValueChange?: (value: string[]) => void
  children: React.ReactNode
  className?: string
}

function Accordion({
  type = "single",
  defaultValue = [],
  value,
  onValueChange,
  children,
  className,
}: AccordionProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState<string[]>(defaultValue)
  const isControlled = value !== undefined
  const openItems = isControlled ? value : uncontrolledValue

  const toggleItem = useCallback(
    (itemValue: string) => {
      const next = isControlled
        ? value!
        : uncontrolledValue

      if (type === "single") {
        const result = next.includes(itemValue) ? [] : [itemValue]
        if (!isControlled) setUncontrolledValue(result)
        onValueChange?.(result)
      } else {
        const result = next.includes(itemValue)
          ? next.filter((v) => v !== itemValue)
          : [...next, itemValue]
        if (!isControlled) setUncontrolledValue(result)
        onValueChange?.(result)
      }
    },
    [type, isControlled, value, uncontrolledValue, onValueChange],
  )

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn("divide-y divide-border", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

function AccordionItem({ className, value, ...props }: AccordionItemProps) {
  const { openItems } = useAccordion()
  const isOpen = openItems.includes(value)

  return (
    <div
      className={cn("py-2", className)}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    />
  )
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string
}

function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  const { toggleItem, openItems } = useAccordion()
  const value = (props as Record<string, string>).value ?? ""

  // Derive value from context if not explicitly a prop
  const itemValue = value

  return (
    <button
      onClick={() => itemValue && toggleItem(itemValue)}
      className={cn(
        "flex w-full items-center justify-between py-2 text-sm font-medium text-foreground transition-colors duration-200",
        "hover:text-blue",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown
        size={16}
        className={cn(
          "text-muted transition-transform duration-200 ease-in-out",
          openItems.includes(itemValue) && "rotate-180",
        )}
      />
    </button>
  )
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
}

function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  const { openItems } = useAccordion()
  const value = (props as Record<string, string>).value ?? ""
  const isOpen = openItems.includes(value)

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className={cn("pb-2 pt-1 text-sm text-muted", className)} {...props}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
