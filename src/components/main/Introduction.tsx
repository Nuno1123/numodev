interface IntroductionProps {
  name: string;
  summary: string;
}

export default function Introduction({ name, summary }: IntroductionProps) {
  return (
    <section>
      <h1 className="font-heading text-5xl font-bold uppercase tracking-wide text-main-text">
        {name}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-main-muted">
        {summary}
      </p>
    </section>
  );
}
