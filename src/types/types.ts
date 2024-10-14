export type IOwner = {
  login:string,
  avatar_url?: string,
  type: string,
  site_admin: boolean
}

export type Project = {
  name: string,
  full_name: string,
  private: boolean,
  owner: IOwner,
  created_at: Date,
  watchers_count: number,
  url: string,
}

export type IDate<T> = {
    incomplete_results: boolean,
    items: Array<T>,
    total_count: number, 
  
}