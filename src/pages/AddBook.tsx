import { Link, useNavigate } from "react-router";
import { api } from "../api/api";
import type { Book } from "./Books";

const AddBook = () => {
  const navigate = useNavigate();

  const handleSubmit = (
    e: React.SubmitEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const book = Object.fromEntries(
      formData.entries(),
    ) as unknown as Book;

    api
      .get<Book[]>(`/books?title:eq=${book.title}`)
      .then((res) => {
        if (res.data.length > 0) {
          alert(book.title + " zaten var");
          return;
        }
        api.post<Book>("/books", book).then(() => {
          navigate("/books");
        });
      });
  };
  return (
    <div className="mx-auto max-w-xl px-6 py-10">
      <form
        className="rounded-box bg-base-100 p-6 shadow"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold">Kitap Ekle</h1>

        <fieldset className="fieldset mt-6">
          <label className="label" htmlFor="title">
            Başlık
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="input w-full"
            placeholder="Suç ve Ceza"
            required
          />

          <label className="label" htmlFor="author">
            Yazar
          </label>
          <input
            id="author"
            name="author"
            type="text"
            className="input w-full"
            placeholder="Fyodor Dostoyevski"
            required
          />

          <label className="label" htmlFor="year">
            Yıl
          </label>
          <input
            id="year"
            name="year"
            type="text"
            className="input w-full"
            placeholder="1866"
            required
          />

          <label className="label" htmlFor="image">
            Kapak Görseli URL
          </label>
          <input
            id="image"
            name="image"
            type="url"
            className="input w-full"
            placeholder="https://..."
            required
          />
        </fieldset>

        <div className="mt-6 flex flex-wrap gap-3">
          <button className="btn btn-primary">Ekle</button>
          <Link to="/books" className="btn">
            İptal
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
