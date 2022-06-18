# Case 2 (Soal No. 5)

## Problem

Diketahui data berikut ini.

```ts
type IComment = {
	commentId: number;
	commentContent: string;
	replies?: IComment[];
}

const comments: IComment[] = [
	{
		commentId: 1,
		commentContent: 'Hai',
		replies: [
			{
				commentId: 11,
				commentContent: 'Hai juga',
				replies: [
					{
						commentId: 111,
						commentContent: 'Haai juga hai jugaa'
					},
					{
						commentId: 112,
						commentContent: 'Haai juga hai jugaa'
					}
				]
			},
			{
				commentId: 12,
				commentContent: 'Hai juga',
				replies: [
					{
						commentId: 121,
						commentContent: 'Haai juga hai jugaa'
					}
				]
			}
		]
	},
	{
		commentId: 2,
		commentContent: 'Halooo'
	}
]
```

5. Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua
balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.

## Solution

Solusi dari soal ini terdapat file [solution.ts](solution.ts)