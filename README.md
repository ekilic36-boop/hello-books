# BookDB

BookDB, React ve JSON Server ile gelistirilmis basit bir kitap yonetim uygulamasidir. Kitaplari listeleyebilir, detaylarini gorebilir, yeni kitap ekleyebilir, mevcut kitaplari guncelleyebilir ve silebilirsiniz.

## Ozellikler

- Kitap listeleme
- Kitap detay sayfasi
- Kitap ekleme
- Kitap guncelleme
- Kitap silme onayi
- Kitap arama (`?search=...`)
- Yazar ve kapak gorseli alanlari
- Loading ve error durumlari
- 404 sayfasi
- Detay sayfasinda onceki / sonraki kitap gecisi
- Silme sayfasinda 3 saniyelik geri sayim

## Kullanilan Teknolojiler

- React 19
- TypeScript
- Vite
- React Router v7
- Tailwind CSS
- DaisyUI
- Axios
- JSON Server
- Concurrently

## Kurulum

Projeyi indirdikten sonra bagimliliklari yukleyin:

```bash
npm install
```

## Calistirma

Vite ve JSON Server tek komutla beraber calisir:

```bash
npm run dev
```

Uygulama:

```text
http://localhost:5173
```

API:

```text
http://localhost:3000/books
```

## Komutlar

```bash
npm run dev
```

Gelistirme sunucusunu ve JSON Server'i beraber baslatir.

```bash
npm run build
```

TypeScript kontrolu yapar ve production build olusturur.

```bash
npm run lint
```

ESLint kontrolunu calistirir.

## Proje Yapisi

```text
src/
  api/
    api.ts
  components/
    BookCard.tsx
    Navbar.tsx
    NavItem.tsx
  layouts/
    MainLayout.tsx
  pages/
    AddBook.tsx
    BookDetail.tsx
    Books.tsx
    DeleteBook.tsx
    EditBook.tsx
    Home.tsx
    NotFound.tsx
  routes/
    MyRouter.tsx
```

## Veri Modeli

Kitaplar `db.json` dosyasinda tutulur:

```json
{
  "id": "1",
  "title": "Suc ve Ceza",
  "year": "1866",
  "author": "Fyodor Dostoyevski",
  "image": "https://..."
}
```

## Notlar

- Projede `react-router-dom` kullanilmamistir, sadece `react-router` kullanilir.
- Sayfa gecisleri icin `<Link to="...">` kullanilir.
- `node_modules` ve `dist` klasorleri GitHub'a yuklenmez.
