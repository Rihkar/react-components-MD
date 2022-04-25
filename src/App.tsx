import React from 'react';
import './App.scss';
import CardBoxContainer from './components/bigboxes/CardBoxContainer/CardBoxContainer';
import Smallboxes from './components/smallboxes/Smallboxes';
import './style/reset.scss';

const tasks = [
  {
    id: '1',
    text: 'Do laundry',
    done: true,
  },
  {
    id: '2',
    text: 'Clean house',
    done: false,
  },
  {
    id: '3',
    text: 'Make pica and deliver to Ketijas house',
    done: true,
  },
];

const vegetables = [
  {
    id: '1',
    title: 'Cucumber',
    description: 'It is green',
    backgroundColor: 'green',
    available: true,
  },
  {
    id: '2',
    title: 'Carrot',
    description: 'It is orange',
    backgroundColor: 'orange',
    available: false,
  },
  {
    id: '3',
    title: 'Sweet pepper',
    description: 'It is in many colors',
    backgroundColor: 'yellow',
    available: true,
  },
];

const App = () => (
  <div className="container">
    <div
      className="smallboxes-container"
    >
      {tasks.map((element) => (
        !element.done ? (
          <Smallboxes text={element.text} />
        ) : (<div className="line-through"><Smallboxes text={element.text} /></div>)

      ))}
    </div>
    <div className="smallboxes-container">
      {tasks.map((element) => (
        !element.done ? (
          <Smallboxes text={element.text} />
        ) : (<div className="display-none"><Smallboxes text={element.text} /></div>)

      ))}
    </div>
    <div className="bigbox-container">
      {vegetables.map((element) => (
        element.available ? (
          <div className="card">
            <div className="cardBorder" style={{ backgroundColor: element.backgroundColor }}>
              <CardBoxContainer
                title={element.title}
                id={element.id}
                description={element.description}
              />
            </div>
          </div>
        )
          : (
            <div className="card">
              not available
            </div>
          )
      ))}
    </div>

    <div className="bigbox-container">
      {vegetables.ma((element) => (
        element.available && (
          <div className="card">
            <div className="cardBorder" style={{ backgroundColor: element.backgroundColor }}>
              <CardBoxContainer
                title={element.title}
                id={element.id}
                description={element.description}
              />
            </div>
          </div>
        )

      ))}
    </div>
  </div>
);

export default App;
