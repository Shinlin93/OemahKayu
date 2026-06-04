import { quickFacts } from "../data";
import { quickFactIcons } from "./Icons";

export default function QuickFacts() {
  return (
    <section className="bg-[#2C1A0E] py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-[#F5EFE6]/5">
          {quickFacts.map((f, i) => (
            <div
              key={i}
              className="bg-[#2C1A0E] flex flex-col items-center py-8 px-4 text-center gap-3"
            >
              <div className="text-[#B8962E]">{quickFactIcons[i]}</div>
              <div>
                <p className="text-[#F5EFE6]/50 text-xs tracking-widest uppercase font-light mb-0.5">
                  {f.label}
                </p>
                <p className="text-[#F5EFE6] font-serif-display text-lg font-light">
                  {f.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
