import { createBaseTable } from "orchid-orm"
import { uuidv7 } from "uuidv7"

export const BaseTable = createBaseTable({
  columnTypes: t => ({
    ...t,
    id: () => t.uuid().default(uuidv7).primaryKey(),
    now: () => t.timestamps().createdAt,
  }),
  snakeCase: true,
})

export const { sql } = BaseTable
