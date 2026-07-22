export default function Eyebrow({ label }: { label: string }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
      [&nbsp;&nbsp;{label}&nbsp;&nbsp;]
    </p>
  )
}
