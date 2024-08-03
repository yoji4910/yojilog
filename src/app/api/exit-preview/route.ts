import { exitPreview } from '@prismicio/next'

/**
 * This endpoint exits a preview session.
 */
export const runtime = 'edge'

export function GET() {
  return exitPreview()
}
