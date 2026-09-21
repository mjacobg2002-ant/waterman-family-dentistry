import { stats } from '../data/site'

export function StatsBand() {
  return (
    <section aria-label="Practice at a glance" className="grain relative overflow-hidden bg-brand-gradient">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{ background: 'radial-gradient(80% 120% at 0% 0%, rgba(255,255,255,0.14), transparent 55%)' }}
      />
      <div className="container-x relative grid grid-cols-2 gap-y-10 py-12 lg:grid-cols-4 lg:py-14">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-4 text-center lg:text-left ${
              i !== 0 ? 'lg:border-l lg:border-white/15' : ''
            }`}
          >
            <p className="font-serif text-[clamp(2.2rem,4vw,3rem)] font-semibold leading-none text-white">
              {s.value}
              {s.suffix && <span className="ml-1 text-champagne">{s.suffix}</span>}
            </p>
            <p className="mt-2.5 text-sm font-medium leading-snug text-white/80">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
