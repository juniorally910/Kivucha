interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export function PageHero({ title, subtitle, imageSrc }: PageHeroProps) {
  return (
    <div className="relative h-[400px] overflow-hidden bg-[#0a1f44]">
      {imageSrc && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${imageSrc}')` }}
        />
      )}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="text-xl text-white/90">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
