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

        return this.boards.push(board);
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
    }
}

class Article {}

class Comment {}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
