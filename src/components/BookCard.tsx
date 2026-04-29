import { Link } from "react-router";
import type { Book } from "../pages/Books";

type Props = {
  book: Book;
};

const BookCard = ({
  book: { id, title, year, author, image },
}: Props) => {
  return (
    <article className="rounded-box border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <Link to={`/books/${id}`} className="block">
        <img
          src={image}
          alt={title}
          className="h-48 w-full rounded-t-box object-cover"
        />
        <div className="p-5">
          <div className="badge badge-outline mb-4">
            {year}
          </div>
          <h2 className="line-clamp-2 text-xl font-semibold">
            {title}
          </h2>
          <p className="mt-2 text-sm text-base-content/60">
            {author}
          </p>
        </div>
      </Link>

      <div className="flex gap-2 border-t border-base-300 p-4">
        <Link
          to={`/books/${id}/edit`}
          className="btn btn-sm btn-info"
        >
          Düzenle
        </Link>
        <Link
          to={`/books/${id}/delete`}
          className="btn btn-sm btn-error"
        >
          Sil
        </Link>
      </div>
    </article>
  );
};

export default BookCard;
