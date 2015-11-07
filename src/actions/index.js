import alt from '../alt';
import Firebase from 'firebase';

class Actions {
  login(args) {
    return (dispatch) => {
      this.firebaseRef = new Firebase('https://react-chat-app.firebaseio.com');
      this.firebaseRef.authWithOAuthPopup("google", (error, user) => {
        if (error) { return; }
        dispatch(user);
      });
    };
  }
}

export default alt.createActions(Actions);
