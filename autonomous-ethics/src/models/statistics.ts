export interface Statistics {
  user: {
    age: number,
    gender: string,
    religious_level: string,
    politics: string,
    education_level: string,
    income_bracket: string,
    country: string
  },
  sessions: {
    choices: [],
    scenarios: []
  },
  date: Date
}
