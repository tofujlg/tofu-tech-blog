import Link from "next/link";
import { slug } from "github-slugger";
import { badgeVariants } from "./ui/badge";

interface LanguageProps {
  lang: string;
  current?: boolean;
  count?: number;
}

const langs = {
  ja: '日本語',
  en: 'English',
}

export function Language({ lang, current, count }: LanguageProps) {
  return (
    <Link
      className={badgeVariants({
        variant: current ? "default" : "secondary",
        className: "no-underline rounded-md",
      })}
      href={`/langs/${slug(lang)}`}
    >
      {langs[lang as keyof typeof langs] ?? lang} {count ? `(${count})` : null} 
    </Link>
  );
}