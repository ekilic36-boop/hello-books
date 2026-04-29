# 📚 BookDB

BookDB, React ve JSON Server ile gelistirilmis modern bir kitap yonetim uygulamasidir. Kitaplari listeleyebilir, arayabilir, detaylarini inceleyebilir, yeni kitap ekleyebilir, mevcut kitaplari guncelleyebilir ve silebilirsiniz.

## ✨ Ozellikler

- 📖 Kitap listeleme
- 🔎 URL parametresi ile arama (`?search=...`)
- 🧾 Kitap detay sayfasi
- ➕ Yeni kitap ekleme
- ✏️ Kitap guncelleme
- 🗑️ Silme onay sayfasi
- ⏳ Silme onayinda 3 saniyelik geri sayim
- 🖼️ Kapak gorseli destegi
- 👤 Yazar bilgisi
- ⬅️➡️ Detay sayfasinda onceki / sonraki kitap gecisi
- ⚠️ Loading ve error durumlari
- 🚫 404 sayfasi

## 🛠️ Kullanilan Teknolojiler

| Teknoloji | Aciklama |
| --- | --- |
| React 19 | Arayuz gelistirme |
| TypeScript | Tip guvenligi |
| Vite | Gelistirme ve build araci |
| React Router v7 | Sayfa yonlendirme |
| Tailwind CSS | Utility-first CSS |
| DaisyUI | Hazir UI component stilleri |
| Axios | API istekleri |
| JSON Server | Fake REST API |
| Concurrently | Vite ve JSON Server'i beraber calistirma |

## 🚀 Kurulum

Projeyi bilgisayariniza aldiktan sonra bagimliliklari yukleyin:

```bash
npm install
```

## ▶️ Calistirma

Vite ve JSON Server tek komutla beraber baslar:

```bash
npm run dev
```

Uygulama adresi:

```text
http://localhost:5173
```

API adresi:

```text
http://localhost:3000/books
```

## 📜 Komutlar

| Komut | Gorev |
| --- | --- |
| `npm run dev` | Gelistirme sunucusunu ve JSON Server'i baslatir |
| `npm run build` | TypeScript kontrolu yapar ve production build olusturur |
| `npm run lint` | ESLint kontrolunu calistirir |
| `npm run preview` | Build sonrasi on izleme sunucusu acar |

## 🗂️ Proje Yapisi

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

## 🧩 Veri Modeli

Kitap verileri `db.json` dosyasinda tutulur.

```json
{
  "id": "1",
  "title": "Suc ve Ceza",
  "year": "1866",
  "author": "Fyodor Dostoyevski",
  "image": "https://..."
}
```

## 🧭 Sayfalar

| Route | Sayfa |
| --- | --- |
| `/` | Hos geldin sayfasi |
| `/books` | Kitap listesi |
| `/books?search=1984` | Arama sonucuyla kitap listesi |
| `/books/add` | Kitap ekleme |
| `/books/:id` | Kitap detayi |
| `/books/:id/edit` | Kitap guncelleme |
| `/books/:id/delete` | Kitap silme onayi |
| `*` | 404 sayfasi |

## ✅ Notlar

- `react-router-dom` kullanilmamistir, sadece `react-router` kullanilir.
- Sayfa gecisleri icin `<Link to="...">` kullanilir.
- `npm run dev` komutu Vite ve JSON Server'i birlikte calistirir.
- `node_modules` ve `dist` klasorleri GitHub'a yuklenmez.

## 👨‍💻 Gelistirici

Bu proje, React Router, API islemleri ve temel CRUD yapisini pekistirmek icin hazirlanmistir.

