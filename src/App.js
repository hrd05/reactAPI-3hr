
import { Container } from 'react-bootstrap';
import Main from './components/Main';
import './App.css';
import { useState, useEffect } from 'react';
import FormModal from './components/FormModal';
import BookmarkList from './components/BookmarkList';

function App() {
  const [formActive, setFormActive] = useState(false);
  const [bookmarks, setBookmark] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      const response = await fetch('https://crudcrud.com/api/89b8625535ae4c6fa664f6bc2f0bf5d2/bookmark')
      const data = await response.json();
      console.log(data);
      setBookmark(data);
    }
    fetchBookmarks();
  }, [])

  const updateFormStatus = () => {
    setFormActive(true);
  }

  const closeFormModal = () => {
    setFormActive(false);
  }



  return (
    <Container>
      <Main onClick={updateFormStatus} />
      <FormModal show={formActive} onHide={closeFormModal} />
      <h4 className='mt-5'>All Bookmarks</h4>
      <BookmarkList bookmarks={bookmarks} />
    </Container>
  );
}

export default App;
