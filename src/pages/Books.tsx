import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { api } from "../api/api";
import BookCard from "../components/BookCard";

export type Book = {
  id: number | string;
  title: string;
  year: number | string;
  author: string;
  image: string;
};

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";

  useEffect(() => {
    api
      .get<Book[]>("/books")
      .then((res) => setBooks(res.data))
      .catch(() => {
        setError("Kitaplar yüklenirken bir hata oluştu.");
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredBooks = books.filter((book) => {
    const keyword = search.toLocaleLowerCase("tr");
    return (
      book.title.toLocaleLowerCase("tr").includes(keyword) ||
      book.author.toLocaleLowerCase("tr").includes(keyword)
    );
  });

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

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

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold">Kitaplar</h1>
          <p className="mt-1 text-sm text-base-content/60">
            Detayları görmek için kitabın üzerine tıkla.
          </p>
        </div>
        <Link to="/books/add" className="btn btn-primary">
          Yeni Kitap Ekle
        </Link>
      </div>

      <div className="mb-6">
        <input
          type="search"
          className="input w-full"
          placeholder="Kitap veya yazar ara"
          value={search}
          onChange={handleSearch}
        />
      </div>

      {filteredBooks.length === 0 ? (
        <div className="alert">
          Aramaya uygun kitap bulunamadı.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Books;
