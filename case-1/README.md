# Case 1 (Soal No. 1-4)

## Problem

Andi menjual beraneka ragam buah. Diketahui catatan buah yang dimiliki Andi saat ini
adalah sebagai berikut.

```ts
type IFruit = {
	fruitId: number,
	fruitName: string,
	fruitType: 'IMPORT' | 'LOCAL',
	stock: number
}

const fruits: IFruit[] = [
	{
		fruitId: 1,
		fruitName: 'Apel',
		fruitType: 'IMPORT',
		stock: 10
	},
	{
		fruitId: 2,
		fruitName: 'Kurma',
		fruitType: 'IMPORT',
		stock: 20
	},
	{
		fruitId: 3,
		fruitName: 'apel',
		fruitType: 'IMPORT',
		stock: 50
	},
	{
		fruitId: 4,
		fruitName: 'Manggis',
		fruitType: 'LOCAL',
		stock: 100
	},
	{
		fruitId: 5,
		fruitName: 'Jeruk Bali',
		fruitType: 'LOCAL',
		stock: 10
	},
	{
		fruitId: 5,
		fruitName: 'KURMA',
		fruitType: 'IMPORT',
		stock: 20
	},
	{
		fruitId: 5,
		fruitName: 'Salak',
		fruitType: 'LOCAL',
		stock: 150
	}
]
```

1. Buah apa saja yang dimiliki Andi? (*fruitName*)
2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
(*fruitType*). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
masing-masing wadah?
3. Berapa total stock buah yang ada di masing-masing wadah?
4. Apakah ada komentar terkait kasus di atas?

## Solution

1. Buah yang dimiliki Andi berjumlah  antara lain `Apel`, `Kurma`, `apel`, `Manggis`, `Jeruk Bali`, `KURMA`, dan `Salak`.

2. 
	Dari tipe data `IFruit` yang sudah dideklarasikan, atribut *fruitType* hanya memiliki 2 kemungkinan nilai, yaitu `IMPORT` dan `LOCAL`. Oleh karena itu, untuk memisahkan buah hanya butuh dua tipe.

	Pada wadah `IMPORT`, terdapat buah `Apel`, `Kurma`, `apel`, dan `KURMA`.
	Pada wadah `LOCAL`, terdapat buah `Manggis`, `Jeruk Bali`, dan `Salak`.

3. Didapatkan total buah dalam wadah `IMPORT` 100, sedangkan total buah dalam wadah `LOCAL` sebanyak 350.
	```
	IMPORT: 
	Apel = 10
	Kurma = 20
	apel = 50
	KURMA = 20
	Total: 10 + 20 + 50 + 20 = 100

	LOCAL: 
	Manggis = 100
	Jeruk Bali = 10
	Salak = 150
	Total: 100 + 10 + 150 = 350
	```

4. 
	Terkait kasus tersebut, ada baiknya jika atribut fruitName diturunkan kembali menjadi atribut lain, yaitu nama buah dan variasi buah jika ada. Contohnya, buah jeruk yang dapat berupa jeruk bali, atau jeruk medan. 

	Selain itu, untuk nama buah dapat dituliskan dengan ketentuan yang konsisten, seperti diharuskan menggunakan uppercase atau lowercase. Hal ini dilakukan untuk meminimalisir kemungkinan kesalahan yang terjadi di masa depan.