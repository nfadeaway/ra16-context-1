import React, {useRef} from 'react';

const List = (props) => {
  const listRef = useRef(null);

  const setActivePerson = (e) => {
    if (e.currentTarget.dataset.id !== props.activePersonID.currentPerson) {
      if (props.activePersonID.currentPerson) {
        props.setActivePersonID({
          currentPerson: e.currentTarget.dataset.id,
          prevPerson: props.activePersonID.currentPerson
        })
        listRef.current.querySelector('.active').classList.remove('active')
      } else {
        props.setActivePersonID({
          currentPerson: e.currentTarget.dataset.id,
          prevPerson: ''
        })
      }
      e.currentTarget.classList.add('active')
    }
  }

  return (
    <div ref={listRef} className="list">
      {props.persons.length > 0 && props.persons.map((person) =>
        <div className="person-block" data-id={person.id} key={person.id} onClick={setActivePerson}>
          {person.name}
        </div>
      )}
    </div>
  );
};

export default List;