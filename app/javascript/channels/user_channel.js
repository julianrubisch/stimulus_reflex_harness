import consumer from "./consumer";
import CableReady from "cable_ready";

consumer.subscriptions.create(
  { channel: "UserChannel", id: 1 },
  {
    received(data) {
      if (data.cableReady) CableReady.perform(data.operations); // Called when there's incoming data on the websocket for this channel
    }
  }
);
