import Link from "next/link";
import React from "react";

const Categories = ({ data, active_id }) => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-3">All Caterogy</h1>

      <ul>
        {data.news_category.map((category) => (
          <li
            key={category.category_id}
            className={`${active_id == category.category_id ? " bg-mauve-400" : "bg-gray-200 text-gray-500"}  text-lg text-center my-4 rounded-sm`}
          >
            <Link className="block p-3" href={`/category/${category.category_id}`}>{category.category_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
