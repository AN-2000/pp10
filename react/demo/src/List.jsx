let List = (props) => {
  return (
    <ul>
      {props.tasks.map((el,index) => {
        return (
          <li key={index}>
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
