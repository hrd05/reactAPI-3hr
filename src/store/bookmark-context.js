import React, { useState } from "react"

const BookmarkContext = React.createContext({
    bookmarks: [],
    deleteBookmark: (id) => { },
    addBookmark: (bookmark) => { }
})

export const BookmarkContextProvider = (props) => {

    const [bookmarks, setbookmarks] = useState([]);

    const deleteBookmarkHandler = (id) => {
        console.log(id);
    }

    const addBookmarkHandler = (bookmark) => {
        console.log(bookmark);
    }

    const bookmarkContext = {
        bookmarks: bookmarks,
        deleteBookmark: deleteBookmarkHandler,
        addBookmark: addBookmarkHandler
    }

    return (
        <BookmarkContext.Provider value={bookmarkContext}>
            {props.children}
        </BookmarkContext.Provider>
    )
}

export default BookmarkContext;
