import { getFormattedNumber, getTimestamp } from "@/lib/utils";
import Link from "next/link";
import Metric from "../Metric";
import RenderTag from "../RenderTag";

type Props = {
  _id: number;
  title: string;
  author: { _id: number; name: string; picture?: string };
  upVotes: number;
  tags: { _id: number; name: string }[];
  answer: number;
  createdAt: Date;
  views: number;
  picture?: string;
};

const QuestionCard = ({
  _id,
  title,
  author,
  upVotes,
  tags,
  answer,
  createdAt,
  views,
}: Props) => {
  return (
    <div className="card-wrapper p-9 sm:px-11 rounded-[10px]">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div className="">
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
        {/* If sign in add edit delete action */}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map(({ _id, name }) => (
          <RenderTag _id={_id} name={name} />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          img={author.picture ? author.picture : "/assets/icons/avatar.svg"}
          alt="user"
          value={author.name}
          title={` - asked ${getTimestamp(createdAt)}`}
          href={`/profile/${author._id}`}
          textStyles="small-medium text-dark400_light800"
          isAuthor
        />
        <Metric
          img="/assets/icons/like.svg"
          alt="UpVOtes"
          value={getFormattedNumber(upVotes)}
          title=" Votes"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          img="/assets/icons/message.svg"
          alt="messages"
          value={getFormattedNumber(answer)}
          title=" Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          img="/assets/icons/eye.svg"
          alt="views"
          value={getFormattedNumber(views)}
          title=" Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};

export default QuestionCard;
