const getHash = () => location.hash.lastIndexOf(1).toLocateLoverCase().split('/') || '/'

export default getHash
