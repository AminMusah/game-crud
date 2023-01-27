import {useState,useEffect} from "react";
import GamepadLineIcon from "remixicon-react/GamepadLineIcon";
import GameLineIcon from "remixicon-react/GameLineIcon";
import TimeLineIcon from "remixicon-react/TimeLineIcon";
import DeleteBin2LineIcon from "remixicon-react/DeleteBin2LineIcon";
import Header from "./Header";

function GameCard({
  items,
  setItems,
  edit,
  setEdit,
  handleUpdate,
  handleDelete,
  editName,
  setEditName,
  editAuthor,
  setEditAuthor,
  editUrl,
  editPublishedDate,
  setEditUrl,
  setEditPublishedDate,
}) {
  const handleEdit = (id) => {
    console.log("edit");
    setEdit(!edit);
  };

  return (
    <section className="gears" id="gears">
      <Header />
      <div className="container">
        <h2 className="h2 section-title">check our Games</h2>

        <ul className="gears-list">
          {items.map((item) => {
            return (
              <li key={item.id}>
                <div className="gears-card">
                  <div className="card-banner">
                    <a href="#">
                      <img src="./gears-img-3.png" alt="Gaming mask" />
                    </a>

                    <button
                      className="share"
                      onClick={() => handleDelete(item.id)}
                    >
                      <DeleteBin2LineIcon />
                    </button>

                    <div className="card-time-wrapper">
                      <TimeLineIcon size={15} />
                      {edit ? (
                        <input
                          type="text"
                          value={editPublishedDate}
                          autoFocus
                          placeholder="date"
                          onChange={(e) => setEditPublishedDate(e.target.value)}
                        />
                      ) : (
                        <span>{item.published_date}</span>
                      )}
                    </div>
                  </div>

                  <div className="card-content">
                    <div className="card-title-wrapper">
                      {edit ? (
                        <input
                          type="text"
                          value={editName}
                          autoFocus
                          placeholder="name"
                          onChange={(e) => setEditName(e.target.value)}
                        />
                      ) : (
                        <h3 className="h3 card-title">{item.name}</h3>
                      )}
                      {edit ? (
                        <input
                          type="text"
                          value={editUrl}
                          autoFocus
                          placeholder="url"
                          onChange={(e) => setEditUrl(e.target.value)}
                        />
                      ) : (
                        <a href="#" className="card-subtitle">
                          {item.url}
                        </a>
                      )}
                    </div>
                    {edit ? (
                      <input
                        type="text"
                        value={editAuthor}
                        autoFocus
                        placeholder="author"
                        onChange={(e) => setEditAuthor(e.target.value)}
                      />
                    ) : (
                      <div className="card-prize">{item.author}</div>
                    )}
                  </div>

                  <div className="card-actions">
                    {edit ? (
                      <button
                        className="btn btn-primary"
                        onClick={() => handleUpdate(item.id)}
                      >
                        <GameLineIcon size={15} />
                        <span>Update</span>
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(item.id)}
                      >
                        <GameLineIcon size={15} />
                        <span>Edit</span>
                      </button>
                    )}
                    <button className="btn card-btn">
                      <GamepadLineIcon size={15} />{" "}
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default GameCard;
