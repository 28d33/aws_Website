import { teamGroups, type TeamMember } from "@/data/team"
import { LinkedInIcon } from "@/components/icons/linkedin"

function RosterCard({ member, i }: { member: TeamMember; i: number }) {
  return (
    <li className="group">
      <div className="aspect-[4/5] overflow-hidden rounded-lg border border-border bg-gradient-to-br from-border/40 to-transparent">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
        />
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-serif text-lg font-medium text-foreground truncate">{member.name}</h3>
          <p className="mt-0.5 text-xs text-muted">{member.role}</p>
        </div>
        {member.socials?.linkedin && (
          <a
            href={member.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-0.5 shrink-0 text-muted transition-colors hover:text-blue"
            aria-label={`${member.name} on LinkedIn`}
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        )}
      </div>
      <p className="mt-2 text-sm leading-6 text-muted line-clamp-2">{member.bio}</p>
      <p className="sr-only">{`Member ${i + 1} of 7`}</p>
    </li>
  )
}

export function TeamGrid() {
  const coreTeam = teamGroups[0]
  if (!coreTeam) return null

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 pb-28">
      <header className="pt-28 sm:pt-36">
        <h1 className="font-serif text-5xl sm:text-6xl font-light tracking-tight text-foreground">
          The team.
        </h1>
        <p className="mt-4 max-w-md text-base text-muted">
          Seven students run the group. Four hundred more show up for it.
        </p>
      </header>

      <ul className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {coreTeam.members.map((member, i) => (
          <RosterCard key={member.name} member={member} i={i} />
        ))}
      </ul>
    </div>
  )
}
