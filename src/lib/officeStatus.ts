import { hours } from '../data/site'

export type OfficeStatus = {
  open: boolean
  label: string
}

/**
 * Computes an "Open now" / "Closed" indicator from the configured hours,
 * evaluated in the practice's local timezone (America/New_York).
 */
export function getOfficeStatus(now: Date = new Date()): OfficeStatus {
  // Resolve the current weekday + hour in Virginia Beach regardless of viewer TZ.
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(now)

  const weekday = parts.find((p) => p.type === 'weekday')?.value ?? ''
  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? '0')
  const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? '0')
  const decimal = hour + minute / 60

  const today = hours.find((h) => h.day === weekday)

  if (today && today.openHour !== null && today.closeHour !== null) {
    if (decimal >= today.openHour && decimal < today.closeHour) {
      return { open: true, label: `Open today until ${today.close}` }
    }
    if (decimal < today.openHour) {
      return { open: false, label: `Opens today at ${today.open}` }
    }
  }

  // Find the next open day for a helpful closed message.
  const order: string[] = hours.map((h) => h.day)
  const startIdx = order.indexOf(weekday)
  for (let i = 1; i <= 7; i++) {
    const next = hours[(startIdx + i) % 7]
    if (next.openHour !== null) {
      const dayLabel = i === 1 ? 'tomorrow' : next.day
      return { open: false, label: `Closed · Opens ${dayLabel} at ${next.open}` }
    }
  }

  return { open: false, label: 'Closed' }
}
