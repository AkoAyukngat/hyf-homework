import React, { useState, useEffect } from "react";
import { Card, Icon, Image,  } from "semantic-ui-react";

const GithubUserSearch = () => {
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentUserDetails, setCurrentUserDetails] = useState("");
  const [error, setError] = useState(null);

  const userClickHandler = (login) => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then((result) => {
        console.log("RESULT", result);
        const userDetails = (
          <div>
            <Card>
              <Image src={result.avatar_url} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{result.login}</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  Bio: {result.bio}.
                </a>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  {result.public_repos} repos.
                </a>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  Location: {result.location}.
                </a>
              </Card.Content>
            </Card>
          </div>
        );
        setCurrentUserDetails(userDetails);
      });
  };

  const searchHandler = (e) => {
    setUserInput(e.target.value);
  };

  const searchSubmit = () => {
    if (loading || userInput === "") {
      return;
    }
    setLoading(true);
    fetch(`https://api.github.com/search/users?q=${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log("Data", data);
        let dataStr = null;
        if (data && data.message) {
          dataStr = <li>{data.message}</li>;
          setCurrentUserDetails("");
        } else if (data && data.total_count > 0) {
          dataStr = data.items.map((item) => {
            return (
              <li className="user_details" key={item.id}>
                <a
                  className="user_link"
                  href="#{item.login}"
                  onClick={(e) => userClickHandler(item.login)}
                >
                  {item.login}
                </a>
              </li>
            );
          });
        } else {
          dataStr = "";
          setCurrentUserDetails("");
        }
        setData(dataStr);
      })
      .catch(() => {
        console.log("Error", error);
      });
  };
  useEffect(() => {
    searchSubmit();
  }, [userInput]);

  return (
    <div>
      <div>
        <div className="nav_bar">GitHub User Search</div>
        <input
          className="search_box"
          type="text"
          value={userInput}
          onChange={searchHandler}
        />
        <button
          className="gitsearch_button"
          type="submit"
          onClick={searchSubmit}
        >
          Search
        </button>
      </div>
      <div>
        {loading ? <span className="block">Loading...</span> : null}
        {data === "" ? <span className="block">No Results</span> : null}

        <table>
          <tbody>
            <tr>
              <td>
                <ul className="block">{data}</ul>
              </td>
              <td>{currentUserDetails}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GithubUserSearch;
