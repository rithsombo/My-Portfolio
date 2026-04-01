type GitHubActivityGridProps = {
  weeks: readonly (readonly number[])[]
}

const toneClasses = [
  "bg-transparent",
  "bg-foreground/[0.08]",
  "bg-foreground/[0.18]",
  "bg-foreground/[0.32]",
  "bg-foreground/[0.92]",
]

export function GitHubActivityGrid({ weeks }: GitHubActivityGridProps) {
  return (
    <div className="mt-6 w-full">
      <div
        className="grid w-full gap-0.5"
        style={{
          gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
        }}
      >
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-rows-7 gap-0.5">
            {week.map((level, dayIndex) => (
              <span
                key={`${weekIndex}-${dayIndex}`}
                className={`aspect-square w-full border border-foreground/8 ${toneClasses[level]}`}
                aria-hidden="true"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
