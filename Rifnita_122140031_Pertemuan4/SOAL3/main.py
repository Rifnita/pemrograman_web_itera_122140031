# main.py

# Cara import 1
import math_operations as mo

# Cara import 2
from math_operations import celsius_to_fahrenheit, celsius_to_kelvin, fahrenheit_to_kelvin, kelvin_to_celsius

def garis():
    print("-" * 50)

def main():
    print("PROGRAM MATEMATIKA DAN KONVERSI SUHU".center(50))
    garis()

    # Menggunakan import alias
    print("=== Perhitungan Bangun Datar ===")
    print(f"Luas Persegi (sisi=4)            : {mo.luas_persegi(4):.2f}")
    print(f"Keliling Persegi (sisi=4)        : {mo.keliling_persegi(4):.2f}")
    print(f"Luas Persegi Panjang (5x3)       : {mo.luas_persegi_panjang(5,3):.2f}")
    print(f"Keliling Persegi Panjang (5x3)   : {mo.keliling_persegi_panjang(5,3):.2f}")
    print(f"Luas Lingkaran (r=7)             : {mo.luas_lingkaran(7):.2f}")
    print(f"Keliling Lingkaran (r=7)         : {mo.keliling_lingkaran(7):.2f}")
    print(f"Luas Segitiga (alas=6, tinggi=4) : {mo.luas_segitiga(6,4):.2f}")
    print(f"Keliling Segitiga (3,4,5)        : {mo.keliling_segitiga(3,4,5):.2f}")

    garis()

    # Menggunakan import spesifik fungsi
    print("=== Konversi Suhu ===")
    print(f"25°C to Fahrenheit  : {celsius_to_fahrenheit(25):.2f} °F")
    print(f"25°C to Kelvin      : {celsius_to_kelvin(25):.2f} K")
    print(f"77°F to Kelvin      : {fahrenheit_to_kelvin(77):.2f} K")
    print(f"300K to Celsius     : {kelvin_to_celsius(300):.2f} °C")

    garis()

if __name__ == "__main__":
    main()