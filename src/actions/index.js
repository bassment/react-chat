import alt from '../alt';
import Firebase from 'firebase';

class Actions {
  constructor() {
    this.generateActions(
      'channelsReceived',
      'channelsFailed',
      'messagesReceived',
      'messagesFailed',
      'channelOpened',
      'messagesLoading',
      'sendMessage',
      'messageSendSuccess',
      'messageSendError',
      'messageReceived',
    );
  }

  login(history) {
    return (dispatch) => {
      this.firebaseRef = new Firebase('https://react-chat-app.firebaseio.com');
      this.firebaseRef.authWithOAuthPopup('google', (error, user) => {
        if (error) { return; }

        dispatch(user);

        history.pushState(null, '/chat');
      });
    };
  }

  logout(history) {
    return (dispatch) => {
      dispatch();

      history.pushState(null, '/login');
    };
  }
}

export default alt.createActions(Actions);
