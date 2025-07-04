import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Login": "Login",
      "Logout": "Logout",
      "Add Note": "Add Note",
      "Notes List": "Notes List",
      "Note Information": "Note Information",
      "Priority": "Priority",
      "Save": "Save",
      "Edit": "Edit",
      "Delete": "Delete",
      "Search": "Search",
      "Are you sure to delete?": "Are you sure to delete?",
      "Note added": "Note added",
      "Note updated": "Note updated",
      "Note deleted": "Note deleted",
      "Invalid username or password": "Invalid username or password",
      "New Note": "New Note",
      "Edit Note": "Edit Note",
      "No content yet": "No content yet",
      "No results found": "No results found",
      "Login failed": "Login failed",
      "Light Theme": "Light",
      "Dark Theme": "Dark",
    },
  },
  tr: {
    translation: {
      "Login": "Giriş Yap",
      "Logout": "Çıkış Yap",
      "Add Note": "Not Ekle",
      "Notes List": "Not Listesi",
      "Note Information": "Not Bilgisi",
      "Priority": "Öncelik",
      "Save": "Kaydet",
      "Edit": "Düzenle",
      "Delete": "Sil",
      "Search": "Ara",
      "Are you sure to delete?": "Silmek istediğinize emin misiniz?",
      "Note added": "Not eklenmiştir",
      "Note updated": "Not güncellenmiştir",
      "Note deleted": "Not silinmiştir",
      "Invalid username or password": "Geçersiz kullanıcı adı veya şifre",
      "New Note": "Yeni Not",
      "Edit Note": "Not Güncelle",
      "No content yet": "Henüz içerik girilmedi",
      "No results found": "Aramanızla eşleşen bir sonuç bulunamadı",
      "Login failed": "Giriş başarısız",
      "Light Theme": "Açık Tema",
      "Dark Theme": "Koyu Tema",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tr", // varsayılan dil
  fallbackLng: "tr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;