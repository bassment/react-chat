import alt from '../alt';
import Actions from '../actions';
import { decorate, bind, datasource } from 'alt/utils/decorators';
import ChannelSource from '../sources/ChannelSource';
import MessageSource from '../sources/MessageSource';
import _ from 'lodash';

@datasource(ChannelSource, MessageSource)
@decorate(alt)
class ChatStore {
  constructor() {
    this.state = {
      user: sessionStorage.getItem('user') || null,
      messages: null,
      messagesLoading: true,
    };
  }

  @bind(Actions.sendMessage)
  sendMessage(message) {
    this.state.message = message;
    setTimeout(this.getInstance().sendMessage, 10);
  }

  @bind(Actions.messageReceived)
  messageReceived(msg) {
    if (this.state.messages[msg.key]) {
      return;
    }

    this.state.messages[msg.key] = msg;

    this.setState({
      messages: this.state.messages,
    });
  }

  @bind(Actions.messagesLoading)
  messagesLoading() {
    this.setState({
      messagesLoading: true,
    });
  }

  @bind(Actions.messagesReceived)
  receivedMessages(messages) {
    _(messages)
      .keys()
      .each((key) => {
        messages[key].key = key;
      })
      .value();

    this.setState({
      messages,
      messagesLoading: false,
    });
  }

  @bind(Actions.channelOpened)
  channelOpened(selectedChannel) {
    _(this.state.channels)
      .values()
      .each((channel) => {
        channel.selected = false;
      })
      .value();

    selectedChannel.selected = true;

    this.setState({
      selectedChannel,
      channels: this.state.channels,
    });

    setTimeout(this.getInstance().getMessages, 100);
  }

  @bind(Actions.channelsReceived)
  receivedChannels(channels) {
    let selectedChannel;

    _(channels)
      .keys()
      .each((key, index) => {
        channels[key].key = key;
        if (channels[key].selected) {
          selectedChannel = channels[key];
        }
      })
      .value();

    this.setState({
      channels,
      selectedChannel,
    });

    setTimeout(this.getInstance().getMessages, 100);
  }

  @bind(Actions.login)
  login(user) {
    sessionStorage.setItem('user', user);
    this.setState({
      user: user,
    });
  }

  @bind(Actions.logout)
  logout() {
    sessionStorage.clear();
    this.setState({
      user: null,
    });
  }
}

export default alt.createStore(ChatStore);
