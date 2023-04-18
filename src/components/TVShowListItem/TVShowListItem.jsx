import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";
const MAX_TITLE_CHAR = 20;

export function TVShowListItem({ tvShow, onClick }) {
  const onClick_ = () => {
    onClick(tvShow);
  };

  return (
    <div onClick={onClick_} className={s.container}>
      <img
        alt={tvShow.name}
        style={{ width: 300, height: 200 }}
        src={
          tvShow.backdrop_path
            ? SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path
            : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
        } //do else if for null images
        className={s.img}
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
}
