import Filter from "@/components/shared/Filter/Filter";
import HomeFilter from "@/components/shared/Filter/HomeFilter";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/shared/cards/QuestionCard";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import Link from "next/link";

const questions = [
  {
    _id: 1,
    title: "Quelle est la capitale de la France ?",
    author: { _id: 1, name: "Moreno" },
    upVotes: 10,
    views: 50,
    answer: 3,
    createdAt: new Date("2023-05-15"),
    tags: [
      { _id: 1, name: "géographie" },
      { _id: 2, name: "culture" },
    ],
  },
  {
    _id: 2,
    title: "Qu'est-ce que la photosynthèse ?",
    author: { _id: 2, name: "Moreno" },
    upVotes: 20,
    views: 100,
    answer: 5,
    createdAt: new Date("2023-08-20"),
    tags: [
      { _id: 3, name: "biologie" },
      { _id: 4, name: "sciences" },
    ],
  },
  {
    _id: 3,
    title: "Comment fonctionne la blockchain ?",
    author: { _id: 2, name: "Moreno" },
    upVotes: 15,
    views: 80,
    answer: 7,
    createdAt: new Date("2023-10-10"),
    tags: [
      { _id: 5, name: "technologie" },
      { _id: 6, name: "informatique" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark-100_light900 ">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h[46px] px-4 py-3 !text-light-900">
            Ask Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between max-sm:flex-col sm:items-center gap-5">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilter />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((qst) => (
            <QuestionCard
              key={qst._id}
              _id={qst._id}
              title={qst.title}
              author={qst.author}
              upVotes={qst.upVotes}
              answer={qst.answer}
              createdAt={qst.createdAt}
              tags={qst.tags}
              views={qst.views}
            />
          ))
        ) : (
          <NoResult
            title="THere's no question to show"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
          assumenda quasi? Quam recusandae natus incidunt."
            textBtn="Ask a Question"
            link="/ask-question"
          />
        )}
      </div>
    </>
  );
}
