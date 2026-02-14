export type ParagraphPart = {
  text: string
  highlight?: boolean
}

export type Paragraph = {
  parts: ParagraphPart[]
}
