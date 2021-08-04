let List = (props) => {
  return (
    <ul>
      {props.tasks.map((el) => {
        return (
          <li>
            {el}
            <button
              onClick={() => {
                props.deleteTask(el)
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
