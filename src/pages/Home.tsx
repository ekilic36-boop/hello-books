import { Link } from "react-router";

const Home = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-base-200 px-6 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
        <div className="badge badge-primary badge-outline mb-6">
          Hello Books
        </div>

        <h1 className="text-4xl font-bold text-base-content md:text-6xl">
          Hoş Geldin
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-base-content/70 md:text-lg">
          Kitaplarını kolayca listeleyebileceğin, yeni kitap
          ekleyebileceğin ve detayları düzenleyebileceğin
          küçük kitap uygulamana hoş geldin.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/books" className="btn btn-primary">
            Kitaplara Git
          </Link>
          <Link to="/books/add" className="btn btn-outline">
            Yeni Kitap Ekle
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
