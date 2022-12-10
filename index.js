// This is an example of a simple functional component created and then rendered using a self-closing tag and the render method
const Navbar = () => {
  return (
    <nav className="navigation">
      <h1>Franklin's Website</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

const MainContent = () => {
  return (
    <div>
      <h1>This is a Simple Functional Component</h1>
      <h1>React can include these types of components</h1>
      <ul>
        <li>JSX Elements</li>
        <li>Simple Functional Components</li>
        <li>ES6 Stateless Components</li>
        <li>React Stateful Components</li>
      </ul>
    </div>
  );
};

// This is a simple functional component
const SimpleComponent = () => {
  return (
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
      <tr>
        <td>Franklin</td>
        <td>Miranda</td>
      </tr>
      <tr>
        <td>Anna</td>
        <td>Miranda</td>
      </tr>
    </table>
  );
};

// This JSX element can be rendered inserting it into the render method using {} curly brackets
const page = <h1>This is a JSX Element</h1>;

// Imperative Example of creating a h1 tag on the webpage
 const h1 = document.createElement('h1')
 h1.textContent = "This is an imperative way to program"
 h1.className = 'header'
 document.getElementById('root').append(h1)

//  JSX is JavaScript XML was created to use with React to be able to write HTML directly in JavaScript
// JSX creates a JavaScript object that is then passed to React to render as HTML
//const jsxElement = <h1 className="header">This is JSX</h1>
//console.log(jsxElement)
// Some differences are using className instead of class

const page1 = 
    <div>
        <h1>This Element was composed as a JSX Element</h1>
        <h1>JSX Elements are the simplest type of React Components</h1>
        <ul>
            <li>JSX allows declarative writting of HTML in JavaScript</li>
            <li>JSX was developed by the React Team</li>
        </ul>
    </div>

ReactDOM.render(
    <div>
      <Navbar />
      <MainContent />
      <SimpleComponent />
      {page}
      {page1}
    </div>,
    document.getElementById('root')
  );