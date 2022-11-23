import "./App.css";
import Albums from "./Components/Albums/Albums";

function App() {
  const albums = [
    {
      "id": 1,
      "artist": "B Praak",
      "album_title": "Filhaal 2",
      "album_cover": "https://i.scdn.co/image/ab67616d0000b2730f365e81ca21fd7a779dc58a",
      "songs": ""
    },
    {
      "id": 2,
      "artist": "B Praak",
      "album_title": "Mann Bharrya",
      "album_cover": "https://i.scdn.co/image/ab67616d0000b2733169b16f6ec209b9562815fa",
      "songs": ""
    },
    {
      "id": 3,
      "artist": "A R Rahman",
      "album_title": "Atrangi Re",
      "album_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Pp-7OlDbkHNM3LuJcx0D4aOGPXKmCrCDIQ&usqp=CAU",
      "songs": ""
    },
    {
      "id": 4,
      "artist": "Jubin Nautiyal",
      "album_title": "Humnava mere",
      "album_cover": "https://upload.wikimedia.org/wikipedia/en/b/ba/Humnava_Mere.jpg",
      "songs": ""
    },
    {
      "id": 5,
      "artist": "Jubin Nautiyal",
      "album_title": "Mast Nazron Se",
      "album_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRicMcTyGjJLv9rKrFyolyoth73HoDQev64zeC5T6Ky3PtbrJb3cqkptcyc4f12QgNq9Jw&usqp=CAU",
      "songs": ""
    }
  ]

  return (
    <div className="App">
      <Albums albums={albums} />
    </div>
  );
}

export default App;
