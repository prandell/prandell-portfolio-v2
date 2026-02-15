interface StyleInterface {
  paddingX: string
  paddingY: string
  padding: string
  heroHeadText: string
  heroSubText: string
  sectionHeadText: string
  sectionSubText: string
}

const styles: StyleInterface = {
  paddingX: 'sm:px-12 px-5',
  paddingY: 'sm:py-12 py-6',
  padding: 'sm:px-12 px-5 sm:py-12 py-5',

  heroHeadText:
    'font-display text-white font-black uppercase tracking-[0.07em] lg:text-[72px] sm:text-[56px] xs:text-[44px] text-[34px] leading-[0.92]',
  heroSubText:
    'font-mono text-[#c3bfb5] font-medium lg:text-[15px] sm:text-[13px] xs:text-[12px] text-[10px] uppercase tracking-[0.18em]',

  sectionHeadText:
    'font-display text-[#f2efe9] font-black uppercase tracking-[0.07em] md:text-[44px] sm:text-[36px] xs:text-[30px] text-[26px] leading-[0.92]',
  sectionSubText:
    'font-mono sm:text-[12px] text-[10px] text-[#bcb6ab] uppercase tracking-[0.28em]'
}

/** Reusable panel Tailwind presets */
const panels = {
  paper:
    'bg-[linear-gradient(140deg,rgba(27,27,27,0.96),rgba(19,19,19,0.96))] text-[#ece9e2] shadow-[9px_9px_0_#050505] max-md:shadow-[6px_6px_0_#080808]',
  paperLight:
    'bg-[#e8e1d4] text-[#151412] shadow-[9px_9px_0_#050505] max-md:shadow-[6px_6px_0_#080808]',
  ink: 'bg-[linear-gradient(145deg,rgba(23,23,23,0.96),rgba(12,12,12,0.96))] text-[#f2eee6] shadow-[9px_9px_0_#050505] max-md:shadow-[6px_6px_0_#080808]',
  brutal:
    'bg-[rgba(19,19,19,0.88)] shadow-[9px_9px_0_#050505] max-md:shadow-[6px_6px_0_#080808]',
  cta: 'bg-[#e8e1d4] text-[#151412] shadow-[9px_9px_0_#050505] max-md:shadow-[6px_6px_0_#080808]',
  hero: 'bg-transparent'
}

/** Reusable input Tailwind presets */
const inputs = {
  contact:
    'w-full border border-white/16 rounded-none bg-[#131313] text-[#ebe7de] focus:outline-none focus:border-white/42',
  cta: 'w-full border border-[rgba(18,16,13,0.36)] bg-[#f4efe5] text-[#171512] focus:outline-none focus:border-[rgba(18,16,13,0.65)]',
  dialog:
    'w-full border border-white/22 bg-[#121212] p-2.5 text-sm leading-normal text-[#ece8df] focus:outline-none focus:border-white/45'
}

export { styles, panels, inputs }
