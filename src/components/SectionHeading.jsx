export default function SectionHeading({
  kicker,
  title,
  body,
  center = false,
  className = '',
}) {
  return (
    <div className={`mb-10 lg:mb-12 ${center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}>
      {kicker && (
        <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
          <span className="h-[3px] w-8 rounded-full bg-[#18ac76]" />
          <span className="text-[11px] font-extrabold uppercase tracking-[.18em] text-[#168b68] sm:text-xs">
            {kicker}
          </span>
        </div>
      )}
      <h2 className="section-title mt-4">{title}</h2>
      {body && (
        <p className={`mt-5 text-sm leading-8 text-slate-600 sm:text-base ${center ? 'mx-auto max-w-2xl' : ''}`}>
          {body}
        </p>
      )}
    </div>
  );
}
