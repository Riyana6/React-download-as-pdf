/*import React from 'react';
import { render } from 'react-dom';
import ReactToPrint from 'react-to-print';

class ComponentToPrint extends React.Component {
  render() { 
    return (
      <table>
        <thead>
          <th>column 1</th>
          <th>column 2</th>
          <th>column 3</th>
        </thead>
        <tbody>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 3</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint 
        trigger={() => {
          return <a href="#">Print this out!</a>;
        }}
        content={()=> this.componentRef}
        />
        <ComponentToPrint ref={el=> (this.componentRef=el)}/>
      </div>
    );
  }
}

//const Example = () => {
//  return <div>Hi Guys!</div>;
//};

render(<Example/>, document.querySelector("#root")
);*/



import React, { useRef } from 'react';
import { render } from 'react-dom';
import { useReactToPrint } from 'react-to-print';

class ComponentToPrint extends React.Component {
  render() { 
    return (
      <table>
        <thead>
          <th>column 1</th>
          <th>column 2</th>
          <th>column 3</th>
        </thead>
        <tbody>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 3</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
 
  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

render(<Example/>, document.querySelector("#root")
);
/*
import React, { useRef } from 'react';
import { render } from 'react-dom';
import { useReactToPrint } from 'react-to-print';

class ComponentToPrint extends React.Component {
  render() { 
    return (
      <div>
        <div style={{color: "blue" ,fontsize:"25px"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc 
        scelerisque viverra mauris in aliquam sem. Ut diam quam nulla porttitor 
        massa id. Velit euismod in pellentesque massa placerat duis ultricies. 
        Sed tempus urna et pharetra pharetra massa massa. Maecenas ultricies mi
        eget mauris pharetra et. Nam libero justo laoreet sit. Ullamcorper eget 
        nulla facilisi etiam dignissim diam. At varius vel pharetra vel turpis nunc. 
        Dictum fusce ut placerat orci. Eu consequat ac felis donec. Ut eu sem integer 
        vitae justo eget magna fermentum iaculis.
        </div>
        <div>
        Used with verbs:

        "I see your point."
        (see, get, understand)

        "He missed the point."
        (missed)

        "You have a great point."
        (have)

        "She made a good point."
        (made, raised)

        "She argued her point."
        (argued, proved, illustrated, discussed)

        "I have reached this point in my life through a lot of effort."
        (reached, gotten to)

        "We added up the points."
        (added up, totaled)

        "The team gained a point in the last quarter."
        (gained, scored, earned)

        "One point was deducted."
        (be + deducted, be + taken away)

        Used with nouns:

        "What was the point difference?"
        (difference)
        </div>
        <div>
          <img src="https://i.pinimg.com/originals/e4/43/6e/e4436e9474484cafc97c168c4e0fd90e.jpg" alt="baby" width="400px" height="250px"/>
        </div>
      </div>
    );
  }
}

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
 
  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

render(<Example/>, document.querySelector("#root")
);*/