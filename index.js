// This is an example of a simple functional component created and then rendered using a self-closing tag and the render method
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

ReactDOM.render(
  <div>
    <MainContent />
    <SimpleComponent />
  </div>,
  document.getElementById('root')
);


// Imperative Example of creating a h1 tag on the webpage
 const h1 = document.createElement('h1')
 h1.textContent = "This is an imperative way to program"
 h1.className = 'header'
 document.getElementById('root').append(h1)