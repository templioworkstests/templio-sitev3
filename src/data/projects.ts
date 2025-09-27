export type Project = {
  id: string
  title: string
  who: string[]
  what: string[]
  summary: string
  kpi?: string
  cover: string
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Sito snello, conversioni su',
    who: ['E‑commerce','PMI'],
    what: ['Website','Marketing','Automazioni'],
    summary: 'Pagine leggere, funnel chiaro, remarketing che non fa perdere tempo.',
    kpi: '+18% CR in 6 settimane',
    cover: new URL('@assets/projects/shop.svg', import.meta.url).toString()
  },
  {
    id: 'p2',
    title: 'CRM senza caos',
    who: ['PMI','Real estate'],
    what: ['CRM','Automazioni','Strategia & UX'],
    summary: 'Pipeline pulita, scoring, reminder automatici. Il team segue solo contatti caldi.',
    kpi: '-27% tempo perso su lead freddi',
    cover: new URL('@assets/projects/crm.svg', import.meta.url).toString()
  },
  {
    id: 'p3',
    title: 'Evento pieno, senza stress',
    who: ['Eventi','Creativi'],
    what: ['Marketing','Website','Strategia & UX'],
    summary: 'Landing, calendario, sponsor. Tutto tracciato, niente sprechi.',
    kpi: '+35% iscrizioni con lo stesso budget',
    cover: new URL('@assets/projects/event.svg', import.meta.url).toString()
  },
  {
    id: 'p4',
    title: 'Assistente AI interno',
    who: ['PMI'],
    what: ['App/AI','Automazioni'],
    summary: 'FAQ, preventivi e documenti generati su dati interni.',
    kpi: '-40% ticket ripetitivi',
    cover: new URL('@assets/projects/ai.svg', import.meta.url).toString()
  },
]
