import styles from './Timer.module.scss';

const Timer = (props) => {
  const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
  };

  const convertMsToTime = () => {
    let miliseconds = props.time;
    let seconds = Math.floor(miliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    //format to display
    miliseconds = miliseconds % 1000;
    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;
    return (
      padTo2Digits(hours) + ':' + padTo2Digits(minutes) + ':' + padTo2Digits(seconds) + ':' + padTo2Digits(miliseconds)
    );
  };
  return <div className={styles.timer}>{convertMsToTime(props.time)}</div>;
};

export default Timer;
