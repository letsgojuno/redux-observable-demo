const $ = document.querySelector.bind(document);

import { Observable } from 'rxjs';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

const tickEpic = action$ =>
  action$
    .ofType('START')
    .mergeMap(action =>
      Observable
        .interval(1000)
        .mapTo({type: 'TICK'})
        .takeUntil(action$.ofType('STOP')));


const TimerReducer = (state = 0, action) => {
  switch(action.type) {
    case 'TICK':
      return state + 1;
    default:
      return state;
  }
}


const epicMiddleware = createEpicMiddleware(tickEpic);

const store = createStore(TimerReducer, applyMiddleware(epicMiddleware));

const renderApp = () => {
  $('body').innerHTML = `Count: ${store.getState()}`;
}

store.subscribe(renderApp)

store.dispatch({type: 'START'});

setTimeout(() => store.dispatch({type: 'STOP'}), 3000);

setTimeout(() => store.dispatch({type: 'START'}), 5000);


