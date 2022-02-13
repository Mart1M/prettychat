import './Terminal.scss';
import TerminalMessage from './TerminalMessage';

export default function Terminal(props) {

  const msgs = props.messages;

  return (
    <div className='chat theme-terminal'>
      {msgs.map(msg => <TerminalMessage key={msg.id} message={msg} />)}
      <div className="terminal-message">
        <span className="chevron">{'>'}</span>
        <span className="cursor"></span>
      </div>
    </div>
  )
}
