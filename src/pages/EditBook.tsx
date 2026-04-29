import { Link, useNavigate, useParams } from "react-router";
import type { Book } from "./Books";
import { api } from "../api/api";
import { useEffect, useState } from "react";

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState<Book>();
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get<Book>(`/books/${id}`)
      .then((res) => setBook(res.data))
      .catch(() => {
        setError("Kitap bilgileri yüklenirken hata oluştu.");
      });
  }, [id]);

  if (error) {
    return (
      <div className="p-6">
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }

  if (!book) {
    return (
      <p className="p-6 text-base-content/70">
        Yükleniyor veya kitap bulunamadi...
      </p>
    );
  }

  const handleSubmit = (
    e: React.SubmitEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedBook = {
      ...book,
      ...Object.fromEntries(formData.entries()),
    } as Book;

    api.put(`/books/${id}`, updatedBook).then(() => {
      navigate(`/books/${id}`);
    });
  };

  return (
    <div className="mx-auto max-w-xl px-6 py-10">
      <form
        className="rounded-box bg-base-100 p-6 shadow"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold">
          Kitap Güncelle
        </h1>
        <p className="mt-2 text-sm text-base-content/60">
          {book.title} bilgilerini düzenliyorsun.
        </p>

        <fieldset className="fieldset mt-6">
          <label className="label" htmlFor="title">
            Başlık
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="input w-full"
            defaultValue={book.title}
          />

          <label className="label" htmlFor="author">
            Yazar
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="input w-full"
            defaultValue={book.author}
          />

          <label className="label" htmlFor="year">
            Yıl
          </label>
          <input
            type="text"
            id="year"
            name="year"
            className="input w-full"
            defaultValue={book.year}
          />

          <label className="label" htmlFor="image">
            Kapak Görseli URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            className="input w-full"
            defaultValue={book.image}
          />
        </fieldset>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="submit" className="btn btn-primary">
            Güncelle
          </button>
          <Link to={`/books/${id}`} className="btn">
            İptal
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
