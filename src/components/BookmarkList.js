
const BookmarkList = (props) => {
    return (
        <ul>
            {props.bookmarks.map((bookmark) => (
                <li key={bookmark._id}>
                    {bookmark.title}: <a href={bookmark.url} target='_blank'>{bookmark.url}</a>
                </li>
            ))}
        </ul>
    )
}

export default BookmarkList;