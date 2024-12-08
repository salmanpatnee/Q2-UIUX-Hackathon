import Image from "next/image";
import Link from "next/link";
import { Calendar, TagIcon, User } from "lucide-react";

interface BlogPostProps {
  imageSrc: string;
  imageAlt: string;
  author: string;
  date: string;
  category: string;
  title: string;
  content: string;
  link: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  imageSrc,
  imageAlt,
  author,
  date,
  category,
  title,
  content,
  link,
}) => {
  return (
    <article className="mb-14">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={817}
        height={500}
        className="rounded mb-4"
      />
      <div className="mb-5">
        <ul className="flex items-center gap-8 text-base text-[#9F9F9F]">
          <li>
            <User size={15} className="inline-block fill-[#9F9F9F]" /> {author}
          </li>
          <li>
            <Calendar size={15} className="inline-block stroke-[#9F9F9F]" />{" "}
            {date}
          </li>
          <li>
            <TagIcon size={15} className="inline-block stroke-[#9F9F9F]" />{" "}
            {category}
          </li>
        </ul>
      </div>
      <h2 className="font-medium text-3xl mb-3">{title}</h2>
      <p className="text-base text-[#9F9F9F] mb-7">{content}</p>
      <Link
        href={link}
        className="text-base border-b pb-3 border-black hover:text-primary transition-all"
      >
        Read more
      </Link>
    </article>
  );
};

export default BlogPost;
