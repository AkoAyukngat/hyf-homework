import React, { useState } from "react";

const RepoSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);

  const repoSearchHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const onClickSubmit = () => {
    fetch(`https://api.github.com/orgs/${searchInput}/repos`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const searchStr = data.map((item) => {
          return (
            <li key={item.id}>
              Repo Name: {item.name}
              <br />
              URL: <a href="{item.url}"> {item.url} </a>
            </li>
          );
        });
        setData(searchStr);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      <div> HackYourFuture Repositories</div>
      <div>
        <input
          type="text"
          className="input_box"
          value={searchInput}
          onChange={repoSearchHandler}
        />
        <button className="Repos_button" onClick={onClickSubmit}>
          Search
        </button>
      </div>
      <div className="repos_list">
        <ul> {data}</ul>
      </div>
    </div>
  );
};

export default RepoSearch;
