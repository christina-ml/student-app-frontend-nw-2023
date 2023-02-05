// https://beta.reactjs.org/learn/sharing-state-between-components
import { useState } from "react";
import { foods, filterItems } from "./data.js";

/*
  filterItems(foods, query)
1. allow FilterableList access to foods and query
2. (ideally) keep List dumb


<FilterableList /> foods, query (state)
  <SearchBar /> query (prop)
  <List /> dumb (needs to receive the filtered list)


TODOS:
1. Lift query up
    1a. remove state from SearchBar and pass to parent as props
    1b. hardcoding data
    1c. add state to FilterableList

2. Implement filtering
    2a. Do the filtering in the body of FilterableList
    

*/



export default function FilterableList() {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar query={query} handleChange={handleChange} />
      <hr />
      <List items={filterItems(foods, query)} />
    </>
  );
}

function SearchBar({ query, handleChange }) {
  return (
    <label>
      Search: <input value={query} onChange={handleChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
