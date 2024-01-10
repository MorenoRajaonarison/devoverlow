import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "@/components/shared/RenderTag";

const RightSidebar = () => {
  const hotQst = [
    { _id: 1, title: "vfervergerg" },
    { _id: 2, title: "vfervffergerg" },
    { _id: 3, title: "vfervedccccsdrgerg" },
    { _id: 4, title: "vferdevergerg" },
    { _id: 5, title: "vfervecxscsdrgerg" },
  ];

  const popTag = [
    { _id: 1, name: "Javascript", totalQst: 5 },
    { _id: 2, name: "PHP", totalQst: 5 },
    { _id: 3, name: "GOLANG", totalQst: 5 },
  ];

  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px] custom-scrollbar">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQst.map((question) => (
            <Link
              key={question._id}
              href={`/question/${question._id}`}
              className="flex cursor-pointer justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt={question.title}
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex w-full flex-col gap-4">
          {popTag.map(({ _id, name, totalQst }) => (
            <RenderTag
              key={_id}
              totalQst={totalQst}
              name={name}
              _id={_id}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
