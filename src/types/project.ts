export type ProjectLink = {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

export type ProjectCard = {
  title: string
  period: string
  team: string
  description: string
  tags: string[]
  highlights: string[]
  links: ProjectLink[]
  accent: string
}
