from abc import ABC, abstractmethod

# Abstract class yang merepresentasikan item perpustakaan
class LibraryItem(ABC):
    def __init__(self, id, title):
        # Konstruktor untuk inisialisasi ID dan judul item
        self._id = id
        self._title = title

    @abstractmethod
    def display_info(self):
        # Method abstrak untuk menampilkan informasi item
        pass

    @property
    def id(self):
        # Getter untuk ID
        return self._id

    @property
    def title(self):
        # Getter untuk judul
        return self._title

# Class untuk item buku, turunan dari LibraryItem
class Book(LibraryItem):
    def __init__(self, id, title, author):
        # Konstruktor untuk inisialisasi buku dengan penulis
        super().__init__(id, title)
        self.__author = author

    def display_info(self):
        # Menampilkan detail buku
        print("\n==== [BUKU] ====")
        print(f"ID     : {self.id}")
        print(f"Judul  : {self.title}")
        print(f"Penulis: {self.__author}")

# Class untuk item majalah, turunan dari LibraryItem
class Magazine(LibraryItem):
    def __init__(self, id, title, issue):
        # Konstruktor untuk inisialisasi majalah dengan edisi
        super().__init__(id, title)
        self.__issue = issue

    def display_info(self):
        # Menampilkan detail majalah
        print("\n==== [MAJALAH] ====")
        print(f"ID    : {self.id}")
        print(f"Judul : {self.title}")
        print(f"Edisi : {self.__issue}")

# Class utama perpustakaan untuk mengelola item
class Library:
    def __init__(self):
        # Konstruktor inisialisasi list item kosong
        self.__items = []

    def add_item(self, item):
        # Menambahkan item ke dalam list perpustakaan
        self.__items.append(item)
        print("✅ Item berhasil ditambahkan!")

    def show_all_items(self):
        # Menampilkan semua item yang ada di perpustakaan
        print("\n==== SEMUA ITEM ====")
        if not self.__items:
            print("Belum ada item.")
        else:
            for item in self.__items:
                item.display_info()

    def find_item(self, keyword):
        # Mencari item berdasarkan ID atau judul
        print(f"\n==== HASIL PENCARIAN: '{keyword}' ====")
        found = False
        for item in self.__items:
            if keyword.lower() in item.title.lower() or keyword == item.id:
                item.display_info()
                found = True
        if not found:
            print("❌ Item tidak ditemukan.")

# Fungsi utama program (entry point)
def main():
    library = Library()

    # Menampilkan judul utama saat program dimulai
    print("\n========================================")
    print("  SELAMAT DATANG DI LIBRARY NITNUT ^_^   ")
    print("========================================")

    # Loop utama menu perpustakaan
    while True:
        print("\n📚 Menu Perpustakaan")
        print("1. Tambah Buku")
        print("2. Tambah Majalah")
        print("3. Tampilkan Semua Item")
        print("4. Cari Item")
        print("5. Keluar")

        choice = input("Pilih menu (1-5): ")

        if choice == '1':
            # Menambahkan buku baru
            print("\n==== TAMBAH BUKU ====")
            id = input("ID Buku     : ")
            title = input("Judul Buku  : ")
            author = input("Nama Penulis: ")
            library.add_item(Book(id, title, author))

        elif choice == '2':
            # Menambahkan majalah baru
            print("\n==== TAMBAH MAJALAH ====")
            id = input("ID Majalah : ")
            title = input("Judul      : ")
            issue = input("Edisi Ke-  : ")
            library.add_item(Magazine(id, title, issue))

        elif choice == '3':
            # Menampilkan semua item
            library.show_all_items()

        elif choice == '4':
            # Mencari item
            keyword = input("Masukkan Judul atau ID: ")
            library.find_item(keyword)

        elif choice == '5':
            # Keluar dari program
            print("\n👋 Terima kasih telah menggunakan Library Nitnut!")
            break

        else:
            # Menangani input tidak valid
            print("⚠️ Pilihan tidak valid.")

# Menjalankan program jika file dieksekusi langsung
if __name__ == "__main__":
    main()