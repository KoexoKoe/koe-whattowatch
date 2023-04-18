import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

//props is rating, because we need to use some data from the props.rating to communicate with stars = Stars==rating number
export function FiveStarRating({ rating }) {
  //Declare Star Icon Array
  const starList = [];
  //Store number of filled stars
  const starFillCount = Math.floor(rating);
  //Store if yes/no there is half stars
  const hasHalfStar = rating - parseInt(rating) >= 0.5;
  //Store the number of empty stars
  const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);
  //Push the filled star Icon
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  //Push half star icon if necessary
  if (hasHalfStar) {
    starList.push(<StarHalf key={"star-half"} />);
  }
  //Push the empty star icons
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }
  //Render the Star Icon array
  return <div>{starList}</div>;
}
