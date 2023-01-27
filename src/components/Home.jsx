import GameCard from "../components/GameCard";
import { useState, useEffect} from "react";
import TodoList from "../components/Todo";

function Home() {
  const [items, setItems] = useState(() => {
    const storedValue = localStorage.getItem("items");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [published_date, setPublishedDate] = useState("");
  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState("");
  const [editUrl, setEditUrl] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editPublishedDate, setEditPublishedDate] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  let date = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();

    setItems([
      {
        id: self.crypto.randomUUID(),
        name: name,
        url: url,
        author: author,
        published_date: date.toDateString(),
      },
      ...items,
    ]);
    localStorage.setItem("items", JSON.stringify(items));

    setName("");
    setUrl("");
    setAuthor("");
  };

  const handleUpdate = (id) => {
    // Find the item in the items array that needs to be updated
    const itemToUpdate = items.find((item) => item.id === id);

    console.log(itemToUpdate.id);

    // Set the edit state variables to the values of the item to be updated
    setName((itemToUpdate.name = editName));
    setUrl((itemToUpdate.url = editUrl));
    setAuthor((itemToUpdate.author = editAuthor));
    setPublishedDate((itemToUpdate.published_date = date.toDateString()));

    // Set the edit state to true to show the edit form
    setEdit(!edit);
  };
  const handleDelete = (id) => {
    setItems(
      items.filter((item) => {
        item.id !== id;
        console.log(localStorage.removeItem("items"));
      })
    );
  };

  return (
    <div className="App">
      <TodoList />
      <section className="create-game">
        <div className="container">
          <div className="create-game-card">
            <h2 className="h2 create-game-title">Create Game</h2>

            <form
              action=""
              className="create-game-form"
              onSubmit={handleSubmit}
            >
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
                  onChange={(e) => setUrl(e.target.value)}
                />

                <input
                  type="text"
                  name="author"
                  id=""
                  value={author}
                  required
                  placeholder="Author"
                  className="input-field"
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <input
                  type="text"
                  name="published_date"
                  placeholder="Published Date"
                  className="input-field published-date"
                  value={published_date}
                  onChange={(e) => setPublishedDate(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                Create
              </button>
            </form>
          </div>
        </div>
      </section>

      <GameCard
        items={items}
        setItems={setItems}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        edit={edit}
        editName={editName}
        setEditName={setEditName}
        setEdit={setEdit}
        editAuthor={editAuthor}
        setEditAuthor={setEditAuthor}
        editPublishedDate={editPublishedDate}
        editUrl={editUrl}
        setEditUrl={setEditUrl}
        setEditPublishedDate={setEditPublishedDate}
        published_date={published_date}
        url={url}
        name={name}
        author={author}
      />
    </div>
  );
}

export default Home;
