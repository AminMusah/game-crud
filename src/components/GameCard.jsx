import React from "react";
import GamepadLineIcon from "remixicon-react/GamepadLineIcon";
import GameLineIcon from "remixicon-react/GameLineIcon";
import TimeLineIcon from "remixicon-react/TimeLineIcon";
import LinkIcon from "remixicon-react/LinkIcon";

function GameCard({ items, edit, setEdit,setName, handleUpdate, editName, setEditName }) {
  const handleEdit = () => {
    console.log("edit");
    setEdit(!edit);
    setName(editName)
  };

  return (
    <section className="gears" id="gears">
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

                    <button className="share">
                      <LinkIcon/>
                    </button>

                    <div className="card-time-wrapper">
                      <TimeLineIcon size={15} />
                      <span>{item.published_date}</span>
                    </div>
                  </div>

                  <div className="card-content">
                    <div className="card-title-wrapper">
                      {edit ? (
                        <input type="text" value={editName} autoFocus onChange={(e) => setEditName(e.target.value)} />
                      ) : (
                        <h3 className="h3 card-title">{item.name}</h3>
                      )}
                      <p className="card-subtitle">{item.url}</p>
                    </div>

                    <div className="card-prize">{item.author}</div>
                  </div>

                  <div className="card-actions">
                    {edit && item.id? (
                      <button className="btn btn-primary" onClick={handleEdit}>
                        <GameLineIcon size={15} />
                        <span>Update</span>
                      </button>
                    ) : (
                      <button className="btn btn-primary" onClick={handleEdit}>
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
