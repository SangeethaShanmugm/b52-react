import { Counter } from './Counter';

function Msg({ name, picture }) {
  return (
    <div>
      <img className="profile-pic" src={picture} />
      <h1>Hi {name}</h1>
      <Counter />
    </div>
  );
}
