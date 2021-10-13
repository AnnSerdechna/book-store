import React from 'react';
import axios from 'axios';

const SearchPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyBXmOyPEP7F2oCc7wQjEclpAJ_YxG4pB3I")
      .then((res) => {
        setBooks(res.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log('[books]', books);

  return (
    <div>
      
    </div>
  )
}

export default SearchPage
