import env from 'react-native-config';

const IS_WEB = process.env.REACT_APP_IP_ADDRESS_API !== undefined;
const PROTOCOL = 'http://';
const HOST_API = IS_WEB ? process.env.REACT_APP_IP_ADDRESS_API : env.REACT_APP_IP_ADDRESS_API;
const PORT_API = IS_WEB ? process.env.REACT_APP_IP_ADDRESS_PORT : env.REACT_APP_IP_ADDRESS_PORT;
const PUSH_STREAM_PORT = IS_WEB
  ? process.env.REACT_APP_PUSH_STREAM_PORT
  : env.REACT_APP_PUSH_STREAM_PORT;
const HOST_FILE = 'http://172.20.80.19:9002';
const PATH_FILE = '/api/file/GetFileStreamById?guid=';

const APP_CONFIGS = {
  ITEM_PER_PAGE: 10,
  CHAT_ITEM_PER_PAGE: 20,
  URL_API: `${PROTOCOL}${HOST_API}:${PORT_API}`,
  URL_PUSH_STREAM: `${HOST_API}:${PUSH_STREAM_PORT}`,
};

export { APP_CONFIGS };
