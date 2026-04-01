"use client"

import { Moon, Search, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type SectionLink = {
  id: string
  label: string
}

type HeaderActionsProps = {
  sections: SectionLink[]
}

export function HeaderActions({ sections }: HeaderActionsProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")

  const filteredSections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return sections
    }

    return sections.filter((section) => {
      return section.label.toLowerCase().includes(normalizedQuery)
    })
  }, [query, sections])

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  function scrollToSection(id: string) {
    const element = document.getElementById(id)

    if (!element) {
      return
    }

    setOpen(false)
    setQuery("")

    requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  return (
    <div className="flex w-full items-center justify-end gap-1.5 text-xs normal-case tracking-normal sm:w-auto sm:gap-2">
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="size-8 rounded-full border-foreground/10 bg-foreground/[0.03] text-foreground/70 hover:bg-foreground/[0.06] hover:text-foreground sm:size-8"
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4 dark:hidden" />
        <Moon className="hidden h-4 w-4 dark:block" />
      </Button>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="h-8 min-w-0 flex-1 justify-start rounded-full border-foreground/10 bg-foreground/[0.03] px-3 text-foreground/55 hover:bg-foreground/[0.06] hover:text-foreground sm:h-9 sm:w-[240px] sm:flex-none sm:px-4"
          >
            <Search className="h-4 w-4" />
            <span className="truncate text-[11px] sm:text-sm">Search sections</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="w-[min(20rem,calc(100vw-2rem))] p-0 sm:w-[340px]"
          onCloseAutoFocus={(event) => event.preventDefault()}
        >
          <Command shouldFilter={false}>
            <CommandInput
              placeholder="Search sections..."
              value={query}
              onValueChange={setQuery}
            />
            <CommandList>
              <CommandEmpty>No matching sections.</CommandEmpty>
              <CommandGroup heading="Sections">
                {filteredSections.map((section) => (
                  <CommandItem
                    key={section.id}
                    value={section.label}
                    onSelect={() => scrollToSection(section.id)}
                  >
                    <span>{section.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
