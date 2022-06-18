import { IComment, comments } from './comments';

// menghitung jumlah komentar dan balasan komentar tersebut
function commentCount(c : IComment) {
	if (c.replies === undefined) {
		return 1;
	}
	let count = 1;
	for (let i = 0; i < c.replies.length; i++) {
		count += commentCount(c.replies[i]);
	}
	return count;
}

// menghitung total komentar dalam array
function commentsCount(c: IComment[]) {
	let count = 0;
	for (let i = 0; i < c.length; i++) {
		count += commentCount(c[i]);
	}
	return count;
}