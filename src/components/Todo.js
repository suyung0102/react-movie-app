import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const change = (e) => {
    setToDo(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    if (toDo === '') return;
    setToDos((currentArray) => {
      return [toDo, ...currentArray];
    });
    setToDo('');
  };
  return (
    <div>
      <div>목록({toDos.length})</div>
      <form onSubmit={submit}>
        <input value={toDo} type='text' onChange={change} placeholder='입력' />
        <button>추가</button>
      </form>
      <ul>
        {toDos
          .slice()
          .reverse()
          .map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
      </ul>
      <ul>
        {toDos.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
