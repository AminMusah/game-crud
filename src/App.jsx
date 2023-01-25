import GameCard from "./components/GameCard";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [published_date, setPunlishedDate] = useState("");
  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState('');
  const [editUrl, setEditUrl] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editPublished_date, setEditPunlishedDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let date = new Date()
  
    setItems([...items, {id: items.length, name: name,url: url,author: author,published_date: date.toDateString()}]);
  };


  const handleUpdate = () => {
    setItems([...items, {editName}])
  } 

  return (
    <div className="App">
      <section class="create-game">
        <div class="container">
          <div class="create-game-card">

              <h2 class="h2 create-game-title">Create Game</h2>

            <form action="" class="create-game-form" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id=""
                  name="name"
                  value={name}
                  placeholder="Name"
                  className="input-field"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                 <input
                type="text"
                name="url"
                placeholder="Url"
                value={url}
                className="input-field"
                required
                onChange={(e)=> setUrl(e.target.value)}
              />

              <input
                type="text"
                name="author"
                id=""
                value={author}
                required
                placeholder="Author"
                className="input-field"
                onChange={(e)=>setAuthor(e.target.value)}
              />
              <input
                type="text"
                name="published_date"
                placeholder="Published Date"
                className="input-field published-date"
                value={published_date}
                onChange={(e)=>setPunlishedDate( e.target.value)}
              />
              </div>
              <button type="submit" className="btn btn-secondary">
                Create
              </button>
            </form>
          </div>
        </div>
      </section>

      <GameCard items={items} setItems={setItems} setName={setName} edit={edit} setEdit={setEdit} editName={editName} setEditName={setEditName} handleUpdate={handleUpdate}/>
    </div>
  );
}

export default App;
