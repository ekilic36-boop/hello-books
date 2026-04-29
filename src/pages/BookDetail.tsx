import type { Book } from "./Books";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { api } from "../api/api";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book>();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([
      api.get<Book>(`/books/${id}`),
      api.get<Book[]>("/books"),
    ])
      .then(([bookRes, booksRes]) => {
        setBook(bookRes.data);
        setBooks(booksRes.data);
      })
      .catch(() => {
        setError("Kitap detayı yüklenirken hata oluştu.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="p-6">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="p-6">
        <div className="alert">Kitap bulunamadı.</div>
      </div>
    );
  }

  const currentIndex = books.findIndex(
    (item) => String(item.id) === String(book.id),
  );
  const previousBook = books[currentIndex - 1];
  const nextBook = books[currentIndex + 1];

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <div className="overflow-hidden rounded-box bg-base-100 shadow">
        <img
          src={book.image}
          alt={book.title}
          className="h-72 w-full object-cover"
        />

        <div className="p-6">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <div className="badge badge-primary badge-outline">
            Kitap Detayı
          </div>
        </div>

        <h1 className="text-3xl font-bold md:text-4xl">
          {book.title}
        </h1>
        <p className="mt-2 text-lg text-base-content/70">
          {book.author}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-box bg-base-200 p-4">
            <p className="text-sm text-base-content/60">
              Kitap ID
            </p>
            <p className="mt-1 font-semibold">{book.id}</p>
          </div>

          <div className="rounded-box bg-base-200 p-4">
            <p className="text-sm text-base-content/60">
              Yayın Yılı
            </p>
            <p className="mt-1 font-semibold">{book.year}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to={`/books/${book.id}/edit`}
            className="btn btn-info"
          >
            Düzenle
          </Link>
          <Link
            to={`/books/${book.id}/delete`}
            className="btn btn-error"
          >
            Sil
          </Link>
          <Link to="/books" className="btn">
            Listeye Dön
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap justify-between gap-3 border-t border-base-300 pt-6">
          {previousBook ? (
            <Link
              to={`/books/${previousBook.id}`}
              className="btn btn-outline"
            >
              Önceki Kitap
            </Link>
          ) : (
            <button className="btn btn-outline" disabled>
              Önceki Kitap
            </button>
          )}

          {nextBook ? (
            <Link
              to={`/books/${nextBook.id}`}
              className="btn btn-outline"
            >
              Sonraki Kitap
            </Link>
          ) : (
            <button className="btn btn-outline" disabled>
              Sonraki Kitap
            </button>
          )}
        </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
