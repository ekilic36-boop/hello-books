import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 text-center">
      <div className="badge badge-warning badge-outline mb-5">
        404
      </div>
      <h1 className="text-4xl font-bold">
        Sayfa bulunamadı
      </h1>
      <p className="mt-4 text-base-content/70">
        Aradığın sayfa taşınmış ya da hiç oluşturulmamış olabilir.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link to="/" className="btn">
          Ana Sayfa
        </Link>
        <Link to="/books" className="btn btn-primary">
          Kitaplara Git
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
