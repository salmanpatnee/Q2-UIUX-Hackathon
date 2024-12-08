import Image from "next/image";
import Link from "next/link";
import React from "react";

type Category = {
  imageUrl: string;
  title: string;
};

interface Props {
  category: Category;
}

const CategoryCard = ({ category }: Props) => {
  return (
    <div className="ui card group">
      <Link href="/shop">
        {/* Category Image */}
        <div className="image">
          <Image
            src={category.imageUrl}
            alt={category.title}
            width={381}
            height={480}
            className="rounded-lg mb-7 border border-transparent transition-all hover:border-primary"
          />
        </div>

        {/* Category Title */}
        <div className="content">
          <h3 className="text-2xl font-semibold text-text text-center group-hover:text-primary transition-colors">
            {category.title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
