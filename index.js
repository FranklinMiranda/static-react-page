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
    )
}



ReactDOM.render(<MainContent/>,
 document.getElementById('root')
 )

