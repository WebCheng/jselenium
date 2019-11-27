const URL = 'http://localhost:3000'

const mockNewUser = {
    email: 'aaa@aaa.com',
    password: '12345678',
    firstName: 'First',
    lastName: 'Last'
}

const mockNewItem = {
    name: 'aaaaa mock book 1',
    category: 'book',
    location: 'location 1',
    price: "100",
    description: 'This is a mock item'
}

module.exports = {
    URL,
    mockNewItem,
    mockNewUser,
}
