import Image from "next/image";
import Link from "next/link";

type Props = {
  img: string;
  value: string | number;
  title: string;
  alt: string;
  textStyles?: string;
  isAuthor?: boolean;
  href?: string;
};

const Metric = ({
  img,
  value,
  alt,
  title,
  textStyles,
  isAuthor,
  href,
}: Props) => {
  const metricContent = (
    <>
      <Image
        src={img}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain ${href && "rounded-full"}`}
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${
            isAuthor && "max-sm:hidden"
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex-center gap-1">
        {metricContent}
      </Link>
    );
  }

  return <div className="flex-center flex-wrap gap-1">{metricContent}</div>;
};

export default Metric;
