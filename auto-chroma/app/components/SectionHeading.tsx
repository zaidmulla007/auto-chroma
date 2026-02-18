import AnimateOnScroll from "./AnimateOnScroll";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  center = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <AnimateOnScroll className={`mb-12 lg:mb-16 ${center ? "text-center" : ""}`}>
      <span
        className={`inline-block text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3 ${
          light ? "text-red-light" : "text-red"
        }`}
      >
        {subtitle}
      </span>
      <h2
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold mb-5 leading-[1.15] ${
          light ? "text-white" : "text-navy"
        } ${center ? "red-line red-line-center" : "red-line"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-[15px] lg:text-base leading-relaxed mt-6 ${
            center ? "mx-auto" : ""
          } ${light ? "text-gray-400" : "text-gray-500"}`}
        >
          {description}
        </p>
      )}
    </AnimateOnScroll>
  );
}
