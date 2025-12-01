const API_BASE = 'https://staging-api.dreambody.ai'

export type ProjectsResponse = {
  projects: ProjectShort[],
  total: number,
  limit: number,
  offset: number
}

export type Cover = {
  id: string,
  url: string,
  cover_type: 'banner' | 'thumbnail'
}

export type ProjectShort = {
  id: string,
  name: string,
  application_type: "Game" | "Application" | "Metaverse"
  genre: string,
  description: string,
  about: null,
  status: "Alpha/Beta" | "Soft Launch" | "Live" | "Maintenance",
  launch_date: string,
  covers: Cover[]
}

export type ProjectExtended = {
  id: string,
  name: string,
  application_type: "Game" | "Application" | "Metaverse"
  genre: string,
  description: string,
  about: null,
  status: "Alpha/Beta" | "Soft Launch" | "Live" | "Maintenance",
  launch_date: string,
  covers: Cover[],
  team_members: TeamMember[]
  social_media?: SocialMedia,
  token_info?: TokenInfo,
  whitepaper?: Whitepaper
}

export type SocialMedia = {
    twitter_url: string,
    discord_url: string,
    facebook_url: string,
    instagram_url: string,
    telegram_url: string,
    other_url: string
}

export type TeamMember = {
  id: string,
  name: string,
  role: string,
  social_media_link: string,
  email: string
}

export type Whitepaper = {
  pdf_url: string,
  external_link: string
}

export type TokenInfo = {
  has_token: boolean,
  network?: string,
  ticker?: string,
  contract_address?: string,
  is_traded: boolean,
  exchange_names?: string,
  is_on_aggregators: boolean,
  aggregator_names?: string
}

export const getPublicProjects = async () => {
  const response = await fetch(`${API_BASE}/api/platform/projects/`)
  if (!response.ok) {
    throw new Error('Failed to fetch public projects')
  }
  const data = await response.json()
  return data as ProjectsResponse
}
export const getPublicProjectById = async (id: string) => {
  const response = await fetch(`${API_BASE}/api/platform/projects/${id}/`)
  if (!response.ok) {
    throw new Error('Failed to fetch public project by id')
  }
  const data = await response.json()
  return data as ProjectExtended
}