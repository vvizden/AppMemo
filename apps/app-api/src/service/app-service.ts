import type { BaseService } from 'electron-ipc-common'

export interface AppVO {
  id: bigint
  name: string
}

export interface AppVOWithItems extends AppVO {
  items: AppItemVO[]
}

export interface AppItemVO {
  id: bigint
  app_id: bigint
  title: string
  value: string
}

export type AppVOParams = Partial<Omit<AppVO, 'id'>> | undefined

export interface AppService extends BaseService<'AppService'> {
  list(params?: AppVOParams): AppVO[]
  listWithItems(params?: AppVOParams): AppVOWithItems[]
}