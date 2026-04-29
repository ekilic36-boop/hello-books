import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { api } from "../api/api";
import type { Book } from "./Books";

const DeleteBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get<Book>(`/books/${id}`)
      .then((res) => setBook(res.data))
      .catch(() => {
        setError("Silinecek kitap yüklenirken hata oluştu.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (countdown === 0) return;

    const timerId = window.setTimeout(() => {
      setCountdown((current) => current - 1);
    }, 1000);

    return () => window.clearTimeout(timerId);
  }, [countdown]);

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
      <p className="p-6 text-base-content/70">
        Yükleniyor veya kitap bulunamadı...
      </p>
    );
  }

  const handleSubmit = (
    e: React.SubmitEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    api.delete(`/books/${book.id}`).then(() => {
      navigate("/books");
    });
  };

  return (
    <div className="mx-auto max-w-xl px-6 py-10">
      <form
        onSubmit={handleSubmit}
        className="rounded-box border border-error/30 bg-base-100 p-6 shadow"
      >
        <div className="badge badge-error badge-outline mb-4">
          Silme Onayı
        </div>

        <h1 className="text-2xl font-bold">
          Kitabı silmek istiyor musun?
        </h1>

        <p className="mt-3 text-base-content/70">
          <span className="font-semibold text-base-content">
            {book.title}
          </span>{" "}
          kitabı listeden kalıcı olarak silinecek.
        </p>

        <div className="mt-5 rounded-box bg-base-200 p-4">
          <p className="text-sm text-base-content/70">
            {countdown > 0
              ? `Silme butonu ${countdown} saniye sonra aktif olur.`
              : "Silme butonu aktif."}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="submit"
            className="btn btn-error"
            disabled={countdown > 0}
          >
            Evet, Sil
          </button>
          <Link to="/books" className="btn">
            Vazgeç
          </Link>
        </div>
      </form>
    </div>
  );
};

export default DeleteBook;
