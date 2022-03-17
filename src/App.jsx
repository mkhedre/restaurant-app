import "./App.css";
import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function App() {
  const [isopen, setopen] = useState(false);
  const [opencontact, setopencontact] = useState(false);
  return (
    <div className='App'>
      <button className='menu' onClick={() => setopen(true)}>
        menu
      </button>
      <div>
        <button className='contact' onClick={() => setopencontact(true)}>
          contact
        </button>
      </div>

      <Modal
        closeTimeoutMS={200}
        className='Modal'
        overlayClassName='Overlay'
        isOpen={isopen}
        onRequestClose={() => setopen(false)}
        style={customStyles}
        contentLabel='example modal'
      >
        <div className='head'>
          <h1>starter</h1>
          <button
            type='button'
            className='close'
            data-dismiss='modal'
            aria-label='Close'
            onClick={() => setopen(false)}
          >
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
        <ul className='content'>
          <li>
            Tomato Soup <span>$2.26</span>
          </li>
          <li>
            chicken salad <span>$3.26</span>
          </li>
          <li>
            bread and butter <span>$1.26</span>
          </li>
        </ul>
        <div>
          <h1 className='main'>main courses</h1>
          <ul className='content'>
            <li>
              Tomato Soup <span>$2.26</span>
            </li>
            <li>
              chicken salad <span>$3.26</span>
            </li>
            <li>
              bread and butter <span>$1.26</span>
            </li>
          </ul>
        </div>
      </Modal>
      <Modal
        className='Modal'
        overlayClassName='Overlay'
        isOpen={opencontact}
        onRequestClose={() => setopencontact(false)}
        style={customStyles}
        closeTimeoutMS={200}
        contentLabel='example modal'
      >
        <div className='modal-content'>
          <h1>contact</h1>
          <button
            type='button'
            className='close'
            data-dismiss='modal'
            aria-label='Close'
            onClick={() => setopencontact(false)}
          >
            <span aria-hidden='true'>&times;</span>
          </button>
          <form>
            <input type='text' placeholder='Name' />
            <input type='number' placeholder='How many people' />
            <input type='date' />
            <input type='text' placeholder='Message' />
            <input type='submit' />
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default App;
