import { useEffect } from "react";

function Popup(props) {
  useEffect(() => {
    if (!props.isOpen) return;
    function closeByEscape(e) {
      if (e.key === `Escape`) {
        props.onClose();
      }
    }

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
    // eslint-disable-next-line
  }, [props.isOpen, props.onClose]);

  function handleOverlay(e) {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };

  return (
    <section
    className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}
    onClick={handleOverlay}>
      <div className={`popup__${props.container}`}>
      <button type="button" className="popup__exit-btn" aria-label="Закрыть модальное окно" onClick={props.onClose}></button>
      {props.children}
      </div>
    </section>
  )
}

export default Popup;
