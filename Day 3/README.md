# Redis Pub/Sub

- Redis Pub/Sub implements the messaging system where the senders (in redis terminology called publishers) sends the messages while the receivers (subscribers) receive them. The link by which the messages are transferred is called channel. In Redis, a client can subscribe any number of channels.
- Publishers is the one which is spreading out the messeage.
- Subscribers are accepting the message.
- Pub/Sub is mainly used in real time Data Analytics. Ex: Youtube Live Chat.
- `SUBSCRIBE channel` - Used to Subscribe a Channel.
    - Ex: `SUBSCRIBE devsnest`   
    - It receives 3 things - what type is, channel and message
    - Ex: 1. "message", 2. "devsnest", 3. "hello"
- `PUBLISH channel message` - Publish the message to the channel
    - Ex: `PUBLISH devsnest hello` 
- `PSUBSCRIBE pattern` - Subscribe to All Channels who satisfy the given pattern.
- `UNSUBSCRIBE channel` - Unsubscribe to a specific channel
-  `PUNSUBSCRIBE pattern` - Unsubscribe to All Channels who satisfy the given pattern.
- __Publish/Subscribe__ has the disadvantage that it does not save the history and is not scalable.

# Redis Streams

- Redis Streams help us create Streams along Redis.
- The advantage os stream is we can store history.
- `XADD streamName ID key value` - Add data into Stream
    - Ex: `XADD mystream 10000 name Anna`
    - Ex: `XADD mystream * name Anna` - If ID is to be auto generated. ID is basically a Timestamp
- `XADD mystream * MAXLEN 100000 name devs` - To Limit the messages.
- `XREAD COUNT 200 STREAMS myStream 0` - Read first 200 messages starting from 0th index.
- `XREAD COUNT 200 STREAMS myStream 10002-0` - Read first 200 messages after this id 10002-0.
- `XREAD BLOCK 10000 STREAMS myStream 0` - Close the Stream if any data is not received in 10000ms after the 0th index.
- `XREAD BLOCK 0 STREAMS myStream 10002-0` - To never close the Stream if any data is not received after this id 10002-0.
- `XREAD BLOCK 10000 STREAMS myStream $` - It is connected to the socket and it displays the data when it receives it and acts as Pub/Sub.
- `XRANGE mystream 10001-0 1630334456611` - Print Data from mystreams from starting ID to ending ID.
- `XRANGE mystream 10001-0 1630334456611 COUNT 10` - Print Data from mystreams with limit 10, from starting ID to ending ID.
- `XRANGE mystream - + COUNT 2` - Print 2 values from starting. This is helpful when we don't know IDs.
-  `XREVRANGE mystream + - COUNT 2` - Print 2 values from reverse. This is helpful when we don't know IDs.
