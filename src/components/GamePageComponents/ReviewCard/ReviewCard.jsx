const ReviewCard = (props) => {
  const { author, organisation, rating, description, link } = props;

  return (
    <>
      <div>
        <div>
          <p>{organisation}</p>
          <p>by {author}</p>
        </div>

        <div>
          <p> {rating}</p>
          <p>{description}</p>
          <a href={link}></a>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
