import pocketbase from 'pocketbase'

const pb = new pocketbase('https://smmart.pockethost.io/')
pb.autoCancellation(false)
export default pb