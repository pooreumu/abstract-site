class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        for (const i of this.boards) {
            if (i.name === board.name) {
                throw new Error();
            }
        }
        board.addBoardConfirm = true;
        this.boards.push(board);
    }

    findBoardByName(boardName) {
        for (const i of this.boards) {
            if (i.name === boardName) {
                return i;
            }
        }
        return false;
    }
}

class Board {
    constructor(name) {
        if (name === '') {
            throw new Error();
        }
        if (name === null) {
            throw new Error();
        }
        this.name = name;
        this.addBoardConfirm = false;
        this.articles = [];
    }

    publish(article) {
        if (this.addBoardConfirm === false) {
            throw new Error();
        }
        article.id = `${this.name}-${Math.random()}`;
        const date = new Date();
        const iso = date.toISOString();
        article.createdDate = iso;
        article.publishConfirm = true;
        this.articles.push(article);
    }

    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor({ subject, content, author }) {
        if (subject === null || subject === '') {
            throw new Error();
        } else if (content === null || content === '') {
            throw new Error();
        } else if (author === null || author === '') {
            throw new Error();
        }
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.publishConfirm = false;
        this.comments = [];
    }

    reply(comment) {
        if (this.publishConfirm === false) {
            throw new Error();
        }
        const date = new Date();
        const iso = date.toISOString();
        comment.createdDate = iso;
        this.comments.push(comment);
    }

    getAllComments() {
        return this.comments;
    }
}

class Comment {
    constructor({ content, author }) {
        if (content === null || content === '') {
            throw new Error();
        }
        if (author === null || author === '') {
            throw new Error();
        }
        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
