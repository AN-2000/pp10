import Pagination from "./Pagination";

let Table = (props) => {
  console.log(props);

  let allMovies = props.moviesData;
  let currFilter = props.selectedFilter;

  let filteredMoviesArr = allMovies.filter((el) => {
    if (currFilter == "All Genre") {
      return el;
    } else if (el.genre.name == currFilter) {
      return el;
    }
  });

  return (
    <>
      <div class="row">
        <div class="col-10">
          <table class="table mt-4">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {filteredMoviesArr.map((el) => {
                return (
                  <tr key={el._id}>
                    <td>{el.title}</td>
                    <td>{el.genre.name}</td>
                    <td>{el.numberInStock}</td>
                    <td>{el.dailyRentalRate}</td>
                    <td>like</td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default Table;
