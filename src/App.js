import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <h1><a href="/">Web</a></h1>
    </header>
  )
}
function Nav(prop) {
  console.log(prop);
  const li = prop.data.map(({id, title, body}) => 
    <li key={id}>
      <a href={"/read/"+id}>{title}</a>
      <p>{body}</p>
    </li>
    );
  return(
    <nav>
      <ol>
        
        {li}
      </ol>
    </nav>
  );
}
function Article(prop) {
  return (
    <article>
      <h2>{prop.title}</h2>
      {prop.body}
    </article>)
}

function App() {
  const topics = [{id:1, title: 'html', body:'html is ...'},
  {id:2, title: 'css', body:'css is ...'} ]
  return (
    <div>
      <Header></Header>
      <Nav data={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB!"></Article>
    </div>
  );
}

export default App;
