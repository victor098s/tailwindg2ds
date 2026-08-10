function Card({ image, title, description, buttonText, extra }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-slate-900/95">
      {image && (
        <div className="mb-6 overflow-hidden rounded-[1.75rem] bg-slate-900">
          <img src={image} alt={title} className="h-48 w-full object-cover" />
        </div>
      )}
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-3 text-slate-300">{description}</p>
        </div>
        {extra}
        {buttonText && (
          <button type="button" className="inline-flex items-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
