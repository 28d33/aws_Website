"use client"

import { forwardRef, createContext, useContext, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface DialogContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const DialogContext = createContext<DialogContextValue | null>(null)

function useDialog() {
  const ctx = useContext(DialogContext)
  if (!ctx) throw new Error("Dialog components must be used within a Dialog")
  return ctx
}

interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  children: React.ReactNode
}

function Dialog({ open: controlledOpen, onOpenChange, defaultOpen = false, children }: DialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen

  const setOpen = useCallback(
    (val: boolean) => {
      if (!isControlled) setUncontrolledOpen(val)
      onOpenChange?.(val)
    },
    [isControlled, onOpenChange],
  )

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  )
}

interface DialogTriggerProps {
  asChild?: boolean
  children: React.ReactNode
  className?: string
}

function DialogTrigger({ asChild, children, className }: DialogTriggerProps) {
  const { setOpen } = useDialog()

  if (asChild) {
    return (
      <span onClick={() => setOpen(true)} className={className}>
        {children}
      </span>
    )
  }

  return (
    <button onClick={() => setOpen(true)} className={className}>
      {children}
    </button>
  )
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const contentVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 10 },
}

interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  showCloseButton?: boolean
}

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className, children, showCloseButton = true, ...props }, ref) => {
    const { open, setOpen } = useDialog()

    return (
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="fixed inset-0 bg-overlay backdrop-blur-sm"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              ref={ref}
              role="dialog"
              aria-modal="true"
              className={cn(
                "relative z-10 w-full max-w-lg rounded-xl bg-background p-6 shadow-lg",
                className,
              )}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2, ease: "easeInOut" }}
              {...(props as React.ComponentPropsWithoutRef<typeof motion.div>)}
            >
              {showCloseButton && (
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 rounded-md p-1 text-muted hover:text-foreground transition-colors duration-200"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              )}
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    )
  },
)
DialogContent.displayName = "DialogContent"

const DialogClose = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    const { setOpen } = useDialog()
    return (
      <button
        ref={ref}
        onClick={() => setOpen(false)}
        className={cn(className)}
        {...props}
      />
    )
  },
)
DialogClose.displayName = "DialogClose"

interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  ),
)
DialogTitle.displayName = "DialogTitle"

interface DialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const DialogDescription = forwardRef<HTMLParagraphElement, DialogDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("mt-1 text-sm text-muted", className)}
      {...props}
    />
  ),
)
DialogDescription.displayName = "DialogDescription"

export { Dialog, DialogTrigger, DialogContent, DialogClose, DialogTitle, DialogDescription }
