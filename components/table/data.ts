export const columns = [
   { name: '#', uid: "id" },
   { name: 'USER', uid: 'user' },
   { name: 'INTEREST', uid: 'interest' },
   { name: 'AGE', uid: 'age' },
   { name: 'EMAIL', uid: 'email' },
   { name: 'MOBILE', uid: 'mobile' },
];

// export const users = [
//    {
//       id: 1,
//       name: 'Tony Reichert',
//       role: 'CEO',
//       team: 'Management',
//       status: 'active',
//       age: '29',
//       avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
//       email: 'tony.reichert@example.com',
//    },
//    {
//       id: 2,
//       name: 'Zoey Lang',
//       role: 'Technical Lead',
//       team: 'Development',
//       status: 'paused',
//       age: '25',
//       avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
//       email: 'zoey.lang@example.com',
//    },
//    {
//       id: 3,
//       name: 'Jane Fisher',
//       role: 'Senior Developer',
//       team: 'Development',
//       status: 'active',
//       age: '22',
//       avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
//       email: 'jane.fisher@example.com',
//    },
//    {
//       id: 4,
//       name: 'William Howard',
//       role: 'Community Manager',
//       team: 'Marketing',
//       status: 'vacation',
//       age: '28',
//       avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
//       email: 'william.howard@example.com',
//    },
//    {
//       id: 5,
//       name: 'Kristen Copper',
//       role: 'Sales Manager',
//       team: 'Sales',
//       status: 'active',
//       age: '24',
//       avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
//       email: 'kristen.cooper@example.com',
//    },
//    {
//       id: 6,
//       name: 'Tony Reichert',
//       role: 'CEO',
//       team: 'Management',
//       status: 'active',
//       age: '29',
//       avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
//       email: 'tony.reichert@example.com',
//    },
//    {
//       id: 10,
//       name: 'Kristen Copper',
//       role: 'Sales Manager',
//       team: 'Sales',
//       status: 'active',
//       age: '24',
//       avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
//       email: 'kristen.cooper@example.com',
//    },
//    {
//       id: 8,
//       name: 'Jane Fisher',
//       role: 'Senior Developer',
//       team: 'Development',
//       status: 'active',
//       age: '22',
//       avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
//       email: 'jane.fisher@example.com',
//    },
//    {
//       id: 7,
//       name: 'Zoey Lang',
//       role: 'Technical Lead',
//       team: 'Development',
//       status: 'paused',
//       age: '25',
//       avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
//       email: 'zoey.lang@example.com',
//    },

//    {
//       id: 9,
//       name: 'William Howard',
//       role: 'Community Manager',
//       team: 'Marketing',
//       status: 'vacation',
//       age: '28',
//       avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
//       email: 'william.howard@example.com',
//    },
//    {
//       id: 11,
//       name: 'Tony Reichert',
//       role: 'CEO',
//       team: 'Management',
//       status: 'active',
//       age: '29',
//       avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
//       email: 'tony.reichert@example.com',
//    },
//    {
//       id: 12,
//       name: 'Kristen Copper',
//       role: 'Sales Manager',
//       team: 'Sales',
//       status: 'active',
//       age: '24',
//       avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
//       email: 'kristen.cooper@example.com',
//    },
//    {
//       id: 13,
//       name: 'Jane Fisher',
//       role: 'Senior Developer',
//       team: 'Development',
//       status: 'active',
//       age: '22',
//       avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
//       email: 'jane.fisher@example.com',
//    },
//    {
//       id: 14,
//       name: 'Zoey Lang',
//       role: 'Technical Lead',
//       team: 'Development',
//       status: 'paused',
//       age: '25',
//       avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
//       email: 'zoey.lang@example.com',
//    },
//    {
//       id: 15,
//       name: 'Tony Reichert',
//       role: 'CEO',
//       team: 'Management',
//       status: 'active',
//       age: '29',
//       avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
//       email: 'tony.reichert@example.com',
//    },
//    {
//       id: 16,
//       name: 'Kristen Copper',
//       role: 'Sales Manager',
//       team: 'Sales',
//       status: 'active',
//       age: '24',
//       avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
//       email: 'kristen.cooper@example.com',
//    },
// ];

export const users = [
   {
      "id": "1",
      "user": "Harry",
      "interest": ["Comics", "Sports"],
      "age": 22,
      "email": "harry@potter.com",
      "mobile": 4234243224,
   },
   {
      "id": "2",
      "user": "Hermione",
      "interest": ["Books", "Politics", "Animals"],
      "age": 21,
      "mobile": 9876543210,
      "email": "hermione@granger.com"
   },
   {
      "id": "3",
      "user": "Ron",
      "interest": ["Chess", "Sports", "Movies"],
      "age": 23,
      "mobile": 5647382910,
      "email": "ron@weasley.com"
   },
   {
      "id": "4",
      "user": "Draco",
      "interest": ["Flying", "Magic", "Cars"],
      "age": 24,
      "mobile": 7362849502,
      "email": "draco@malfoy.com"
   },
   {
      "id": "5",
      "user": "Luna",
      "interest": ["Nature", "Stars", "Art"],
      "age": 20,
      "mobile": 1928374650,
      "email": "luna@lovegood.com"
   }
]


