const Index = () => {
  return (
    <main className="min-h-screen bg-[#11100d] text-[#f5f0e8]">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-10 sm:px-10 sm:py-14">
        <div className="flex flex-1 items-center">
          <div className="w-full animate-in fade-in duration-700">
            <div className="mb-10">
              <div className="mb-6 inline-flex rounded-full border border-[#3d362a] bg-[#1a1814] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-[#c7a56a]">
                Nightlight LLC
              </div>

              <h1
                className="text-5xl leading-none tracking-[-0.04em] text-[#f7f2ea] sm:text-7xl"
                style={{
                  fontFamily:
                    'Georgia, Cambria, "Times New Roman", Times, serif',
                }}
              >
                Nightlight LLC
              </h1>

              <p className="mt-5 text-sm uppercase tracking-[0.28em] text-[#c7a56a] sm:text-base">
                Independent mobile game studio
              </p>
            </div>

            <div className="max-w-xl space-y-6">
              <p className="text-lg leading-8 text-[#d7d0c5] sm:text-xl">
                Nightlight LLC is an independent studio focused on making social
                and party games for mobile. Home of Couch Cards.
              </p>

              <a
                href="mailto:hello@nightlight.llc"
                className="inline-flex items-center rounded-full border border-[#4b4336] bg-[#191713] px-5 py-3 text-sm font-medium text-[#f5f0e8] transition-colors hover:bg-[#24211c] hover:text-white"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

        <footer className="pt-12 text-sm text-[#9f978c]">
          © 2026 Nightlight LLC. All rights reserved.
        </footer>
      </div>
    </main>
  );
};

export default Index;