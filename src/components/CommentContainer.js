const commentData = [
  {
    name: "Vipul Kumar",
    text: "Nice video",
    replies: [
      {
        name: "Vipul Kumar",
        text: "Nice video",
        replies: [],
      },
    ],
  },
  {
    name: "Vipul Kumar",
    text: "Nice video",
    replies: [
      {
        name: "Vipul Kumar",
        text: "Nice video",
        replies: [],
      },
    ],
  },
  {
    name: "Vipul Kumar",
    text: "Nice video",
    replies: [
      {
        name: "Vipul Kumar",
        text: "Nice video",
        replies: [
          {
            name: "Vipul Kumar",
            text: "Nice video",
            replies: [
              {
                name: "Vipul Kumar",
                text: "Nice video",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Vipul Kumar",
    text: "Nice video",
    replies: [
      {
        name: "Vipul Kumar",
        text: "Nice video",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex p-2 bg-gray-100 rounded-md shadow-sm">
      <img
        className="w-10 h-10 rounded-full"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />

      <div className="px-3">
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-3 w-[1100px]">
      <h1 className="text-2xl font-bold ">Comments :</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
