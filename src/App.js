import './App.css';
import BlogPosts from './components/BlogPosts';
import Card from './components/Card';
import SinglePost from './components/SinglePost';
import NewBlogPost from './components/NewBlogPost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hi Jon</h1>
       <BlogPosts />
       <Card />
       <SinglePost />
       <NewBlogPost />
      </header>
    </div>
  );
}

export default App;
