interface IntroductionProps {
  summary: string;
}

export default function Introduction({ summary }: IntroductionProps) {
  return (
    <section>
      <h1 className="text-3xl font-bold text-foreground">Introduction</h1>
      <p className="mt-3 text-base leading-relaxed text-muted">{summary}</p>
    </section>
  );
}
