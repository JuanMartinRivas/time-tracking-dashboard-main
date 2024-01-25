import { useState } from 'react';
import { jeremy, ellipsis, exercise, play, selfCare, social, study, work } from './images';

const daily = [[5, 7], [1, 2], [0, 1], [1, 1], [1, 3], [0, 1]]
const weekly = [[32, 36], [10, 8], [4, 7], [4, 5], [5, 10], [2, 2]]
const monthly = [[103, 128], [23, 29], [13, 19], [11, 18], [21, 23], [7, 11]]

type ButtonProps = {
  name: string;
  text: string;
  arr: Array<number[]>;
  str: string;
  handleClick: (option: Array<number[]>) => () => void;
};

function Button({ name, text, arr, str, handleClick }: ButtonProps) {
  return (
    <button onClick={handleClick(arr, str)} key={name}>{text}</button>
  )
}

function App() {

  const [stats, setStats] = useState(weekly);
  const [time, setTime] = useState("Last Week");

  const handleButtonClick = (option: Array<number[]>, str: string) => () => {
    setStats(option);
    setTime(str);
  }

  // console.log(stats[0][0])

  return (
    <>
      <main>
        <div className="container row">
          <div className="col-left">
            <div className="card user-card">
              <div className="card-top">
                <img src={jeremy} alt="Jeremy" />
                <div className="text-container">
                  <p className="user-card__text">Report for</p>
                  <h1 className="user-card__name">Jeremy Robson</h1>
                </div>
              </div>
              <div className="card-top">
                <ul className="user-card__list">
                  <li className="user-card__list-item">
                    <Button name={"daily"} text={"Daily"} arr={daily} str={"Yesterday"} handleClick={handleButtonClick} />
                  </li>
                  <li className="user-card__list-item">
                    <Button name={"weekly"} text={"Weekly"} arr={weekly} str={"Last Week"} handleClick={handleButtonClick} />
                  </li>
                  <li className="user-card__list-item">
                    <Button name={"monthly"} text={"Monthly"} arr={monthly} str={"Last Month"} handleClick={handleButtonClick} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-right">
            <div className="grid">
              <div className="card time-card">
                <div className="card-top">
                  <img className='card__icon' src={work} alt="" />
                </div>
                <div className="card-bottom">
                  <div className="card-title-container row--mobile">
                    <h2 className="card__title">Work</h2>
                    <button className='card__ellipsis'><img src={ellipsis} alt="" /></button>
                  </div>
                  <h1 className="card__hours">{stats[0][0]}hrs</h1>
                  <h2 className="card__last-hours">{time} - {stats[0][1]}hrs</h2>
                </div>
              </div>
              <div className="card time-card">
                <div className="card-top">
                  <img className='card__icon' src={play} alt="" />
                </div>
                <div className="card-bottom"></div>
              </div>
              <div className="card time-card">
                <div className="card-top">
                  <img className='card__icon' src={study} alt="" />
                </div>
                <div className="card-bottom"></div>
              </div>
              <div className="card time-card">
                <div className="card-top">
                  <img className='card__icon' src={exercise} alt="" />
                </div>
                <div className="card-bottom"></div>
              </div>
              <div className="card time-card">
                <div className="card-top">
                  <img className='card__icon' src={social} alt="" />
                </div>
                <div className="card-bottom"></div>
              </div>
              <div className="card time-card">
                <div className="card-top">
                  <img className='card__icon' src={selfCare} alt="" />
                </div>
                <div className="card-bottom"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
