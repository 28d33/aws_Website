import Link from "next/link"
import Image from "next/image"
import { teamGroups } from "@/data/team"

/**
 * Roster strip — seven equal members, no numbering.
 * Photos sit quiet in grayscale; in color when you reach for them.
 */
function TeamStrip() {
  const coreTeam = teamGroups[0]
  if (!coreTeam) return null

  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28 border-t border-border/70">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-foreground">
          The seven.
        </h2>
        <Link href="/team" className="text-sm text-muted transition-colors hover:text-blue">
          Full roster
        </Link>
      </div>

      <ul className="mt-10 grid grid-cols-4 gap-x-4 gap-y-6 sm:grid-cols-7">
        {coreTeam.members.map((member) => (
          <li key={member.name} className="group relative">
            <Link href="/team" className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue">
              <span className="relative block aspect-square overflow-hidden rounded-full border border-border">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
                />
              </span>
              <span className="mt-2 block truncate text-xs text-muted transition-colors group-hover:text-foreground">
                {member.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export { TeamStrip }
